"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import RevealAnimation from "@/components/animations/reveal-animation";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-[70vh] overflow-hidden px-4 pt-40 lg:pt-32"
    >
      {/* Background light effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/4 top-1/4 h-[300px] w-[300px] rounded-full bg-primary/20 blur-[100px] light-pulse" />
        <div className="absolute right-1/4 bottom-1/3 h-[250px] w-[250px] rounded-full bg-secondary/20 blur-[100px] light-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute left-1/3 bottom-1/4 h-[200px] w-[200px] rounded-full bg-accent/20 blur-[100px] light-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container relative z-10 mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-0">
          {/* Left Content */}
          <motion.div
            className="flex flex-col justify-center text-center lg:text-left"
            style={{ y, opacity }}
          >
            <RevealAnimation delay={0.2}>
              <h1 className="mb-6 text-4xl !leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block text-white">Crafting Digital</span>
                <span className="block bg-gradient-to-r from-[#24b2ff] to-[#9c3dff] bg-clip-text text-transparent">Experiences</span>
              </h1>
            </RevealAnimation>
            
            <RevealAnimation delay={0.4}>
              <p className="mx-auto mb-8 max-w-lg text-lg text-muted-foreground lg:mx-0">
                We build stunning modern websites with cutting-edge technologies.
                Our expertise brings your vision to life with responsive designs and smooth animations.
              </p>
            </RevealAnimation>
            
            <RevealAnimation delay={0.6}>
              <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
                <Button 
                  variant="glow" 
                  size="xl"
                  className="bg-gradient-to-r from-[#24b2ff] to-[#9c3dff] hover:brightness-110"
                >
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </RevealAnimation>
          </motion.div>

          {/* Right Content - Static Image with Glow */}
          <RevealAnimation direction="left" delay={0.8} className="flex items-center justify-center">
            <div className="relative aspect-[4/3] w-full max-w-[600px]">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/30 to-secondary/30 blur-md light-pulse" />
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Digital Experience"
                className="relative h-full w-full rounded-lg object-cover"
              />
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
}