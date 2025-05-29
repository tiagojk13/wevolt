import React from "react";
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/30 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <a href="#" className="flex items-center gap-2">
              <img src="/wevolt-logo.svg" alt="Logo WEvolt" className="h-8" />
            </a>
            <p className="text-sm text-muted-foreground">
              Creating modern, responsive, and beautiful websites with cutting-edge technology.
            </p>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:contact@codestudio.com" className="hover:text-primary">
                  contact@codestudio.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+11234567890" className="hover:text-primary">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                <span>123 Web Development St, Digital City, Internet 10101</span>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Portfolio", "Process", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Column */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <Instagram className="h-4 w-4 text-muted-foreground hover:text-primary" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <Linkedin className="h-4 w-4 text-muted-foreground hover:text-primary" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-6 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} WEvolt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
