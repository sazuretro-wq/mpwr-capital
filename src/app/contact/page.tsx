"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:info@mpwrcap.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        title="Contact"
        subtitle="Get in Touch"
        description="We partner with founders who are ready to scale."
      />
      <section className="py-24">
        <div className="mx-auto max-w-[900px] px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
            {/* Info */}
            <AnimatedSection direction="left">
              <div>
                <h2 className="font-heading text-2xl font-semibold md:text-3xl">
                  Connect With Us
                </h2>
                <p className="mt-5 text-[15px] leading-[1.8] text-mpwr-text-secondary">
                  MPWR Capital Management partners with founders and operators in{" "}
                  <span className="font-semibold text-mpwr-text">
                    home services and building services
                  </span>{" "}
                  who value operational excellence and long-term alignment.
                </p>
                <div className="divider my-8" />
                <div>
                  <p className="text-[14px] font-semibold tracking-wide text-mpwr-red">
                    Email
                  </p>
                  <a
                    href="mailto:info@mpwrcap.com"
                    className="mt-1.5 inline-block cursor-pointer text-[15px] text-mpwr-text transition-colors duration-300 hover:text-mpwr-red"
                  >
                    info@mpwrcap.com
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection direction="right" delay={0.15}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="surface-card flex h-full items-center justify-center rounded-lg p-10 text-center"
                >
                  <div>
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-mpwr-red/10">
                      <svg
                        className="h-6 w-6 text-mpwr-red"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="font-heading text-xl font-semibold">
                      Thank you
                    </p>
                    <p className="mt-1.5 text-[14px] text-mpwr-text-secondary">
                      Your message has been received.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="surface-card rounded-lg p-8"
                >
                  <div className="space-y-5">
                    <div>
                      <label className="block text-[14px] font-semibold text-mpwr-text">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="mt-1.5 w-full rounded-lg border border-mpwr-border bg-transparent px-4 py-3 text-[14px] outline-none transition-colors duration-300 focus:border-mpwr-red"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-[14px] font-semibold text-mpwr-text">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="mt-1.5 w-full rounded-lg border border-mpwr-border bg-transparent px-4 py-3 text-[14px] outline-none transition-colors duration-300 focus:border-mpwr-red"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-[14px] font-semibold text-mpwr-text">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        className="mt-1.5 w-full resize-none rounded-lg border border-mpwr-border bg-transparent px-4 py-3 text-[14px] outline-none transition-colors duration-300 focus:border-mpwr-red"
                        placeholder="Tell us about your business..."
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="mt-6 w-full cursor-pointer rounded-full bg-mpwr-red px-6 py-3.5 text-[14px] font-semibold text-white transition-all duration-300 hover:bg-mpwr-red-dark"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
