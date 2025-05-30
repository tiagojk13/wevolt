"use client";

import { motion } from "framer-motion";
import { Zap, Code, Palette, ArrowRight } from "lucide-react";
import RevealAnimation from "@/components/animations/reveal-animation";
import TypewriterAnimation from "@/components/animations/typewriter";
import { Button } from "@/components/ui/button";

export default function ValuePropositionSection() {
  const codeSnippets = [
    "const animate = { opacity: [0, 1], y: [-20, 0] };",
    "<motion.div whileHover={{ scale: 1.05 }} />",
    "useEffect(() => { setLoading(false); }, []);",
    "const { scrollYProgress } = useScroll();",
  ];

  return (
    <section id="values" className="py-20 bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto px-4">
        <RevealAnimation>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 gradient-text">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground">
              We combine technical expertise with creative design to deliver exceptional digital experiences.
              Our approach is focused on quality, innovation, and client satisfaction.
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
              
              <h3 className="mb-4 text-xl font-semibold">Creative Design</h3>
              
              <p className="mb-6 flex-grow text-muted-foreground">
                Our designers create beautiful, intuitive interfaces that engage users and reflect your brand identity.
                We focus on user experience to ensure your website is not just beautiful, but functional.
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
              
              <h3 className="mb-4 text-xl font-semibold">Clean Code</h3>
              
              <div className="mb-6 flex-grow rounded-md bg-card/50 p-4 font-mono text-sm text-muted-foreground">
                <TypewriterAnimation
                  words={codeSnippets}
                  loop
                  typeSpeed={40}
                  deleteSpeed={20}
                  delaySpeed={2000}
                />
              </div>
              
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
              
              <h3 className="mb-4 text-xl font-semibold">Fast Performance</h3>
              
              <p className="mb-6 flex-grow text-muted-foreground">
                We optimize every aspect of your website to ensure lightning-fast load times and smooth performance.
                Speed is crucial for user retention and SEO rankings.
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
            <Button
              variant="glow"
              size="xl"
              className="bg-gradient-to-r from-[#24b2ff] to-[#9c3dff] hover:brightness-110"
            >
              Learn More About Our Approach
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}
