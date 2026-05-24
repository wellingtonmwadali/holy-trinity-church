"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Menu, Mail, Phone, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Ministries", href: "/ministries" },
  { name: "Services", href: "/services" },
  { name: "Sermons", href: "/sermons" },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      {/* Top Banner */}
      <div className="bg-primary text-white text-sm py-2 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2 mb-2 md:mb-0 hover:text-secondary transition-colors cursor-pointer">
          <Mail size={16} />
          <span>info@holytrinitynairobi.org</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">Need counselling, guidance, and support?</span>
          <span className="font-semibold flex items-center gap-2 hover:text-secondary transition-colors cursor-pointer">
            <Phone size={16} /> Prayer Line: +254 700 000 000
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="px-4 md:px-8 py-4 flex justify-between items-center bg-white relative z-20">
        {/* Logo */}
        <Link href="/" className="flex flex-col group">
          <span className="text-xl md:text-2xl font-bold text-primary group-hover:text-secondary transition-colors">
            Holy Trinity Church
          </span>
          <span className="text-xs text-gray-500 font-medium">Nairobi Parish</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 text-foreground font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-secondary after:transition-all hover:after:w-full transition-colors pb-1"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-gray-50 border border-gray-100 rounded-full px-4 py-2 hover:border-gray-300 transition-colors focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20">
            <Search size={18} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search services..."
              className="bg-transparent border-none outline-none text-sm w-32 focus:w-48 transition-all duration-300"
            />
          </div>
          <Link
            href="/give"
            className="bg-secondary hover:bg-secondary-hover text-white px-6 py-2 rounded-full font-semibold transition-transform hover:scale-105 active:scale-95 shadow-md"
          >
            Give
          </Link>
          <button 
            className="lg:hidden text-foreground hover:text-primary transition-colors p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div 
        className={`lg:hidden bg-white border-t border-gray-100 py-4 px-4 shadow-xl absolute w-full left-0 transition-all duration-300 ease-in-out origin-top z-10 ${
          isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-4 text-foreground font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-primary hover:bg-gray-50 px-4 py-2 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/give"
            className="bg-secondary text-center text-white px-6 py-3 rounded-md font-semibold transition-colors mt-2 shadow-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Give
          </Link>
        </nav>
      </div>
    </header>
  );
}
