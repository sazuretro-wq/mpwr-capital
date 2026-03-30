import HeroSection from "@/components/HeroSection";
import ContactButton from "@/components/ContactButton";

const pillars = [
  {
    icon: (
      <svg className="mx-auto h-12 w-12 text-mpwr-red" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 7h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 .9-2 2v5c0 .75.4 1.38 1 1.73V19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-3.28c.59-.35 1-.99 1-1.72V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zM4 9h16v5h-5v-3H9v3H4V9zm9 6v4h-2v-4h2zm-8 4v-3h3v3H5zm14 0h-3v-3h3v3z" />
      </svg>
    ),
    title: "Understand the Business",
    description:
      "Learn the business from the inside — operations, customers, teams, and culture.",
  },
  {
    icon: (
      <svg className="mx-auto h-12 w-12 text-mpwr-red" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z" />
      </svg>
    ),
    title: "Partner on Execution",
    description:
      "Strengthen operations, professionalize systems, and improve performance where it matters most.",
  },
  {
    icon: (
      <svg className="mx-auto h-12 w-12 text-mpwr-red" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
      </svg>
    ),
    title: "Scale Thoughtfully",
    description:
      "Growth driven by disciplined execution, operational efficiency, and customer retention.",
  },
  {
    icon: (
      <svg className="mx-auto h-12 w-12 text-mpwr-red" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
    title: "Build Enduring Value",
    description:
      "Create durable businesses with strong foundations and long-term relevance.",
  },
];

export default function InvestmentApproach() {
  return (
    <>
      <HeroSection title="Investment Approach" />
      <section className="py-20">
        <div className="mx-auto max-w-[900px] px-6">
          <p className="text-center font-opensans text-base leading-relaxed italic text-mpwr-text">
            When MPWR partners with a business, we commit capital, time, and
            operational attention. We work alongside leadership to strengthen
            systems, improve performance, and support long-term growth while
            preserving what already works.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="text-center">
                {pillar.icon}
                <h3 className="mt-4 font-manrope text-lg font-bold text-mpwr-dark">
                  {pillar.title}
                </h3>
                <p className="mt-2 font-opensans text-sm leading-relaxed text-mpwr-text">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          <ContactButton label="Contact" />
        </div>
      </section>
    </>
  );
}
