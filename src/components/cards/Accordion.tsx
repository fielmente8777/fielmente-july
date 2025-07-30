"use client";
import { OutlineDrpopdown } from "@/utils/icons";
import { JSX, useEffect, useState } from "react";

interface AccordionProps {
  question: string;
  answer: string;
  className?: string;
  questionClassName?: string;
  answerClassName?: string;
  icon?: JSX.Element;
  index?: number;
}
const Accordion: React.FC<AccordionProps> = ({
  question,
  answer,
  className,
  questionClassName,
  answerClassName,
  index,
}) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  useEffect(() => {
    setIsAccordionOpen(index === 0);
  }, [index]);

  return (
    <>
      <div
        className={`flex flex-col w-full ${className} group cursor-pointer `}
        onMouseEnter={() => setIsAccordionOpen(true)}
        onMouseLeave={() => setIsAccordionOpen(false)}
      >
        <div className={`flex items-center justify-between gap-4 w-full md:py-6 py-4`}>
          <h3
            className={`font-semibold md:text-2xl text-xl text-primary ${questionClassName}`}
          >
            {question}
          </h3>
          <span
            aria-label="accordion icon"
            role="svg"
            onClick={() => setIsAccordionOpen(!isAccordionOpen)}
            className={`text-dark text-lg ${
              isAccordionOpen ? "-rotate-180 text-black bg-white" : ""
            }  p-1 duration-300 transition-all ease-in-out`}
          >
            <OutlineDrpopdown />
          </span>
        </div>

        <div
          className={`flex pr-6 flex-col gap-4 w-full ${answerClassName} transition-all max-h-0 overflow-hidden group-hover:max-h-[20rem] ${
            isAccordionOpen ? "max-h-[20rem] mb-2 py-3" : ""
          }`}
          onClick={() => setIsAccordionOpen(!isAccordionOpen)}
        >
          <p
            key={index}
            className={`text-light text-xl font-normal`}
            dangerouslySetInnerHTML={{ __html: answer }}
          ></p>
        </div>

        {/* bkhkhkhkkj */}
      </div>
    </>
  );
};

export default Accordion;
