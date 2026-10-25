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
      // Reveal as soon as the section's top edge is 10% up from the bottom of the screen.
      // A ratio threshold (e.g. 0.12) never fires for sections taller than the screen on
      // phones ("Why Choose Us" is ~5,700px on mobile), which left them permanently blank.
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="home-scroll-reveal"
      style={{ transitionDelay: `${delay}ms`, contentVisibility: "auto", containIntrinsicSize: "auto 750px" }}
    >
      {children}
    </div>
  );
};

export default HomeScrollReveal;
