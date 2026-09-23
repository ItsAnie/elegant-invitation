import { useEffect, useMemo, useRef, useState } from "react";
import heart from "../assets/heart.png";
import shoot from "../assets/shoot.jpg";

const weekDays = ["Երկ", "Երք", "Չոր", "Հնգ", "Ուրբ", "Շբթ", "Կիր"];

const armenianMonths = [
  "Հունվար",
  "Փետրվար",
  "Մարտ",
  "Ապրիլ",
  "Մայիս",
  "Հունիս",
  "Հուլիս",
  "Օգոստոս",
  "Սեպտեմբեր",
  "Հոկտեմբեր",
  "Նոյեմբեր",
  "Դեկտեմբեր",
];

export default function WeddingDay({ date }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const calendar = useMemo(() => {
    const weddingDate = new Date(date);

    const year = weddingDate.getFullYear();
    const month = weddingDate.getMonth();
    const weddingDay = weddingDate.getDate();

    const firstDay = new Date(year, month, 1).getDay();

    const startOffset = firstDay === 0 ? 6 : firstDay - 1;

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days = [];

    for (let i = 0; i < startOffset; i++) {
      days.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    return {
      month: armenianMonths[month],
      year,
      weddingDay,
      days,
    };
  }, [date]);

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
    <div ref={sectionRef}>

      <section className="bg-[#f5f1e9] px-7 py-12 sm:px-12">

        <div className="mx-auto max-w-md border-b border-[#b8b29f]/40 pb-[10px]">

          {/* Ամիս */}
          <h2
            className={`text-center font-armenian text-4xl text-[#555846] transition-all duration-1000 ease-out sm:text-5xl ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            {calendar.month}
          </h2>

          {/* Շաբաթվա օրեր */}
          <div className="mt-10 grid grid-cols-7 text-center">
            {weekDays.map((day, index) => (
              <div
                key={day}
                className={`font-serif text-sm text-[#555846] transition-all duration-700 ease-out sm:text-base ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{
                  transitionDelay: `${300 + index * 80}ms`,
                }}
              >
                {day}
              </div>
            ))}
          </div>

          {/* Օրեր */}
          <div className="mt-2 grid grid-cols-7 gap-y-5 text-center sm:gap-y-6">
            {calendar.days.map((day, index) => {
              const isWeddingDay = day === calendar.weddingDay;

              return (
                <div
                  key={index}
                  className={`relative flex h-10 items-center justify-center transition-all duration-500 ease-out ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-3 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${600 + index * 25}ms`,
                  }}
                >
                  {day && (
                    <>
                      {/* Wedding heart */}
                      {isWeddingDay && (
                        <span
                          className={`absolute inset-0 bg-contain bg-center bg-no-repeat transition-all duration-1000 ease-out ${
                            isVisible
                              ? "scale-100 opacity-100"
                              : "scale-50 opacity-0"
                          }`}
                          style={{
                            backgroundImage: `url(${heart})`,
                            transitionDelay: "1300ms",
                          }}
                        />
                      )}

                      {/* Day number */}
                      <span
                        className={`relative z-10 font-serif text-[25px] transition-all duration-700 ${
                          isWeddingDay
                            ? "text-[#555846]"
                            : "text-[#66675d]"
                        }`}
                      >
                        {day}
                      </span>
                    </>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Wedding image */}
      <img
        src={shoot}
        alt="Wedding image"
        className={`w-full transition-all duration-[1500ms] ease-out ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }`}
      />

    </div>
  );
}