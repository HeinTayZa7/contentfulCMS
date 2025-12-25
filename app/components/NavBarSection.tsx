"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

type PageLink = {
  title: string;
  slug: string;
};

export default function Navbar({ pages }: { pages: PageLink[] }) {
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname() || "/en-US/home";

  const segments = pathname.split("/").filter(Boolean);
  const currentLocale = segments[0] || "en-US";
  const path = segments.slice(1).join("/");

  const languages = [
    { code: "en-US", label: "EN" },
    { code: "th", label: "TH" },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href={`/${currentLocale}`} className="flex items-center gap-3">
          <Image
            src="/t-siam logo.png"
            width={60}
            height={60}
            alt="T-SIAM Logo"
          />
          <span className="text-black text-2xl font-bold">
            T-Siam ARCH CO.LTD
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-black font-bold text-lg">
          {pages.map((page) => {
            const href =
              page.slug === "home"
                ? `/${currentLocale}`
                : `/${currentLocale}/${page.slug}`;

            const isActive =
              pathname === href ||
              (page.slug === "home" && pathname === `/${currentLocale}`);

            return (
              <Link
                key={page.slug}
                href={href}
                className={`hover:text-gray-400 ${
                  isActive ? "text-blue-600" : ""
                }`}
              >
                {page.title}
              </Link>
            );
          })}

          {/* Language switcher */}
          <div className="relative">
            <div
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 cursor-pointer select-none"
            >
              {currentLocale.toUpperCase()}
              <ChevronDown className="w-4 h-4" />
            </div>

            {langOpen && (
              <div className="absolute top-8 right-0 bg-white shadow rounded w-24">
                {languages.map((lang) => (
                  <Link
                    key={lang.code}
                    href={`/${lang.code}/${path || "home"}`} // fallback to home
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => setLangOpen(false)}
                  >
                    {lang.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
