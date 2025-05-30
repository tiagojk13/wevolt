"use client";

import { motion } from "framer-motion";
import { Zap, Code, Palette, ArrowRight } from "lucide-react";
import RevealAnimation from "@/components/animations/reveal-animation";
import TypewriterAnimation from "@/components/animations/typewriter";
import { Button } from "@/components/ui/button";

export default function ValuePropositionSection() {
  const codeSnippets = [
    "<motion.div whileHover={{ scale: 1.05 }} />",
    "useEffect(() => { setLoading(false); }, []);",
    "const { scrollYProgress } = useScroll();",
  ];

  return (
    <section id="values" className="py-20 bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto px-4">
        <RevealAnimation>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 gradient-text">Porque criar um site conosco</h2>
            <p className="text-lg text-muted-foreground">
              Combinamos expertise técnica com design criativo para proporcionar experiências digitais excepcionais. Nossa abordagem é focada em qualidade, inovação e satisfação do cliente.
            </p>
          </div>
        </RevealAnimation>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <RevealAnimation delay={0.2}>
            <motion.div
              className="flex flex-col rounded-lg border border-border/50 bg-card p-6"
              whileHover={{ y: -10, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.2)" }}
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Palette className="h-8 w-8 text-primary" />
                </motion.div>
              </div>
              <h3 className="mb-4 text-xl font-semibold">Design Criativo</h3>
              <p className="mb-6 flex-grow text-muted-foreground">
                Nossos designers criam interfaces bonitas e intuitivas que envolvem os usuários e refletem a identidade da sua marca. Nosso foco é na experiência do usuário para garantir que seu site não seja apenas bonito, mas também funcional.
              </p>
              <motion.div
                className="mt-auto h-1 w-16 rounded bg-primary"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </RevealAnimation>

          {/* Card 2 - Typewriter */}
          <RevealAnimation delay={0.4}>
            <motion.div
              className="flex flex-col rounded-lg border border-border/50 bg-card p-6"
              whileHover={{ y: -10, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.2)" }}
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Code className="h-8 w-8 text-secondary" />
                </motion.div>
              </div>
              <h3 className="mb-4 text-xl font-semibold">Código Limpo</h3>
              <div className="mb-6 flex-grow rounded-md bg-card/50 p-4 font-mono text-sm text-muted-foreground">
                <TypewriterAnimation
                  words={codeSnippets}
                  loop
                  typeSpeed={40}
                  deleteSpeed={20}
                  delaySpeed={2000}
                />
              </div>
              <p className="mb-6 flex-grow text-muted-foreground">
                Sites e landing pages desenvolvidos com frameworks modernos, para mais velocidade e segurança.
              </p>
              <motion.div
                className="mt-auto h-1 w-16 rounded bg-secondary"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </RevealAnimation>

          {/* Card 3 */}
          <RevealAnimation delay={0.6}>
            <motion.div
              className="flex flex-col rounded-lg border border-border/50 bg-card p-6"
              whileHover={{ y: -10, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.2)" }}
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Zap className="h-8 w-8 text-accent" />
                </motion.div>
              </div>
              <h3 className="mb-4 text-xl font-semibold">Performance Rápida</h3>
              <p className="mb-6 flex-grow text-muted-foreground">
                Otimizamos todos os aspectos do seu site para garantir tempos de carregamento extremamente rápidos e um desempenho impecável. A velocidade é crucial para a retenção de usuários e o posicionamento em SEO.
              </p>
              <motion.div
                className="mt-auto h-1 w-16 rounded bg-accent"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.8}>
          <div className="mt-16 flex justify-center">
            <a href="#contact">
              <Button
                variant="glow"
                size="xl"
                className="bg-gradient-to-r from-[#24b2ff] to-[#9c3dff] hover:brightness-110"
              >
                Saiba mais sobre nossa abordagem
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}
