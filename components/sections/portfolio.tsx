"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Link as LinkIcon } from "lucide-react";
import RevealAnimation from "@/components/animations/reveal-animation";
import { Button } from "@/components/ui/button";

const portfolioItems = [
  {
    id: 1,
    title: "Landing Page",
    category: "Desenvolvimento",
    image: "/lp-brain.webp",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "App Design",
    image: "https://images.pexels.com/photos/6804073/pexels-photo-6804073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    title: "Real Estate Website",
    category: "Web Design",
    image: "https://images.pexels.com/photos/7173026/pexels-photo-7173026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export default function PortfolioSection() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-4">
        <RevealAnimation>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-white">Portfólio</h2>
            <p className="text-lg text-muted-foreground">
              Explore nossos projetos recentes e veja como ajudamos empresas a transformar sua presença digital. Cada projeto demonstra nosso compromisso com a excelência e a inovação.
            </p>
          </div>
        </RevealAnimation>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <RevealAnimation key={item.id} delay={index * 0.1 + 0.2}>
              <motion.div
                className="relative overflow-hidden rounded-lg"
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="aspect-video overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover object-center transition-transform duration-500"
                  />
                </motion.div>
                
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center bg-card/80 p-4 text-center backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredItem === item.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h3 
                    className="mb-2 text-xl font-semibold"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ 
                      y: hoveredItem === item.id ? 0 : 20, 
                      opacity: hoveredItem === item.id ? 1 : 0 
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {item.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="mb-4 text-muted-foreground"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ 
                      y: hoveredItem === item.id ? 0 : 20, 
                      opacity: hoveredItem === item.id ? 1 : 0 
                    }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    {item.category}
                  </motion.p>
                  
                  <motion.button
                    className="flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ 
                      y: hoveredItem === item.id ? 0 : 20, 
                      opacity: hoveredItem === item.id ? 1 : 0 
                    }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    View Project <LinkIcon className="h-4 w-4" />
                  </motion.button>
                </motion.div>
              </motion.div>
            </RevealAnimation>
          ))}
        </div>

        <RevealAnimation delay={0.5}>
          <div className="mt-16 flex justify-center">
            <a href="#contact">
              <Button
                variant="glow"
                size="xl"
                className="bg-gradient-to-r from-[#24b2ff] to-[#9c3dff] hover:brightness-110"
              >
                Comece o seu projeto hoje
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}
