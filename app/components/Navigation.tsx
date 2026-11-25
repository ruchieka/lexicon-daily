
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { label: "Home", short: "Home", symbol: "⌂", href: "/" },
    { label: "Learn", short: "Learn", symbol: "✳", href: "/learn" },
    {
      label: "Revision Room",
      short: "Revise",
      symbol: "↻",
      href: "/revision",
    },
  ];

  return (
    <>
      {/* DESKTOP NAVIGATION */}
      <nav className="hidden border-b border-[#E8E1D9] bg-white px-6 py-4 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {pathname !== "/" && (
            <Link
              href="/"
              className="font-serif text-xl tracking-[0.12em] text-[#574A60]"
            >
              LEXICON<span className="text-[#A58CB1]">.</span>
            </Link>
          )}

          <div className="ml-auto flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs tracking-wider transition ${
                  pathname === link.href
                    ? "text-[#A58CB1]"
                    : "text-[#817789] hover:text-[#A58CB1]"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="ml-2">●</span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* MOBILE TOP BRAND */}
      {pathname !== "/" && (
        <div className="border-b border-[#E8E1D9] bg-white px-6 py-4 md:hidden">
          <Link
            href="/"
            className="font-serif text-2xl tracking-[0.12em] text-[#574A60]"
          >
            LEXICON<span className="text-[#A58CB1]">.</span>
          </Link>
          <p className="mt-1 text-[8px] uppercase tracking-[0.22em] text-[#95839E]">
            An exercise in erudition
          </p>
        </div>
      )}

      {/* MOBILE BOTTOM NAVIGATION */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#E8E1D9] bg-white/95 px-5 pb-[env(safe-area-inset-bottom)] pt-3 backdrop-blur-md md:hidden">
        <div className="mx-auto flex max-w-md items-center justify-around">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex min-w-0 flex-col items-center gap-1 px-4 pb-2 transition ${
                  active ? "text-[#A58CB1]" : "text-[#A399A8]"
                }`}
              >
                <span className="text-xl leading-6">
                  {link.symbol}
                </span>
                <span
                  className={`text-[9px] tracking-[0.12em] ${
                    active ? "font-semibold" : ""
                  }`}
                >
                  {link.short}
                </span>
                {active && (
                  <span className="h-1 w-1 rounded-full bg-[#A58CB1]" />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}

