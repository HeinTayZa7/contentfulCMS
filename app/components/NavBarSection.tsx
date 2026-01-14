"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

type PageLink = {
  title: string;
  slug: string;
};

export default function Navbar({ pages }: { pages: PageLink[] }) {
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const pathname = usePathname() || "/en-US/home";
  const router = useRouter();

  const segments = pathname.split("/").filter(Boolean);
  const currentLocale = segments[0] || "en-US";
  const path = segments.slice(1).join("/") || "home";

  const languages = [
    { code: "en-US", label: "English" },
    { code: "th", label: "Thai" },
  ];

  // Close menus on route change
  useEffect(() => {
    setLangOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href={`/${currentLocale}`} className="flex items-center gap-3">
          <Image
            src="/t-siam logo.png"
            width={56}
            height={56}
            alt="T-SIAM Logo"
          />
          <span className="text-2xl font-bold text-black">
            T-SIAM ARCH CO.LTD
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-semibold text-lg">
          {pages.map((page) => {
            const href =
              page.slug === "home"
                ? `/${currentLocale}`
                : `/${currentLocale}/${page.slug}`;

            const isActive = pathname === href;

            return (
              <Link
                key={page.slug}
                href={href}
                className={`transition ${
                  isActive ? "text-blue-600" : "text-black hover:text-blue-600"
                }`}
              >
                {page.title}
              </Link>
            );
          })}

          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 text-black hover:text-blue-600"
            >
              {currentLocale.toUpperCase()}
              <ChevronDown className="w-4 h-4" />
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-3 w-32 bg-white shadow-lg rounded-lg overflow-hidden">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => router.push(`/${lang.code}/${path}`)}
                    className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 text-black"
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={32} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setMobileOpen(false)}
          />

          <div className="fixed inset-0 z-50 bg-white flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <div className="flex items-center gap-3">
                <Image
                  src="/t-siam logo.png"
                  width={48}
                  height={48}
                  alt="T-SIAM Logo"
                />
                <span className="text-xl text-black font-bold">
                  T-SIAM ARCH CO.LTD
                </span>
              </div>

              <button
                className="text-black"
                onClick={() => setMobileOpen(false)}
              >
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center flex-1 gap-10 text-2xl font-semibold text-black">
              {pages.map((page) => {
                const href =
                  page.slug === "home"
                    ? `/${currentLocale}`
                    : `/${currentLocale}/${page.slug}`;

                return (
                  <Link
                    key={page.slug}
                    href={href}
                    className="text-black hover:text-blue-600 transition"
                    onClick={() => setMobileOpen(false)}
                  >
                    {page.title}
                  </Link>
                );
              })}
            </div>

            <div className="p-6 border-t">
              <select
                className="w-full p-4 rounded-xl bg-gray-100 text-lg text-black"
                value={currentLocale}
                onChange={(e) => router.push(`/${e.target.value}/${path}`)}
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
