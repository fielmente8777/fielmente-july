import { useCallback, useEffect, useRef, useState } from "react";
import { useDebounce } from "./useDebounce";
import { emailError, nameError, phoneError } from "@/lib/leadGuard";
import { submitLead } from "@/lib/submitLead";

declare global {
  interface Window {
    oaiq?: (...args: any[]) => void;
  }
}

export interface ConsultationFormData {
  name: string;
  countryCode: string;
  phone: string;
  email: string;
  message?: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  [key: string]: string | undefined;
}

interface useConsultationFormProps {
  includeMessage?: boolean;
  onSubmitSuccess?: () => void;
}

const initialFormData: ConsultationFormData = {
  name: "",
  countryCode: "+91",
  phone: "",
  email: "",
  message: "",
};

const useConsultationForm = ({
  includeMessage,
  onSubmitSuccess,
}: useConsultationFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] =
    useState<ConsultationFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});

  const debouncedEmail = useDebounce(formData.email, 500);
  const debouncedPhone = useDebounce(formData.phone, 500);
  const debouncedName = useDebounce(formData.name, 500);

  // When the form appeared: forms sent within a few seconds are bots (checked by /api/lead).
  const startedAt = useRef(0);
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  // Same rules as /api/lead (src/lib/leadGuard.ts), so visitors see the problem before sending.
  const validateEmail = (email: string): boolean => !emailError(email);
  const validatePhone = (phone: string, countryCode = formData.countryCode): boolean => !phoneError(countryCode, phone);

  // Debounced Email Validation
  useEffect(() => {
    if (debouncedEmail && !validateEmail(debouncedEmail)) {
      setErrors((prev) => ({
        ...prev,
        email: "Invalid email format",
      }));
    } else if (debouncedEmail && validateEmail(debouncedEmail)) {
      setErrors((prev) => ({
        ...prev,
        email: undefined,
      }));
    }
  }, [debouncedEmail]);

  // Debounced Phone Validation
  useEffect(() => {
    if (debouncedPhone && !validatePhone(debouncedPhone)) {
      setErrors((prev) => ({
        ...prev,
        phone: phoneError(formData.countryCode, debouncedPhone) ?? undefined,
      }));
    } else if (debouncedPhone && validatePhone(debouncedPhone)) {
      setErrors((prev) => ({
        ...prev,
        phone: undefined,
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedPhone, formData.countryCode]);

  // Debounced Name Validation
  useEffect(() => {
    if (debouncedName && nameError(debouncedName)) {
      setErrors((prev) => ({
        ...prev,
        name: nameError(debouncedName) ?? undefined,
      }));
    } else if (debouncedName) {
      setErrors((prev) => ({
        ...prev,
        name: undefined,
      }));
    }
  }, [debouncedName]);

  const validateForm = useCallback(() => {
    const newErrors: FormErrors = {};
    let isValid = true;

    const nameProblem = nameError(formData.name);
    if (nameProblem) {
      newErrors.name = nameProblem;
      isValid = false;
    }

    const phoneProblem = phoneError(formData.countryCode, formData.phone);
    if (phoneProblem) {
      newErrors.phone = phoneProblem;
      isValid = false;
    }

    const emailProblem = emailError(formData.email);
    if (emailProblem) {
      newErrors.email = emailProblem;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }, [formData]);

  // handle form submission
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    // Clear error for this field
    if (errors[name as keyof FormErrors]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const setFieldValue = (field: keyof ConsultationFormData, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));

    if (errors[field as keyof FormErrors]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: "",
      }));
    }
  };

  // reset form
  const resetForm = () => {
    setFormData(initialFormData);
    setErrors({});
  };

  // privyr api endpoint and body
  // const DEFAULT_API_ENDPOINT = "https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/7lHAUjtz#generic-webhook";
  // email: formData.email,
  // name: formData.name,
  // phone: `${formData.countryCode}${formData.phone}`,
  // message: formData.message,
  // if (data.success) {
  //   setSubmitSuccess(true);
  //   resetForm();
  //   if (onSubmitSuccess) {
  //     onSubmitSuccess();
  //   }
  // }

  // handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const description = includeMessage ? `Message: ${formData.message}` : "";

      // Goes through /api/lead, which drops bot submissions before they reach the CRM.
      const result = await submitLead({
        form,
        startedAt: startedAt.current,
        name: formData.name,
        email: formData.email,
        countryCode: formData.countryCode,
        phone: formData.phone,
        description,
      });

      if (result.ok) {
        // OpenAI conversion event
        window.oaiq?.("measure", "lead_created", { type: "customer_action" });

        setSubmitSuccess(true);
        resetForm();

        if (onSubmitSuccess) {
          onSubmitSuccess();
        }

        setTimeout(() => {
          setSubmitSuccess(false);
        }, 3000);

        window.open("/thank-you/", "_blank");
      } else {
        alert(result.message || "Something went wrong. Please try again.");
      }
    } catch (e) {
      console.error(e);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    setFormData,
    errors,
    isSubmitting,
    setIsSubmitting,
    submitSuccess,
    setSubmitSuccess,
    onSubmitSuccess,
    handleChange,
    setFieldValue,
    handleSubmit,
  };
};

export default useConsultationForm;
