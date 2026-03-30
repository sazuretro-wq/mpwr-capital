import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/mission", label: "Mission" },
  { href: "/investment-approach", label: "Approach" },
  { href: "/investment-criteria", label: "Criteria" },
  { href: "/leadership", label: "Leadership" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-mpwr-dark text-white/70">
      <div className="mx-auto max-w-[1300px] px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo.png"
              alt="MPWR Capital"
              width={60}
              height={50}
              className="mb-5 h-auto w-[60px] brightness-0 invert"
            />
            <p className="max-w-xs text-[14px] leading-relaxed text-white/50">
              Operator-led investment firm focused on home services and building
              services.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-5 text-[14px] font-semibold tracking-wide text-white/90">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="cursor-pointer text-[14px] text-white/50 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-[14px] font-semibold tracking-wide text-white/90">
              Get in Touch
            </h4>
            <a
              href="mailto:info@mpwrcap.com"
              className="text-[14px] text-white/50 transition-colors duration-300 hover:text-white"
            >
              info@mpwrcap.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-white/10 pt-6">
          <p className="text-[13px] text-white/30">
            &copy; {new Date().getFullYear()} MPWR Capital. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
