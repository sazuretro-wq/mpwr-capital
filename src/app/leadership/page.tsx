import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import ContactButton from "@/components/ContactButton";

export default function Leadership() {
  return (
    <>
      <HeroSection title="Leadership" subtitle="Alazar Asmamaw" />
      <section className="py-20">
        <div className="mx-auto max-w-[700px] px-6 text-center">
          <Image
            src="/images/alazar.jpg"
            alt="Alazar Asmamaw"
            width={500}
            height={600}
            className="mx-auto rounded-lg shadow-lg"
          />

          <p className="mt-8 font-manrope text-base font-bold text-mpwr-dark">
            Investor | Business Builder | Partner to Founders
          </p>

          <p className="mt-4 font-opensans text-sm leading-relaxed text-mpwr-text">
            I love building businesses. There&apos;s nothing more rewarding than
            helping founders scale, unlock value, and achieve the big exit
            they&apos;ve always envisioned. That&apos;s why I co-founded MPWR
            Capital Management—to be the kind of investor I wish more founders
            had: hands-on, aligned, and focused on long-term success.
          </p>

          <p className="mt-4 font-opensans text-sm leading-relaxed text-mpwr-text">
            At MPWR, we partner with business owners to take their companies to
            the next level. Whether it&apos;s streamlining operations, expanding
            through acquisitions, or unlocking new growth opportunities, we bring
            the resources, expertise, and strategic thinking that help founders
            turn strong businesses into industry leaders. I&apos;ve been in the
            trenches, helping grow a founder-led company by 20x in revenue and
            15x in workforce in less than five years.
          </p>

          <p className="mt-4 font-opensans text-sm leading-relaxed text-mpwr-text">
            I stay deeply connected to the founder and entrepreneurial community,
            working with organizations like YPO, Goldman Sachs&apos; 10,000
            Small Businesses, and Ernst &amp; Young&apos;s Entrepreneur Access
            Network. I also serve on the Minority-Owned Small Businesses (MOSB)
            task force under the Department of Government Services (DGS) because
            I believe in creating opportunities for more founders to build
            something great.
          </p>

          <p className="mt-4 font-opensans text-sm leading-relaxed text-mpwr-text">
            Before launching MPWR Capital Management, I spent years honing my
            value investment framework in real estate, where I learned firsthand
            what it takes to identify opportunities, structure deals, and create
            long-term value. Partnering with an opportunistic fund, I led 18
            sub-institutional multifamily acquisitions, managing everything from
            sourcing and financing to operations and successful exits. At the
            same time, I built my own buy-and-hold portfolio, applying the same
            disciplined investment principles that now guide my approach to
            scaling small businesses.
          </p>

          <p className="mt-4 font-opensans text-sm leading-relaxed text-mpwr-text">
            My goal is simple: helping business owners build lasting success,
            create generational wealth for their families, and enjoy the second
            bite of the apple when the big exit comes. If you&apos;re a founder
            looking to scale, let&apos;s talk. Let&apos;s Connect:
          </p>

          <ContactButton label="Contact" />
        </div>
      </section>
    </>
  );
}
