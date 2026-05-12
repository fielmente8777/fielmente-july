"use client";

import useConsultationForm from "@/hooks/useConsultationForm";
import { countries } from "@/utils/countryCode";
import { CallIcon, MailIcon, UserIcon } from "@/utils/icons";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Form = () => {
  const {
    formData,
    isSubmitting,
    handleSubmit,
    handleChange,
    errors,
    setFieldValue,
  } = useConsultationForm({
    includeMessage: false, 
    onSubmitSuccess: () => {
    },
  });

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    if (value.length <= 10) {
      setFieldValue("phone", value);
    }
  };

  const formDataFields = [
    {
      icon: <UserIcon />,
      tag: "input",
      type: "text",
      name: "name",
      placeholder: "Full Name*",
      required: true,
      value: formData.name,
      onChange: handleChange,
    },
    {
      icon: <CallIcon />,
      tag: "div",
      name: "phone",
      placeholder: "Phone Number*",
      required: true,
      content: (
        <div className="flex gap-2 text-base">
          <select
            id="countryCode"
            name="countryCode"
            value={formData.countryCode}
            onChange={(e) => setFieldValue("countryCode", e.target.value)}
            className="w-auto bg-transparent text-white focus:outline-none"
            style={{ inlineSize: `${formData.countryCode.length + 2}ch` }}
            aria-label="Country Code"
          >
            {countries.map((country, index) => (
              <option key={index} value={country.code} className="text-black">
                {`${country.code}`}
              </option>
            ))}
          </select>
          <input
            type="tel"
            id="phone"
            name="phone"
            max={"9999999999"}
            placeholder="Phone Number*"
            value={formData.phone}
            onChange={handlePhoneChange}
            className="w-full bg-transparent rounded-md placeholder:text-black-primary text-white no-spinner focus:outline-none py-2"
          />
        </div>
      ),
    },
    {
      tag: "input",
      icon: <MailIcon />,
      type: "email",
      name: "email",
      placeholder: "Email Id*",
      required: true,
      value: formData.email,
      onChange: handleChange,
    },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className={`grid md:grid-cols-4 md:rounded-full rounded-[20px] overflow-hidden glassy-card xl:p-2 max-md:p-2`}
      noValidate
    >
      <div className="md:col-span-3 grid md:grid-cols-3 md:py-2 py-1">
        {formDataFields.map((data, index) => (
          <div
            key={index}
            className={`w-full flex gap-2 items-center md:px-4 max-md:py-2 ${
              formDataFields.length - 1 !== index ? "md:border-r max-md:border-b" : ""
            } border-white/40`}
          >
            <label htmlFor={data.name} className="text-white">
              {data.icon}
            </label>
            <div className="w-full bg-transparent flex flex-col items-start">
              <div className="w-full">
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
                      className:
                        "w-full placeholder:text-white max-md:text-sm bg-transparent text-white no-spinner resize-none focus:outline-none valid:outline-blue-primary invalid:outline-Saffron-primary md:py-2",
                    })}
              </div>
              {errors[data.name] && (
                <p className="text-sm text-red-500 mt-1">{errors[data.name]}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full max-md:py-2 text-center bg-white text-black border-orange-primary px-8 h-full max-md:text-sm text-nowrap font-semibold duration-300 rounded-full border-white hover:scale-105 border disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          "Loading...."
        ) : (
          <span className="flex items-center justify-center gap-2">
            Get a FREE Quote!
            <span className="aspect-square md:text-lg text-sm w-7 bg-black text-white rounded-full flex items-center justify-center">
              <MdArrowOutward />
            </span>
          </span>
        )}
      </button>
    </form>
  );
};

export default Form;