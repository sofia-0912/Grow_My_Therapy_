"use client";

import { useState } from "react";

export default function ConsultForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.name?.value?.trim() || "";
    setStatus(
      `Thank you${name ? ", " + name.split(" ")[0] : ""}. This demo form is not connected yet — wire it to your booking link or email to go live.`
    );
  }

  const inputClass =
    "w-full rounded-sm border border-line bg-paper px-4 py-3 text-[0.95rem] text-ink transition-colors focus:border-primary focus:outline-none";

  const labelClass = "mb-2 block text-[0.7rem] font-bold uppercase tracking-[0.16em] text-primary";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-sm border border-line bg-secondary px-7 py-8 md:px-9"
      noValidate
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input id="name" name="name" type="text" autoComplete="name" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input id="email" name="email" type="email" autoComplete="email" required className={inputClass} />
        </div>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone (optional)
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} />
        </div>
        <div>
          <label htmlFor="format" className={labelClass}>
            Preferred format
          </label>
          <select id="format" name="format" className={inputClass}>
            <option>In-person — Santa Monica office</option>
            <option>Telehealth — anywhere in California</option>
            <option>Not sure yet</option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="focus" className={labelClass}>
          What brings you in? (optional)
        </label>
        <select id="focus" name="focus" className={inputClass}>
          <option>Anxiety</option>
          <option>Trauma / EMDR</option>
          <option>Burnout, perfectionism & high-pressure work</option>
          <option>Mindfulness & body-oriented therapy</option>
          <option>Something else / not sure</option>
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>
          Anything you&apos;d like me to know
        </label>
        <textarea id="message" name="message" className={`${inputClass} min-h-[120px] resize-y`} />
      </div>

      <button
        type="submit"
        className="mt-7 bg-primary px-8 py-3.5 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-primary-dark"
      >
        Send request
      </button>

      {status && (
        <p
          role="status"
          className="mt-5 rounded-sm border border-primary/30 bg-primary-light px-4 py-3 text-[0.92rem] text-primary-deep"
        >
          {status}
        </p>
      )}

      <p className="mt-4 text-[0.83rem] text-muted">
        Please don&apos;t include detailed clinical information in this form. This demo form is not yet
        connected to a booking system or email — wire it up before launch.
      </p>
    </form>
  );
}
