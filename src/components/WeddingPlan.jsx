import { useEffect, useRef, useState } from "react";
import church from "../assets/church.png";
import rings from "../assets/rings.png";
import reception from "../assets/reception.png";

export default function WeddingPlan({ data }) {
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
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#f5f1e9] px-8 py-12"
    >
      <div className="mx-auto max-w-md border-y border-[#b8b29f]/40 py-9">

        {/* Title */}
        <h2
          className={`mb-10 text-center font-serif text-[28px] italic transition-all duration-1000 ease-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          {data.plan.title}
        </h2>

        {/* Groom */}
        <div
          className={`flex items-center gap-8 transition-all duration-1000 ease-out ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-8 opacity-0"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <img
            alt="Rings image"
            src={rings}
            className="w-[64px] shrink-0"
          />

          <div>
            <h2 className="font-serif text-[24px] italic text-[#555846]">
              {data.plan.fiance.title}
            </h2>

            <p className="mt-1 font-serif text-lg text-[#77786b]">
              {data.plan.fiance.time}
            </p>

            <p className="mt-1 text-xs text-[#8a897d] font-bold">
              {data.plan.fiance.address}
            </p>
          </div>
        </div>

        {/* Line 1 */}
        <div
          className={`ml-[30px] w-[1px] bg-[#555846] transition-all duration-700 ease-out ${
            isVisible ? "h-[100px]" : "h-0"
          }`}
          style={{ transitionDelay: "900ms" }}
        />

        {/* Bride */}
        <div
          className={`flex items-center gap-8 transition-all duration-1000 ease-out ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-8 opacity-0"
          }`}
          style={{ transitionDelay: "1100ms" }}
        >
          <img
            alt="Rings image"
            src={rings}
            className="w-[64px] shrink-0"
          />

          <div>
            <h2 className="font-serif text-[24px] italic text-[#555846]">
              {data.plan.bride.title}
            </h2>

            <p className="mt-1 font-serif text-lg text-[#77786b]">
              {data.plan.bride.time}
            </p>

            <p className="mt-1 text-xs text-[#8a897d] font-bold">
              {data.plan.bride.address}
            </p>
          </div>
        </div>

        {/* Line 2 */}
        <div
          className={`ml-[30px] w-[1px] bg-[#555846] transition-all duration-700 ease-out ${
            isVisible ? "h-[100px]" : "h-0"
          }`}
          style={{ transitionDelay: "1700ms" }}
        />

        {/* Ceremony */}
        <div
          className={`flex items-center gap-8 transition-all duration-1000 ease-out ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-8 opacity-0"
          }`}
          style={{ transitionDelay: "1900ms" }}
        >
          <img
            alt="Church image"
            src={church}
            className="w-[64px] shrink-0"
          />

          <div>
            <h2 className="font-serif text-[24px] italic text-[#555846]">
              {data.ceremony.title}
            </h2>

            <p className="mt-1 font-serif text-lg text-[#77786b]">
              {data.ceremony.time}
            </p>

            <p className="mt-1 text-xs text-[#8a897d] font-bold">
              {data.ceremony.address}
            </p>
          </div>
        </div>

        {/* Line 3 */}
        <div
          className={`ml-[30px] w-[1px] bg-[#555846] transition-all duration-700 ease-out ${
            isVisible ? "h-[100px]" : "h-0"
          }`}
          style={{ transitionDelay: "2500ms" }}
        />

        {/* Reception */}
        <div
          className={`flex items-center gap-8 transition-all duration-1000 ease-out ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-8 opacity-0"
          }`}
          style={{ transitionDelay: "2700ms" }}
        >
          <img
            alt="Reception image"
            src={reception}
            className="w-[64px] shrink-0"
          />

          <div>
            <h2 className="font-serif text-[24px] italic text-[#555846]">
              {data.reception.title}
            </h2>

            <p className="mt-1 font-serif text-lg text-[#77786b]">
              {data.reception.time}
            </p>

            <p className="mt-1 text-xs text-[#8a897d] font-bold">
              {data.reception.address}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}