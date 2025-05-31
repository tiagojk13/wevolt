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
              <img src="/logo-wevolt.svg" alt="Logo Wevolt" className="h-8" />
            </a>
            <p className="text-sm text-muted-foreground">
              Agilidade na criação de sites modernos e responsivos com tecnologia de ponta.
            </p>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:wevolt.digital@gmail.com" className="hover:text-primary">
                  wevolt.digital@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <a href="" className="hover:text-primary">
                  (19) 9 9808-5561
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Links Rápidos</h3>
            <ul className="space-y-2">
              {["Home", "Sobre", "Portfólio", "Processo", "Contato"].map((item) => (
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
            <h3 className="mb-4 text-lg font-semibold">Redes Sociais</h3>
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
          <p>© {new Date().getFullYear()} wevolt.</p>
        </div>
      </div>
    </footer>
  );
}
