"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/mission", label: "Mission" },
  { href: "/investment-approach", label: "Approach" },
  { href: "/investment-criteria", label: "Criteria" },
  { href: "/leadership", label: "Leadership" },
  { href: "/portfolio", label: "Portfolio" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onDarkHero = !scrolled;

  const navTextColor = onDarkHero
    ? "text-white/80 hover:text-white"
    : "text-mpwr-text-muted hover:text-mpwr-text";

  const navActiveColor = onDarkHero ? "text-white" : "text-mpwr-red";

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-mpwr-white/95 shadow-sm shadow-black/5 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1300px] items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="relative z-10">
            <Image
              src="/images/logo.png"
              alt="MPWR Capital"
              width={50}
              height={42}
              className={`h-auto w-[50px] transition-all duration-300 ${
                onDarkHero ? "brightness-0 invert" : ""
              }`}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative"
              >
                <span
                  className={`text-[14px] font-medium transition-colors duration-300 ${
                    pathname === link.href ? navActiveColor : navTextColor
                  }`}
                >
                  {link.label}
                </span>
                {pathname === link.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-mpwr-red"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`cursor-pointer rounded-full px-6 py-2.5 text-[14px] font-semibold transition-all duration-300 ${
                pathname === "/contact"
                  ? "bg-mpwr-red text-white"
                  : "bg-mpwr-red text-white hover:bg-mpwr-red-dark"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="relative z-10 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex h-5 w-6 flex-col justify-between">
              {[0, 1, 2].map((i) => {
                const barColor = mobileOpen ? "#fff" : onDarkHero ? "#fff" : "#1A1A1A";
                const animateProps =
                  i === 0
                    ? mobileOpen
                      ? { rotate: 45, y: 8, backgroundColor: barColor }
                      : { rotate: 0, y: 0, backgroundColor: barColor }
                    : i === 1
                      ? mobileOpen
                        ? { opacity: 0, backgroundColor: barColor }
                        : { opacity: 1, backgroundColor: barColor }
                      : mobileOpen
                        ? { rotate: -45, y: -8, backgroundColor: barColor }
                        : { rotate: 0, y: 0, backgroundColor: barColor };
                return (
                  <motion.span
                    key={i}
                    animate={animateProps}
                    transition={{ duration: 0.3 }}
                    className="block h-[1.5px] w-full"
                  />
                );
              })}
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-mpwr-dark/98 backdrop-blur-xl lg:hidden"
          >
            {[...navLinks, { href: "/contact", label: "Contact" }].map(
              (link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ delay: i * 0.04, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block py-3 font-heading text-2xl font-light tracking-wide transition-colors ${
                      pathname === link.href
                        ? "text-white"
                        : "text-white/50 hover:text-white/80"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
