"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
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

        <div className="hidden md:flex items-center gap-8 text-black font-bold text-lg">
          <Link href="/" className=" hover:text-gray-300">
            Home
          </Link>
          <Link href="/services" className=" hover:text-gray-300 ">
            Services
          </Link>
          <Link href="/about" className=" hover:text-gray-300">
            About
          </Link>
          <Link href="/contact" className=" hover:text-gray-300">
            Contact
          </Link>

          <div className="flex items-center gap-1 cursor-pointer  hover:text-gray-300">
            EN <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </nav>
    </header>
  );
}
