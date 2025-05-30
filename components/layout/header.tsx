"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Sobre", href: "#about" },
  { name: "Portfólio", href: "#portfolio" },
  { name: "Processo", href: "#process" },
  { name: "Proposta de valor", href: "#values" },
  { name: "Depoimentos", href: "#testimonials" },
  { name: "Contato", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const headerBackground = useTransform(
    scrollY,
    [0, 80],
    ["rgba(22, 26, 38, 0)", "rgba(22, 26, 38, 0.8)"]
  );
  
  const headerBackdropBlur = useTransform(
    scrollY,
    [0, 80],
    ["blur(0px)", "blur(8px)"]
  );

  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        scrolled ? "backdrop-blur-md" : ""
      )}
      style={{
        backgroundColor: headerBackground,
        backdropFilter: headerBackdropBlur,
      }}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* LOGO personalizado */}
        <a href="#" className="flex items-center gap-2">
          <img src="/logo-wevolt.svg" alt="Logo WEvolt" className="h-10" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 z-50 bg-card/95 backdrop-blur-lg md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <nav className="container mx-auto px-4 py-4">
              <ul className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="block py-2 text-lg font-medium text-foreground/80 transition-colors hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
