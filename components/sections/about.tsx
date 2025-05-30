"use client";

import { Code, Cpu, Globe, Zap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import RevealAnimation from "@/components/animations/reveal-animation";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Design Moderno",
    description: "Criação de interfaces impressionantes com as últimas tendências, técnicas de design e com a utilização de IA.",
    icon: <Code className="h-10 w-10" />,
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    title: "Desenvolvimento Rápido",
    description: "Sites entregues a partir de 5 dias, focados na retensão e conversão de usuário, com um visual moderno e de alta performance.",
    icon: <Zap className="h-10 w-10" />,
    color: "bg-secondary/10",
    iconColor: "text-secondary",
  },
  {
    title: "Site Estático",
    description: "Páginas criadas com foco em velocidade, segurança e simplicidade. Não depende de banco de dados ou sistemas complexos.",
    icon: <Globe className="h-10 w-10" />,
    color: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    title: "Tecnologia Avançada",
    description: "Utilização de frameworks modernos para o desenvolvimento e plataformas open source para hospedagem.",
    icon: <Cpu className="h-10 w-10" />,
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <RevealAnimation>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-white">Sobre nós</h2>
            <p className="text-lg text-muted-foreground">
              Somos especialistas na criação de sites e landing pages estáticas, desenvolvidos com agilidade e qualidade. Entregamos páginas modernas, bem estruturadas e prontas para converter, tudo em tempo recorde e com visual profissional.
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
          <div className="mt-16 flex justify-center">
            <Button
              variant="glow"
              size="xl"
              className="bg-gradient-to-r from-[#24b2ff] to-[#9c3dff] hover:brightness-110"
            >
              Saiba mais sobre nós
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}
