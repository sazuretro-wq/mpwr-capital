import HeroSection from "@/components/HeroSection";
import ContactButton from "@/components/ContactButton";

export default function Mission() {
  return (
    <>
      <HeroSection
        title="MPWRING Improbable Possibilities"
        subtitle="Our Mission"
      />
      <section className="py-20">
        <div className="mx-auto max-w-[700px] px-6 text-center">
          <p className="font-opensans text-base leading-relaxed italic text-mpwr-text">
            We Partner With Proven Service Businesses. MPWR invests in
            established service companies where execution, culture, and
            operational discipline matter more than financial engineering. Our
            primary focus areas include Home Services (with emphasis on pest
            control) and Building Services (including commercial landscaping and
            adjacent facility services) — essential, recurring revenue businesses
            where operational improvement directly drives growth and resilience.
          </p>
          <ContactButton label="Contact" />
        </div>
      </section>
    </>
  );
}
