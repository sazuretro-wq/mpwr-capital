import HeroSection from "@/components/HeroSection";
import ContactButton from "@/components/ContactButton";

export default function InvestmentCriteria() {
  return (
    <>
      <HeroSection title="Investment Criteria" />
      <section className="py-20">
        <div className="mx-auto max-w-[900px] px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="font-manrope text-xl font-bold text-mpwr-dark">
                Who We Partner With
              </h2>
              <p className="mt-4 font-opensans text-base leading-relaxed text-mpwr-text">
                Founders and owners who have built strong service businesses and
                care about customers, employees, and legacy. Whether seeking
                growth, partial liquidity, or a thoughtful transition — we
                structure partnerships that preserve continuity while enabling
                the next chapter.
              </p>
            </div>
            <div>
              <h2 className="font-manrope text-xl font-bold text-mpwr-dark">
                Our Belief
              </h2>
              <p className="mt-4 font-opensans text-base leading-relaxed text-mpwr-text">
                Capital alone does not build great service businesses. Execution
                does.
              </p>
            </div>
          </div>
          <ContactButton />
        </div>
      </section>
    </>
  );
}
