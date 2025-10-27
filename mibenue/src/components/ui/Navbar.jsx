"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Home, Info, Boxes, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import WaitlistForm from "@/components/ui/WaitlistForm"; // 👈 import the form

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [waitlistOpen, setWaitlistOpen] = useState(false); // 👈 for form toggle

  const navLinks = [
    { name: "Home", icon: Home, href: "/" },
    { name: "About", icon: Info, href: "/about" },
    { name: "Product", icon: Boxes, href: "/product" },
    { name: "Contact", icon: Mail, href: "/contact" },
  ];

  return (
    <>
      {/* 🌿 Desktop Navbar */}
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
              className="h-6 w-auto object-contain drop-shadow-md"
            />
          </Link>

          {/* Links */}
          <div className="flex items-center space-x-8">
            {navLinks.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className="text-green-900 dark:text-green-100 hover:text-green-800 dark:hover:text-white font-medium transition text-sm"
              >
                {name}
              </Link>
            ))}

            {/* ✅ Desktop Join Waitlist Button */}
            <Button
              onClick={() => setWaitlistOpen(true)}
              className="bg-green-700 hover:bg-green-800 text-white text-sm px-5 py-2 rounded-full shadow-md"
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      </nav>

      {/* 📱 Mobile Navbar */}
      <nav
        className="md:hidden fixed top-0 left-0 w-full z-50 
        backdrop-blur-xl bg-green-400/25 dark:bg-green-800/20 border-b border-white/20 
        shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]"
      >
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/miBenue logo _1_png.png"
              alt="miBenue Logo"
              className="h-7 w-auto object-contain drop-shadow-md"
            />
          </Link>

          {/* Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-green-900 dark:text-green-100 hover:text-green-700 dark:hover:text-white transition"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* 📱 Side Drawer Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-green-900 shadow-2xl z-40 
          transform ${menuOpen ? "translate-x-0" : "translate-x-full"} 
          transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col py-20 px-6 space-y-6">
          {navLinks.map(({ name, icon: Icon, href }) => (
            <Link
              key={name}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 text-green-800 dark:text-green-100 hover:text-green-600 dark:hover:text-white text-lg font-medium transition"
            >
              <Icon size={22} />
              {name}
            </Link>
          ))}

          {/* ✅ Mobile Join Waitlist Button */}
          <button
            onClick={() => {
              setWaitlistOpen(true);
              setMenuOpen(false);
            }}
            className="mt-10 inline-flex items-center justify-center px-6 py-3 rounded-full bg-green-600 text-white font-medium hover:bg-green-700 transition-all shadow-md"
          >
            Join Waitlist
          </button>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
        />
      )}

      {/* 🌿 Waitlist Form (for both mobile + desktop) */}
      <WaitlistForm open={waitlistOpen} setOpen={setWaitlistOpen} />
    </>
  );
}
