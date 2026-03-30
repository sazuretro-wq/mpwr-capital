import HeroSection from "@/components/HeroSection";
import ContactButton from "@/components/ContactButton";

const companies = [
  {
    name: "Everpark",
    website: "www.everpark.com",
    description:
      "A professional parking management and mobility services platform serving large venues and complex environments. Delivers operationally intensive parking solutions, logistics coordination, and customer experience management for institutional and public-sector clients.",
  },
  {
    name: "TrueNorth Facilities Solutions",
    website: "www.truenorthfac.com",
    description:
      "A facilities services platform providing integrated building services to commercial, institutional, and public-sector clients. Emphasizes reliability, compliance, and scalable operations across multiple service lines.",
  },
];

export default function Portfolio() {
  return (
    <>
      <HeroSection title="Portfolio" />
      <section className="py-20">
        <div className="mx-auto max-w-[900px] px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {companies.map((company) => (
              <div key={company.name}>
                <h3 className="font-manrope text-xl font-bold text-mpwr-dark">
                  {company.name}
                </h3>
                <a
                  href={`https://${company.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-mpwr-red underline"
                >
                  {company.website}
                </a>
                <p className="mt-3 font-opensans text-sm leading-relaxed text-mpwr-text">
                  {company.description}
                </p>
              </div>
            ))}
          </div>
          <ContactButton />
        </div>
      </section>
    </>
  );
}
