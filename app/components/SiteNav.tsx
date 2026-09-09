"use client";

import { Menu, Moon, SunMedium, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  ["Home", "/"],
  ["About", "/About"],
  ["Programs", "/Programs"],
  ["Join Zindua", "/join-zindua"],
  ["Our Work", "/our-work"],
  ["Stories", "/Stories"],
  ["Team", "/Team"],
  ["Volunteer", "/volunteer"],
  ["Get Involved", "/get-involved"],
  ["Donate", "/donate"],
  ["Contact", "/Contact"],
  ["Terms", "/terms"],
];

export default function SiteNav({ active = "" }: { active?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("zindua-theme");
    const nextTheme = savedTheme === "light" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("zindua-theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 220);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => setTheme((current) => (current === "dark" ? "light" : "dark"));

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-8 md:py-5">
        <nav className="mx-auto max-w-7xl rounded-[1.6rem] border border-white/10 bg-[linear-gradient(135deg,rgba(10,52,50,0.94),rgba(7,41,39,0.9),rgba(11,61,56,0.94))] px-4 py-3 shadow-[0_18px_50px_rgba(2,16,15,0.42)] backdrop-blur-xl md:rounded-full md:px-5">
          <div className="flex items-center justify-between gap-4">
            <a href="/" className="group flex shrink-0 items-center overflow-hidden rounded-xl bg-[var(--zindua-ivory)] p-1 shadow-[0_14px_28px_rgba(19,58,55,0.18)] ring-1 ring-white/30">
              <Image
                src="/images/logo/zindualogo.png"
                alt="Zindua Foundation"
                width={44}
                height={44}
                className="h-9 w-auto object-contain transition duration-500 group-hover:scale-105 md:h-11"
                priority
              />
            </a>

            <div className="hidden items-center gap-5 lg:flex xl:gap-7">
              {links.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className={`whitespace-nowrap text-sm font-medium tracking-[0.02em] transition ${
                    active === label ? "text-[var(--zindua-gold)]" : "text-[var(--zindua-ivory)]/75 hover:text-[var(--zindua-ivory)]"
                  }`}
                >
                  {label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Toggle theme"
                onClick={toggleTheme}
                className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[var(--zindua-ivory)] transition hover:border-[var(--zindua-gold)] hover:text-[var(--zindua-gold)] lg:flex"
              >
                {theme === "dark" ? <SunMedium size={18} /> : <Moon size={18} />}
              </button>

              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[var(--zindua-ivory)] transition hover:border-[var(--zindua-gold)] hover:text-[var(--zindua-gold)] lg:hidden"
              >
                {menuOpen ? <X size={19} /> : <Menu size={19} />}
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="mt-4 grid gap-1 border-t border-white/10 pt-3 lg:hidden">
              {links.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-lg px-3 py-3 text-sm font-medium transition ${
                    active === label ? "text-[var(--zindua-gold)]" : "text-[var(--zindua-ivory)]/80 hover:bg-white/5"
                  }`}
                >
                  {label}
                </a>
              ))}
              <button
                type="button"
                onClick={toggleTheme}
                className="mt-2 flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-left text-sm font-medium text-[var(--zindua-ivory)]"
              >
                <span>Theme</span>
                <span>{theme === "dark" ? "Light" : "Dark"}</span>
              </button>
            </div>
          )}
        </nav>
      </header>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className={`fixed bottom-24 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--zindua-gold)] bg-[var(--zindua-gold)] text-[var(--zindua-forest)] shadow-lg shadow-black/20 transition ${showScroll ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
      >
        ↑
      </button>
    </>
  );
}
