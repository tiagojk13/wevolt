"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Link as LinkIcon } from "lucide-react";
import RevealAnimation from "@/components/animations/reveal-animation";
import { ButtonGlow } from "@/components/ui/button-glow";

const portfolioItems = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
  {
    id: 4,
    title: "Healthcare Dashboard",
    category: "UI/UX Design",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    title: "Fitness Tracking App",
    category: "App Development",
    image: "https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 6,
    title: "Travel Blog Platform",
    category: "Web Development",
    image: "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export default function PortfolioSection() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-4">
        <RevealAnimation>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 gradient-text">Our Portfolio</h2>
            <p className="text-lg text-muted-foreground">
              Explore our recent projects and see how we've helped businesses transform their digital presence.
              Each project showcases our commitment to excellence and innovation.
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
          <div className="mt-16 text-center">
            <ButtonGlow variant="accent" size="lg">
              View All Projects <ArrowRight className="ml-2 h-5 w-5" />
            </ButtonGlow>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}