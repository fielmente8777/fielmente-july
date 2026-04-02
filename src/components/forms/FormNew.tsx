"use client";
import { countries } from "@/utils/countryCode";
import { FillMail, FillMessage, FillPhone, FillUser } from "@/utils/OldFormIcons";
import axios from "axios";
import React, { ChangeEvent, FormEvent, useCallback, useMemo, useState } from "react";
import { contacts } from "../../../contact";
import CustomCaptchaForm from "./CaptchaForm";

interface FormState {
  userName: string;
  userEmail: string;
  userMessage: string;
  userPhone: string;
  countryCode: string;
}

interface ValidationErrors {
  email?: string;
  phone?: string;
  captcha?: string;
}

const FormNew = () => {
  const [formState, setFormState] = useState<FormState>({
    userName: "",
    userEmail: "",
    userMessage: "",
    userPhone: "",
    countryCode: "+91",
  });
  
  const [formRes, setFormRes] = useState(false);
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});
  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");

  // Constants
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const FORM_API = "https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/7lHAUjtz#generic-webhook";
  // const FORM_API = "https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/jncSLqGC#generic-webhook"; // test

  // Validation functions
  const validatePhone = useCallback((phone: string): string => {
    if (!phone) return "Phone number is required";
    if (phone.length !== 10) return "Phone number must be exactly 10 digits";
    if (!/^\d+$/.test(phone)) return "Phone number must contain only digits";
    return "";
  }, []);

  const validateEmail = useCallback((email: string): string => {
    if (!email) return "Email is required";
    if (!EMAIL_REGEX.test(email)) return "Please enter a valid email address";
    return "";
  }, []);

  const validateCaptcha = useCallback((input: string, correct: string): string => {
    if (!input) return "CAPTCHA is required";
    if (input !== correct) return "CAPTCHA incorrect. Please try again.";
    return "";
  }, []);

  // Event handlers
  const handlePhoneChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setFormState(prev => ({ ...prev, userPhone: value }));
    
    if (value.length > 0) {
      setValidationErrors(prev => ({
        ...prev,
        phone: validatePhone(value),
      }));
    }
  }, [validatePhone]);

  const handleEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormState(prev => ({ ...prev, userEmail: value }));
    
    if (value.length > 0) {
      setValidationErrors(prev => ({
        ...prev,
        email: validateEmail(value),
      }));
    }
  }, [validateEmail]);

  const handleCaptchaInputChange = useCallback((value: string) => {
    setCaptchaInput(value);
    if (value.length > 0) {
      setValidationErrors(prev => ({
        ...prev,
        captcha: validateCaptcha(value, captcha),
      }));
    }
  }, [captcha, validateCaptcha]);

  // Form submission
  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate all fields
    const errors: ValidationErrors = {
      phone: validatePhone(formState.userPhone),
      email: validateEmail(formState.userEmail),
      captcha: validateCaptcha(captchaInput, captcha),
    };

    setValidationErrors(errors);

    // Check if any errors exist
    if (Object.values(errors).some(error => error)) {
      return;
    }

    setFormRes(true);

    try {
      const { data } = await axios.post(
        "https://nexon.eazotel.com/eazotel/addcontacts",
        // FORM_API,
        {
          Domain: contacts.formDomain,
          email: formState.userEmail,
          Name: formState.userName,
          Contact: `${formState.countryCode}${formState.userPhone}`,
          Description: formState.userMessage,
          created_from: "webform",
          source_url: window.location.href,
          // email: formState.userEmail,
          // name: formState.userName,
          // phone: `${formState.countryCode}${formState.userPhone}`,
          // message: formState.userMessage,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // if (data.success) {
      if (data.Status){
        // Reset form
        setFormState({
          userName: "",
          userEmail: "",
          userMessage: "",
          userPhone: "",
          countryCode: "+91",
        });
        setCaptchaInput("");
        setValidationErrors({});
        
        // Open thank you page
        window.open("/thank-you/", "_blank");
      } else {
        alert("Something went wrong! Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setFormRes(false);
    }
  }, [formState, captchaInput, captcha, validateEmail, validatePhone, validateCaptcha]);

  // Memoized form configuration
  const formData = useMemo(() => [
    {
      tag: "input" as const,
      icon: <FillUser />,
      type: "text",
      name: "name",
      placeholder: "Your Name*",
      required: true,
      value: formState.userName,
      onChange: (e: ChangeEvent<HTMLInputElement>) => 
        setFormState(prev => ({ ...prev, userName: e.target.value })),
    },
    {
      tag: "div" as const,
      icon: <FillPhone />,
      name: "phone",
      placeholder: "Your Phone*",
      required: true,
      content: (
        <div className="flex gap-2 text-base">
          <select
            id="countryCode"
            name="countryCode"
            value={formState.countryCode}
            onChange={(e) => setFormState(prev => ({ ...prev, countryCode: e.target.value }))}
            className="w-auto bg-transparent rounded-lg text-[#333333] focus:outline-none"
            style={{ inlineSize: `${formState.countryCode.length + 2}ch` }}
            aria-label="Country Code"
          >
            {countries.map((country, index) => (
              <option
                key={index}
                value={country.code}
                className="text-black bg-gray-100"
              >
                {country.code}
              </option>
            ))}
          </select>
          <input
            type="tel"
            id="phone"
            name="phone"
            max="9999999999"
            placeholder="Your Phone Number*"
            value={formState.userPhone}
            onChange={handlePhoneChange}
            className="w-full bg-transparent rounded-md placeholder:text-black-primary text-black no-spinner focus:outline-none"
          />
        </div>
      ),
    },
    {
      tag: "input" as const,
      icon: <FillMail />,
      type: "email",
      name: "email",
      placeholder: "Your Email Id*",
      required: true,
      value: formState.userEmail,
      onChange: handleEmailChange,
    },
    {
      tag: "textarea" as const,
      icon: <FillMessage />,
      type: "text",
      name: "message",
      placeholder: "Your Message*",
      required: true,
      value: formState.userMessage,
      onChange: (e: ChangeEvent<HTMLTextAreaElement>) => 
        setFormState(prev => ({ ...prev, userMessage: e.target.value })),
    },
  ], [formState, handlePhoneChange, handleEmailChange]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-md:px-4 p-6 max-md:mt-6 text-base rounded-lg lg:max-w-[24.875rem] w-full bg-[#F5F5F5]"
    >
      <h2 className="text-xl lg:text-[1.8rem]/[2.5rem] font-normal text-primary2">
        Get A <b className="capitalize">FREE</b> Consultation!
      </h2>

      {formData.map((data, index) => (
        <div key={index} className="flex flex-col gap-1">
          <div className="flex gap-2 text-gray-primary p-3 border bg-white border-blue-primary rounded-md">
            <label
              htmlFor={data.name}
              className={data.tag === "textarea" ? "mt-1" : ""}
            >
              {data.icon}
            </label>
            {data.tag === "div"
              ? data.content
              : React.createElement(data.tag, {
                  id: data.name,
                  type: data.type,
                  name: data.name,
                  value: data.value,
                  onChange: data.onChange,
                  placeholder: data.placeholder,
                  required: data.required,
                  autoComplete: "off",
                  spellCheck: "false",
                  rows: data.tag === "textarea" ? 3 : undefined,
                  className:
                    "w-full bg-transparent no-spinner resize-none focus:outline-none rounded-md valid:outline-blue-primary invalid:outline-Saffron-primary",
                })}
          </div>
          
          {data.name === "phone" && validationErrors.phone && (
            <p className="text-sm text-red-500 mt-2">{validationErrors.phone}</p>
          )}
          {data.name === "email" && validationErrors.email && (
            <p className="text-sm text-red-500 mt-2">{validationErrors.email}</p>
          )}
        </div>
      ))}
      
      {/* CAPTCHA Component */}
      <CustomCaptchaForm
        isOpen={true}
        captcha={captcha}
        setCaptcha={setCaptcha}
        setCaptchaInput={handleCaptchaInputChange}
        captchaInput={captchaInput}
        error={validationErrors.captcha || ""}
      />
      
      <button 
        type="submit"
        disabled={formRes}
        className="w-full text-center bg-[#f26633] text-white justify-center border-[#f26633] text-md px-8 py-2 font-semibold rounded-md transition duration-300 active:scale-75 hover:scale-105 border border-blue-primary disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {formRes ? "Loading..." : "Submit"}
      </button>
    </form>
  );
};

export default FormNew;