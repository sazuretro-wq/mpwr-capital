interface HeroSectionProps {
  title: string;
  subtitle?: string;
  variant?: "home" | "inner";
}

export default function HeroSection({
  title,
  subtitle,
  variant = "inner",
}: HeroSectionProps) {
  if (variant === "home") {
    return (
      <section
        className="relative flex min-h-screen items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.33), rgba(255,255,255,0.33)), url(/images/hero-bg.jpg)",
        }}
      >
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <h1 className="font-manrope text-4xl font-bold leading-tight text-mpwr-dark md:text-5xl lg:text-[3.5rem]">
            Operators who invest.
            <br />
            Partners who execute
          </h1>
          <p className="mt-4 max-w-xl text-base text-mpwr-text md:text-lg">
            MPWR Capital Management is an operator-led investment firm focused
            on home services and building services
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="inline-block rounded bg-mpwr-red px-8 py-3 text-sm font-bold tracking-wide text-white uppercase transition-colors hover:bg-mpwr-red-hover"
            >
              Contact Us
            </a>
            <a
              href="/about"
              className="inline-block rounded border border-mpwr-text px-8 py-3 text-sm font-bold tracking-wide text-mpwr-text uppercase transition-colors hover:border-mpwr-red hover:text-mpwr-red"
            >
              Learn More
            </a>
          </div>
          <div className="mt-10 flex items-baseline gap-3">
            <span className="font-manrope text-4xl font-bold text-mpwr-dark md:text-5xl">
              10T+
            </span>
            <span className="text-xs font-bold tracking-widest text-mpwr-text uppercase">
              Economic
              <br />
              Opportunity
            </span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="relative flex min-h-[45vh] items-center justify-center overflow-hidden"
      style={{
        background:
          "repeating-radial-gradient(circle at 0px 0px, rgba(197,168,105,0.56) 61%, rgb(206,173,140))",
      }}
    >
      {/* Decorative overlay shape */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url(/images/hero-overlay.webp)" }}
      />
      <div className="relative z-10 text-center">
        <h1 className="font-manrope text-4xl font-black tracking-tight text-mpwr-dark uppercase md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <div className="mx-auto mt-4 inline-block rounded bg-mpwr-red px-8 py-2">
            <span className="text-sm font-bold tracking-widest text-white uppercase">
              {subtitle}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
