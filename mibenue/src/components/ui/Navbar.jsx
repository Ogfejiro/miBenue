"use client";

import React from "react";
import Link from "next/link";
import { Home, Info, Boxes, Mail } from "lucide-react";

export default function Navbar() {
  const navLinks = [
    { name: "Home", icon: Home, href: "/" },
    { name: "About", icon: Info, href: "/about" },
    { name: "Projects", icon: Boxes, href: "/projects" },
    { name: "Contact", icon: Mail, href: "/contact" },
  ];

  return (
    <>
      {/* 🌿 Desktop Navbar — Glassmorphic Light Green */}
      <nav
        className="hidden md:flex fixed top-0 left-0 w-full z-50 
        backdrop-blur-2xl bg-green-400/25 dark:bg-green-800/20 
        border-b border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)]"
      >
        <div className="flex items-center justify-between w-full px-10 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/miBenue logo _1_png.png"
              alt="miBenue Logo"
              className="h-10 w-auto object-contain drop-shadow-md"
            />
          </Link>

          {/* Links */}
          <div className="flex space-x-8">
            {navLinks.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className="text-green-900 dark:text-green-100 hover:text-green-800 dark:hover:text-white font-medium transition text-sm"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* 📱 Mobile Floating Bottom Navbar — Glassmorphic */}
      <nav
        className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-50 
        backdrop-blur-2xl bg-green-400/25 dark:bg-green-800/20 border border-white/20 
        rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.15)]"
      >
        <div className="flex justify-around items-center py-3">
          {navLinks.map(({ name, icon: Icon, href }) => (
            <Link
              key={name}
              href={href}
              className="flex flex-col items-center text-green-900 dark:text-green-100 hover:text-green-800 dark:hover:text-white transition"
            >
              <Icon size={22} />
              <span className="text-[11px] mt-1">{name}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
