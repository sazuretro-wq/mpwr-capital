"use client";

import { useState, type FormEvent } from "react";
import HeroSection from "@/components/HeroSection";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    // mailto fallback for static site
    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:info@mpwrcap.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <>
      <HeroSection title="Contact" />
      <section className="py-20">
        <div className="mx-auto max-w-[600px] px-6">
          <h2 className="font-manrope text-xl font-bold text-mpwr-dark">
            Connect With Us
          </h2>
          <p className="mt-2 font-opensans text-sm leading-relaxed text-mpwr-text">
            MPWR Capital Management partners with founders and operators in{" "}
            <strong>home services and building services</strong> who value
            operational excellence and long-term alignment.
          </p>
          <a
            href="mailto:info@mpwrcap.com"
            className="mt-2 inline-block text-sm text-mpwr-text underline"
          >
            info@mpwrcap.com
          </a>

          {submitted ? (
            <div className="mt-8 rounded bg-green-50 p-6 text-center text-green-800">
              Thank you! Your submission has been received!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label className="block text-sm font-semibold text-mpwr-dark">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="mt-1 w-full rounded border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-mpwr-red"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-mpwr-dark">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 w-full rounded border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-mpwr-red"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-mpwr-dark">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Example Text"
                  className="mt-1 w-full rounded border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-mpwr-red"
                />
              </div>
              {error && (
                <p className="text-sm text-red-600">
                  Oops! Something went wrong while submitting the form.
                </p>
              )}
              <button
                type="submit"
                className="w-full rounded bg-mpwr-red py-3 text-sm font-bold tracking-wide text-white uppercase transition-colors hover:bg-mpwr-red-hover"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
