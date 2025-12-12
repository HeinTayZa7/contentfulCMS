"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const pathname = usePathname();
  const segments = pathname.split("/");
  const currentLocale = segments[1] || "en";
  const path = segments.slice(2).join("/");

  const languages = [
    { code: "en-US", label: "EN" },
    { code: "th", label: "TH" },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href={`/${currentLocale}`} className="flex items-center gap-3">
          <Image
            src="/t-siam logo.png"
            width={60}
            height={60}
            alt="T-SIAM Logo"
            className="object-contain"
          />
          <span className="text-black text-2xl font-bold">
            T-Siam ARCH CO.LTD
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-black font-bold text-lg">
          <Link href={`/${currentLocale}`} className="hover:text-gray-300">
            Home
          </Link>
          <Link
            href={`/${currentLocale}/services`}
            className="hover:text-gray-300"
          >
            Services
          </Link>
          <Link
            href={`/${currentLocale}/about`}
            className="hover:text-gray-300"
          >
            About
          </Link>
          <Link
            href={`/${currentLocale}/contact`}
            className="hover:text-gray-300"
          >
            Contact
          </Link>

          {/* Language Dropdown */}
          <div className="relative">
            <div
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 cursor-pointer hover:text-gray-400"
            >
              {currentLocale.toUpperCase()} <ChevronDown className="w-4 h-4" />
            </div>

            {langOpen && (
              <div className="absolute top-8 right-0 bg-white shadow-lg rounded-md border w-28 py-2">
                {languages.map((lang) => (
                  <Link
                    key={lang.code}
                    href={`/${lang.code}/${path}`}
                    className={`block px-4 py-2 text-sm hover:bg-gray-100 ${
                      lang.code === currentLocale
                        ? "text-blue-600 font-semibold"
                        : "text-black"
                    }`}
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
