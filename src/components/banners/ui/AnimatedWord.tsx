"use client";

import { useEffect, useState } from "react";

const WORDS = ["Hospitality", "Hotel", "Resort", "Restaurant"];

export default function AnimatedWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, 2500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block max-w-[12ch] w-fit text-tertiary">
      <span
        key={WORDS[index]}
        className="inline-block animate-wordFade will-change-transform"
      >
        {WORDS[index]}
      </span>
    </span>
  );
}