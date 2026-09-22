import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export default function RSVP({ weddingId, deadline  }) {
  const [form, setForm] = useState({
    name: "",
    attendance: "",
    guests: "1",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        await addDoc(
        collection(db, "weddings", weddingId, "rsvps"),
        {
            name: form.name,
            attendance: form.attendance,
            guests: form.attendance === "yes" ? Number(form.guests) : 0,
            message: form.message,
            createdAt: serverTimestamp(),
        }
        );

        alert("Ձեր պատասխանը հաջողությամբ ուղարկվեց");

        setForm({
        name: "",
        attendance: "",
        guests: "1",
        message: "",
        });
    } catch (error) {
        console.error("RSVP error:", error);
        alert("Չհաջողվեց ուղարկել պատասխանը։ Խնդրում ենք կրկին փորձել։");
    }
    };

  return (
    <section className="bg-[#f5f1e9] px-7 py-14 sm:px-12 sm:py-20">
      <div className="mx-auto max-w-xl text-center">

        <h2 className="font-serif text-4xl italic text-[#555846] sm:text-5xl">
          Հրավերի պատասխան
        </h2>

        <p className="mx-auto mt-2 max-w-md text-xs leading-6 text-[#77776c]">
          Խնդրում ենք տեղեկացնել մեզ Ձեր մասնակցության մասին մինչև {deadline}:
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-5 text-left"
        >

          {/* Name */}
          <div>
            <label className="mb-2 block text-[10px] uppercase tracking-[0.15em] text-[#77776c]">
              Անուն, ազգանուն
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Գրեք Ձեր անունը"
              required
              className="w-full border-b border-[#aaa993]/60 bg-transparent px-1 py-3 text-sm text-[#555846] outline-none placeholder:text-[#aaa99d] focus:border-[#555846]"
            />
          </div>

          {/* Attendance */}
          <div>
            <label className="mb-3 block text-[10px] uppercase tracking-[0.15em] text-[#77776c]">
              Կմասնակցե՞ք մեր հարսանիքին
            </label>

            <div className="space-y-3">

              <label className="flex cursor-pointer items-center gap-3 text-sm text-[#66675d]">
                <input
                  type="radio"
                  name="attendance"
                  value="yes"
                  checked={form.attendance === "yes"}
                  onChange={handleChange}
                  required
                  className="accent-[#858873]"
                />

                Այո, սիրով կմասնակցեմ
              </label>

              <label className="flex cursor-pointer items-center gap-3 text-sm text-[#66675d]">
                <input
                  type="radio"
                  name="attendance"
                  value="no"
                  checked={form.attendance === "no"}
                  onChange={handleChange}
                  className="accent-[#858873]"
                />

                Ցավոք, չեմ կարողանա մասնակցել
              </label>

            </div>
          </div>

          {/* Guests */}
          {form.attendance === "yes" && (
            <div>
              <label className="mb-2 block text-[10px] uppercase tracking-[0.15em] text-[#77776c]">
                Հյուրերի քանակը
              </label>

              <select
                name="guests"
                value={form.guests}
                onChange={handleChange}
                className="w-full border-b border-[#aaa993]/60 bg-transparent px-1 py-3 text-sm text-[#555846] outline-none focus:border-[#555846]"
              >
                <option value="1">1 հյուր</option>
                <option value="2">2 հյուր</option>
                <option value="3">3 հյուր</option>
                <option value="4">4 հյուր</option>
                <option value="5">5 հյուր</option>
              </select>
            </div>
          )}

          {/* Message */}
          <div>
            <label className="mb-2 block text-[10px] uppercase tracking-[0.15em] text-[#77776c]">
              Հաղորդագրություն
            </label>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              placeholder="Ցանկության դեպքում թողեք մեզ հաղորդագրություն..."
              className="w-full resize-none border-b border-[#aaa993]/60 bg-transparent px-1 py-3 text-sm text-[#555846] outline-none placeholder:text-[#aaa99d] focus:border-[#555846]"
            />
          </div>

          {/* Submit */}
          <div className="pt-4 text-center">
            <button
              type="submit"
              className="cursor-pointer rounded-full bg-[#858873] px-8 py-3 text-[10px] uppercase tracking-[0.2em] text-white transition hover:bg-[#70735e]"
            >
              Ուղարկել
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}