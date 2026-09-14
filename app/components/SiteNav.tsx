"use client";

import { Menu, UserPlus, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  ["Home", "/"],
  ["About", "/About"],
  ["Programs", "/Programs"],
  ["Our Work", "/our-work"],
  ["Stories", "/Stories"],
  ["Team", "/Team"],
  ["Donate", "/donate"],
  ["Contact", "/Contact"],
  ["Terms", "/terms"],
];

export default function SiteNav({ active = "" }: { active?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScroll(window.scrollY > 220);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {/* ================================
          MAIN NAVIGATION
      ================================= */}
      <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-8 md:py-5">
        <nav
          className="
            mx-auto max-w-7xl
            rounded-[1.6rem]
            border border-white/10
            bg-[linear-gradient(
              135deg,
              rgba(10,52,50,0.94),
              rgba(7,41,39,0.90),
              rgba(11,61,56,0.94)
            )]
            px-4 py-3
            shadow-[0_18px_50px_rgba(2,16,15,0.42)]
            backdrop-blur-xl
            md:rounded-full
            md:px-5
          "
        >
          {/* ================================
              NAV TOP ROW
          ================================= */}
          <div className="flex items-center justify-between gap-4">

            {/* LOGO */}
            <a
              href="/"
              aria-label="Zindua Foundation Home"
              className="
                group
                flex
                shrink-0
                items-center
                overflow-hidden
                rounded-xl
                bg-[var(--zindua-ivory)]
                p-1
                shadow-[0_14px_28px_rgba(19,58,55,0.18)]
                ring-1
                ring-white/30
              "
            >
              <Image
                src="/images/logo/zindualogo.png"
                alt="Zindua Foundation"
                width={44}
                height={44}
                className="
                  h-9
                  w-auto
                  object-contain
                  transition
                  duration-500
                  group-hover:scale-105
                  md:h-11
                "
                priority
              />
            </a>

            {/* ================================
                DESKTOP NAVIGATION
            ================================= */}
            <div className="hidden items-center gap-5 lg:flex xl:gap-7">
              {links.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className={`
                    group
                    relative
                    whitespace-nowrap
                    text-sm
                    font-medium
                    tracking-[0.02em]
                    transition-all
                    duration-300
                    ${
                      active === label
                        ? "text-[var(--zindua-gold)]"
                        : "text-[var(--zindua-ivory)]/75 hover:text-[var(--zindua-ivory)]"
                    }
                  `}
                >
                  {label}

                  {/* ACTIVE / HOVER LINE */}
                  <span
                    className={`
                      absolute
                      -bottom-1
                      left-0
                      h-[2px]
                      rounded-full
                      bg-[var(--zindua-gold)]
                      transition-all
                      duration-300
                      ${
                        active === label
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }
                    `}
                  />
                </a>
              ))}
            </div>

            {/* ================================
                RIGHT SIDE ACTIONS
            ================================= */}
            <div className="flex items-center gap-2">

              {/* JOIN ZINDUA ICON BUTTON */}
              <a
                href="/join-zindua"
                aria-label="Join Zindua"
                title="Join Zindua"
                className="
                  group
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[var(--zindua-gold)]/60
                  bg-[var(--zindua-gold)]
                  text-[var(--zindua-forest)]
                  shadow-[0_8px_25px_rgba(0,0,0,0.18)]
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:border-[var(--zindua-gold)]
                  hover:shadow-[0_10px_30px_rgba(0,0,0,0.28)]
                  active:scale-95
                "
              >
                <UserPlus
                  size={18}
                  strokeWidth={2.2}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>

              {/* MOBILE MENU BUTTON */}
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={
                  menuOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
                }
                aria-expanded={menuOpen}
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  text-[var(--zindua-ivory)]
                  transition-all
                  duration-300
                  hover:border-[var(--zindua-gold)]
                  hover:bg-white/10
                  hover:text-[var(--zindua-gold)]
                  active:scale-95
                  lg:hidden
                "
              >
                {menuOpen ? (
                  <X size={19} />
                ) : (
                  <Menu size={19} />
                )}
              </button>
            </div>
          </div>

          {/* ================================
              MOBILE NAVIGATION
          ================================= */}
          {menuOpen && (
            <div
              className="
                mt-4
                grid
                gap-1
                border-t
                border-white/10
                pt-3
                lg:hidden
              "
            >
              {links.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`
                    rounded-xl
                    px-3
                    py-3
                    text-sm
                    font-medium
                    transition-all
                    duration-300
                    ${
                      active === label
                        ? "bg-white/5 text-[var(--zindua-gold)]"
                        : "text-[var(--zindua-ivory)]/80 hover:bg-white/5 hover:text-[var(--zindua-ivory)]"
                    }
                  `}
                >
                  <div className="flex items-center justify-between">
                    <span>{label}</span>

                    {active === label && (
                      <span
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-[var(--zindua-gold)]
                        "
                      />
                    )}
                  </div>
                </a>
              ))}

              {/* MOBILE JOIN ZINDUA */}
              <a
                href="/join-zindua"
                onClick={() => setMenuOpen(false)}
                className="
                  mt-2
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[var(--zindua-gold)]
                  px-4
                  py-3
                  text-sm
                  font-semibold
                  text-[var(--zindua-forest)]
                  shadow-lg
                  transition-all
                  duration-300
                  hover:brightness-105
                  active:scale-[0.98]
                "
              >
                <UserPlus size={17} strokeWidth={2.2} />
                <span>Join Zindua</span>
              </a>
            </div>
          )}
        </nav>
      </header>

      {/* ================================
          SCROLL TO TOP
      ================================= */}
      <button
        type="button"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        aria-label="Scroll to top"
        className={`
          fixed
          bottom-24
          right-6
          z-50
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          border
          border-[var(--zindua-gold)]
          bg-[var(--zindua-gold)]
          text-[var(--zindua-forest)]
          shadow-lg
          shadow-black/20
          transition-all
          duration-300
          ${
            showScroll
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-4 opacity-0"
          }
        `}
      >
        ↑
      </button>
    </>
  );
}