"use client";
import { useState } from "react";

type FaqBodyType = "list" | "number" | "null";

interface FaqBody {
  type: string; // keep flexible
  header?: string;
  list?: string[];
  footer?: string;
}

type FaqItem =
  | {
      question: string;
      body: FaqBody;
    }
  | {
      question: string;
      answer: string;
      items?: string[];
    };

interface AccordionProps {
  item: FaqItem;
}

const Accordion2: React.FC<AccordionProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPinned, setIsPinned] = useState(false);

  const getAnswer = () => {
    if ("body" in item) {
      const { header, list, footer, type } = item.body;

      let listClass = "";

      if (type === "number") {
        listClass = "list-decimal list-inside text-black flex flex-col text-lg";
      } else if (type === "list") {
        listClass =
          "list-disc list-inside text-black flex flex-col text-lg mt-2";
      } else if (type === "null") {
        listClass = "list-inside text-black flex flex-col gap-2 text-lg";
      }

      return `
      ${header ? `<p class="text-lg text-black px-2">${header}</p>` : ""}
      ${
        list
          ? `<ul class="${listClass}">
              ${list.map((li) => `<li>${li}</li>`).join("")}
            </ul>`
          : ""
      }
      ${footer ? `<p class="text-lg text-black px-5">${footer}</p>` : ""}
    `;
    }

    if ("answer" in item) {
      return `
      <p class="text-lg text-black px-3">${item.answer}</p>
      ${
        item.items
          ? `<ul class="list-disc list-inside text-black flex flex-col text-lg mt-2">
              ${item.items.map((li) => `<li>${li}</li>`).join("")}
            </ul>`
          : ""
      }
    `;
    }

    return "";
  };

  return (
    <div className="pt-4 cursor-pointer transition-all duration-300 ease-in-out border-b border-[#EBE3E0]">
      <div
        className="flex justify-between items-center pb-4"
        onClick={() => {
          setIsPinned((prev) => !prev);
          setIsOpen(true);
        }}
        onMouseEnter={() => {
          if (!isPinned) setIsOpen(true);
        }}
        onMouseLeave={() => {
          if (!isPinned) setIsOpen(false);
        }}
      >
        <h3
          className="text-primary text-lg font-semibold"
          dangerouslySetInnerHTML={{ __html: item.question }}
        />

        <button
          className={`duration-300 ease-in-out transition-all ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <span className="sr-only">Toggle answer</span>
          {isOpen ? <MinusIcon /> : <AddIcon />}
        </button>
      </div>

      {/* Answer */}
      <div
        className={`grid ${
          isOpen ? "grid-rows-[1fr] pb-3.5" : "grid-rows-[0fr]"
        } transition-all duration-500 ease-in-out`}
      >
        <div className="overflow-hidden">
          <div
            className={`text-secondary ${
              isOpen ? "opacity-100" : "opacity-0"
            } transition-opacity duration-300 ease-in-out`}
            dangerouslySetInnerHTML={{ __html: getAnswer() }}
          />
        </div>
      </div>
    </div>
  );
};

export default Accordion2;

export const MinusIcon = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.25 12.75C6.0375 12.75 5.85942 12.6781 5.71575 12.5342C5.57192 12.3904 5.5 12.2122 5.5 11.9997C5.5 11.7871 5.57192 11.609 5.71575 11.4655C5.85942 11.3218 6.0375 11.25 6.25 11.25H17.75C17.9625 11.25 18.1406 11.3219 18.2843 11.4658C18.4281 11.6096 18.5 11.7878 18.5 12.0003C18.5 12.2129 18.4281 12.391 18.2843 12.5345C18.1406 12.6782 17.9625 12.75 17.75 12.75H6.25Z"
      fill="#9EA3AB"
    />
  </svg>
);

export const AddIcon = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.25 12.75H6.25C6.0375 12.75 5.85942 12.6781 5.71575 12.5342C5.57192 12.3904 5.5 12.2122 5.5 11.9997C5.5 11.7871 5.57192 11.609 5.71575 11.4655C5.85942 11.3218 6.0375 11.25 6.25 11.25H11.25V6.25C11.25 6.0375 11.3219 5.85942 11.4658 5.71575C11.6096 5.57192 11.7878 5.5 12.0003 5.5C12.2129 5.5 12.391 5.57192 12.5345 5.71575C12.6782 5.85942 12.75 6.0375 12.75 6.25V11.25H17.75C17.9625 11.25 18.1406 11.3219 18.2843 11.4658C18.4281 11.6096 18.5 11.7878 18.5 12.0003C18.5 12.2129 18.4281 12.391 18.2843 12.5345C18.1406 12.6782 17.9625 12.75 17.75 12.75H12.75V17.75C12.75 17.9625 12.6781 18.1406 12.5342 18.2843C12.3904 18.4281 12.2122 18.5 11.9997 18.5C11.7871 18.5 11.609 18.4281 11.4655 18.2843C11.3218 18.1406 11.25 17.9625 11.25 17.75V12.75Z"
      fill="#0D54EB"
    />
  </svg>
);
