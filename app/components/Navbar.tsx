"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Ventures", href: "#ventures" },
    { name: "About", href: "#about" },
  ];

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-500 ${
        isScrolled ? "bg-white shadow-lg py-3" : "bg-transparent py-5"
      }`}
      style={{
        background: isScrolled ? "white" : "linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f172a 100%)"
      }}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <img
            src="/logo.png"
            alt="Su Indra Logo"
            className={`transition-all duration-500 ${
              isScrolled ? "h-12 md:h-14 w-auto" : "h-14 md:h-16 w-auto"
            }`}
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-xs lg:text-sm font-bold uppercase tracking-wider transition-colors hover:text-brand-red ${
                isScrolled ? "text-brand-dark" : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="bg-brand-red text-white px-5 md:px-6 py-2 md:py-2.5 rounded-lg md:rounded-xl font-bold text-xs md:text-sm hover:bg-brand-dark transition-all shadow-lg shadow-brand-red/20"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-brand-dark" : "text-white"} size={24} />
          ) : (
            <Menu className={isScrolled ? "text-brand-dark" : "text-white"} size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-2xl p-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-brand-dark font-bold text-base border-b border-slate-100 pb-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="bg-brand-red text-white py-3 rounded-lg text-center font-bold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get in Touch
          </Link>
        </div>
      )}
    </nav>
  );
}