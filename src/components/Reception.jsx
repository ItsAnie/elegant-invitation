import { useEffect, useRef, useState } from "react";
import garden from "../assets/garden.jpg";

export default function Reception({ event }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#f5f1e9] px-7 pb-14 text-center sm:px-10 md:px-12 md:py-16"
    >
      <div className="mx-auto flex max-w-md flex-col items-center justify-center border-b border-[#b8b29f]/40 pb-10">

        <img
          src={garden}
          alt="Garden image"
          className={`h-[280px] w-[376px] object-cover rounded-xl transition-all duration-700 ${
            isVisible
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-5 scale-90 opacity-0"
          }`}
        />

        <h2
          className={`mt-[20px] font-armenian text-[24px] text-[#555846] transition-all duration-700 sm:text-4xl ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          {event.title}
        </h2>

        <p
          className={`mt-3 font-serif text-xl text-[#77786b] transition-all duration-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          {event.time}
        </p>

        <p
          className={`mt-4 text-[10px] uppercase tracking-[0.16em] text-[#77776c] transition-all duration-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
          style={{ transitionDelay: "900ms" }}
        >
          {event.venue}
        </p>

        <p
          className={`mt-1 text-xs text-[#8a897d] transition-all duration-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
          style={{ transitionDelay: "1200ms" }}
        >
          {event.address}
        </p>

        <a
            href={event.mapUrl}
            target="_blank"
          className={`mt-2 cursor-pointer font-serif text-md italic underline transition-all duration-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
          style={{ transitionDelay: "1500ms" }}
        >
          Ինչպե՞ս հասնել
        </a>

      </div>
    </section>
  );
}