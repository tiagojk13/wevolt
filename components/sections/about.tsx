"use client";

import { Code, Cpu, Globe, Zap } from "lucide-react";
import { motion } from "framer-motion";
import RevealAnimation from "@/components/animations/reveal-animation";
import { ButtonGlow } from "@/components/ui/button-glow";

const features = [
  {
    title: "Modern Design",
    description: "Create stunning interfaces with the latest design trends and techniques.",
    icon: <Code className="h-10 w-10" />,
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    title: "Performance",
    description: "Build lightning-fast websites that load quickly and run smoothly.",
    icon: <Zap className="h-10 w-10" />,
    color: "bg-secondary/10",
    iconColor: "text-secondary",
  },
  {
    title: "Global Reach",
    description: "Reach audiences worldwide with multilingual and accessible websites.",
    icon: <Globe className="h-10 w-10" />,
    color: "bg-accent/10", 
    iconColor: "text-accent",
  },
  {
    title: "Advanced Tech",
    description: "Leverage cutting-edge technologies to create innovative solutions.",
    icon: <Cpu className="h-10 w-10" />,
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
];

export default function AboutSection() {
  return (
    <section id="about\" className="py-20">
      <div className="container mx-auto px-4">
        <RevealAnimation>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 gradient-text">About Our Studio</h2>
            <p className="text-lg text-muted-foreground">
              We're a team of passionate designers and developers creating exceptional digital experiences.
              Our approach combines creative design with technical expertise to deliver websites that stand out.
            </p>
          </div>
        </RevealAnimation>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <RevealAnimation key={feature.title} delay={index * 0.1 + 0.2}>
              <motion.div
                className="flex flex-col items-center rounded-lg border border-border/50 bg-card p-6 text-center"
                whileHover={{ y: -10, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.2)" }}
              >
                <div className={`mb-4 flex h-20 w-20 items-center justify-center rounded-full ${feature.color}`}>
                  <motion.div
                    className={feature.iconColor}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {feature.icon}
                  </motion.div>
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="mb-4 text-muted-foreground">{feature.description}</p>
              </motion.div>
            </RevealAnimation>
          ))}
        </div>

        <RevealAnimation delay={0.5}>
          <div className="mt-16 text-center">
            <ButtonGlow variant="secondary" size="lg">
              Learn More About Us
            </ButtonGlow>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}