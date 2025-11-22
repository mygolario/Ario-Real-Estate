"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Home, ChevronLeft } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "خرید", href: "#properties" },
    { name: "محله‌ها", href: "#neighborhoods" },
    { name: "خدمات", href: "#services" },
    { name: "مقالات", href: "#insights" },
    { name: "تماس", href: "#footer" },
  ];

  // Handle ESC key to close menu
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group z-50 relative">
            <div className="bg-blue-600 p-2 rounded-xl text-white group-hover:bg-blue-700 transition-colors">
              <Home size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">آریو املاک</span>
              <span className="text-xs text-gray-500">پلتفرم هوشمند ملک</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-5 py-2.5 text-sm font-medium text-blue-600 border border-blue-200 rounded-full hover:bg-blue-50 transition-colors cursor-pointer">
              ورود
            </button>
            <button className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all hover:shadow-blue-600/30 cursor-pointer">
              ثبت‌نام
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg z-50 relative cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white z-50 shadow-2xl transition-transform duration-300 ease-out md:hidden flex flex-col ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full overflow-y-auto">
          <div className="flex items-center justify-between mb-8">
            <span className="text-lg font-bold text-gray-900">منوی دسترسی</span>
            {/* Close button is handled by the main toggle button which is z-50 */}
          </div>

          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center justify-between p-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-2xl transition-all group"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="font-medium text-lg">{link.name}</span>
                <ChevronLeft size={20} className="text-gray-400 group-hover:text-blue-600 transition-colors" />
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-8 border-t border-gray-100">
            <div className="grid grid-cols-1 gap-4">
              <button className="w-full py-3.5 text-base font-medium text-blue-600 border border-blue-200 rounded-2xl hover:bg-blue-50 transition-colors cursor-pointer">
                ورود به حساب
              </button>
              <button className="w-full py-3.5 text-base font-medium text-white bg-blue-600 rounded-2xl hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all cursor-pointer">
                ثبت‌نام رایگان
              </button>
            </div>
            <p className="text-center text-xs text-gray-400 mt-6">
              © ۱۴۰۳ آریو املاک. تمامی حقوق محفوظ است.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
