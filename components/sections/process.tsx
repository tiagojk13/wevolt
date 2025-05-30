"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Lightbulb, Code, PenTool, Rocket, ArrowRight } from "lucide-react";
import RevealAnimation from "@/components/animations/reveal-animation";
import { Button } from "@/components/ui/button";

const processSteps = [
  {
    id: 1,
    title: "Discovery",
    description: "Aprendemos sobre sua empresa, eus objetivos, público e requisitos para planejar a solução ideal.",
    icon: <Lightbulb className="h-8 w-8" />,
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    id: 2,
    title: "Design",
    description: "Criamos wireframes que se alinham com sua marca e seus objetivos. Também podemos trabalhar no conteúdo",
    icon: <PenTool className="h-8 w-8" />,
    color: "bg-secondary/10",
    iconColor: "text-secondary",
  },
  {
    id: 3,
    title: "Desenvolvimento",
    description: "Damos vida aos designs com código limpo, eficiente e moderno.",
    icon: <Code className="h-8 w-8" />,
    color: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    id: 4,
    title: "Deploy",
    description: "Lançamos seu projeto em plataformas open source que podem ter custo 0. Além disso, podemos fornecer suporte e manutenção contínuos, conforme necessário.",
    icon: <Rocket className="h-8 w-8" />,
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section id="process" className="py-20">
      <div className="container mx-auto px-4">
        <RevealAnimation>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-white">Nosso processo</h2>
            <p className="text-lg text-muted-foreground">
              Seguimos uma abordagem estruturada para garantir que cada projeto seja entregue com a mais alta qualidade. Nosso processo é projetado para ser rápido, colaborativo e eficiente.
            </p>
          </div>
        </RevealAnimation>

        {/* Desktop Timeline */}
        <div className="relative mx-auto hidden max-w-4xl md:block">
          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-border" />
          
          {processSteps.map((step, index) => (
            <RevealAnimation key={step.id} delay={index * 0.2}>
              <div className={`relative mb-16 flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <motion.div
                  className="relative w-[calc(50%-30px)] rounded-lg border border-border/50 bg-card p-6"
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.2)" }}
                  onHoverStart={() => setActiveStep(step.id)}
                  onHoverEnd={() => setActiveStep(null)}
                >
                  <div className={`absolute ${index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'} top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-4 border-background ${step.color}`}>
                    <motion.div 
                      className={step.iconColor}
                      animate={{ 
                        rotate: activeStep === step.id ? 360 : 0,
                        scale: activeStep === step.id ? 1.2 : 1,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {step.icon}
                    </motion.div>
                  </div>
                  
                  <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              </div>
            </RevealAnimation>
          ))}
        </div>

        {/* Mobile Timeline */}
        <div className="relative mx-auto md:hidden">
          <div className="absolute left-6 top-0 h-full w-1 bg-border" />
          
          {processSteps.map((step, index) => (
            <RevealAnimation key={step.id} delay={index * 0.2}>
              <div className="relative mb-8 pl-16">
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border-4 border-background bg-card">
                  <motion.div 
                    className={step.iconColor}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    {step.icon}
                  </motion.div>
                </div>
                
                <motion.div
                  className="rounded-lg border border-border/50 bg-card p-6"
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.2)" }}
                >
                  <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              </div>
            </RevealAnimation>
          ))}
        </div>

        <RevealAnimation delay={0.8}>
          <div className="mt-16 flex justify-center">
            <Button
              variant="glow"
              size="xl"
              className="bg-gradient-to-r from-[#24b2ff] to-[#9c3dff] hover:brightness-110"
            >
              Crei seu site com velocidade
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}
