import { useEffect, useRef, useState } from "react";
import church from "../assets/church.jpg";

export default function Ceremony({ event, onComplete }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();

          // Ceremony-ի animation-ի ավարտից հետո
          setTimeout(() => {
            onComplete();
          }, 1800);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [onComplete]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#f5f1e9] px-8 py-12"
    >
      <div className="mx-auto flex max-w-md flex-col items-center justify-center border-y border-[#b8b29f]/40 py-10">

        <img
          src={church}
          alt="Church image"
          className={`rounded-xl transition-all duration-700 ${
            isVisible
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-5 scale-90 opacity-0"
          }`}
        />

        <h2
          className={`mt-[20px] font-armenian italic text-[24px] text-[#555846] transition-all duration-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          {event.title}
        </h2>

        <p
          className={`mt-3 font-serif text-xl text-[#66685a] transition-all duration-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          {event.time}
        </p>

        <p
          className={`mt-3 text-[11px] uppercase tracking-[0.18em] text-[#77776c] transition-all duration-700 ${
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
          className={`mt-2 cursor-pointer font-armenian text-md italic underline transition-all duration-700 ${
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