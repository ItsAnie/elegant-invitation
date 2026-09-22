import { useEffect, useState } from "react";
import couple from "../assets/couple.jpg";

export default function Hero({ data }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">

      <img
        src={couple}
        alt="Wedding couple"
        className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[12000ms] ease-out ${
          show ? "scale-[1.06]" : "scale-100"
        }`}
      />

      <div className="absolute inset-0 bg-black/25" />

      <div className="absolute inset-0 flex flex-col items-center justify-between px-6 py-12 text-center text-white sm:py-16">

        <div
          className={`transition-all duration-1000 ease-out ${
            show
              ? "translate-y-0 opacity-100"
              : "-translate-y-5 opacity-0"
          }`}
        >
          <p className="text-[9px] uppercase tracking-[0.4em] sm:text-[10px]">
            {data.intro}
          </p>
        </div>

        <div className="mt-auto">

          <h1
            className={`font-script text-6xl drop-shadow-md transition-all duration-1000 ease-out delay-300 sm:text-7xl md:text-8xl ${
              show
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            {data.bride}
          </h1>

          <div
            className={`my-1 font-serif text-3xl italic transition-all duration-700 ease-out delay-700 ${
              show
                ? "scale-100 opacity-100"
                : "scale-75 opacity-0"
            }`}
          >
            &
          </div>

          <h1
            className={`font-script text-6xl drop-shadow-md transition-all duration-1000 ease-out delay-1000 sm:text-7xl md:text-8xl ${
              show
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            {data.groom}
          </h1>

          <div
            className={`mx-auto mt-6 h-px bg-white/70 transition-all duration-1000 ease-out delay-[1500ms] ${
              show
                ? "w-20 opacity-100"
                : "w-0 opacity-0"
            }`}
          />

          <p
            className={`mt-4 font-serif text-xl tracking-[0.25em] transition-all duration-1000 ease-out delay-[1800ms] sm:text-2xl ${
              show
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            {data.date}
          </p>

        </div>

      </div>
    </section>
  );
}