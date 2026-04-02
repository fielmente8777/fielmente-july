"use client"
import { useState } from "react";
import { AccordingDataPropsTypes } from "../page";

const AccordinContent = ({ question, answer }: AccordingDataPropsTypes) => {
    const [openAccordin, setOpenAccordin] = useState(false);
    return (
      <div
        className="cursor-pointer"
        onClick={() => setOpenAccordin(!openAccordin)}
      >
        <h2 className="lg:text-xl text-lg font-bold text-black border-b border-b-gray-300 py-4 flex gap-2 items-center">
          <span>{openAccordin ? "-" : "+"}</span>
          {question}
        </h2>
        <div
          style={{
            maxHeight: openAccordin ? "1600px" : "0",
            overflow: "hidden",
            transition: "all 0.8s linear",
          }}
        >
          <p className="text-lg text-gray-primary py-4">{answer}</p>
        </div>
      </div>
    );
  };

  export default AccordinContent