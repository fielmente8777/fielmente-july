"use client";

import { type ReactNode, useEffect, useRef } from "react";

interface HomeScrollRevealProps {
  children: ReactNode;
  delay?: number;
}

const HomeScrollReveal = ({
  children,
  delay = 0,
}: HomeScrollRevealProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      section?.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("is-visible");
          observer.unobserve(section);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="home-scroll-reveal"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default HomeScrollReveal;
