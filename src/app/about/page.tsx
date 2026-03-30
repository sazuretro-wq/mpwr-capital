import HeroSection from "@/components/HeroSection";
import ContactButton from "@/components/ContactButton";

export default function About() {
  return (
    <>
      <HeroSection
        title="MPWR Capital"
        subtitle="Operators who invest. Partners who execute"
      />
      <section className="py-20">
        <div className="mx-auto max-w-[700px] px-6 text-center">
          <p className="font-opensans text-base leading-relaxed italic text-mpwr-text">
            MPWR Capital Management is an operator-led investment firm focused
            on home and building services. We partner with founders and
            management teams to build stronger, more durable businesses through
            hands-on operational leadership.
          </p>
          <p className="mt-6 font-opensans text-base leading-relaxed italic text-mpwr-text">
            We believe the best outcomes come from operators investing capital,
            not investors learning to operate.
          </p>
          <ContactButton />
        </div>
      </section>
    </>
  );
}
