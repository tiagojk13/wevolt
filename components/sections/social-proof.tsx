"use client";

import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import RevealAnimation from "@/components/animations/reveal-animation";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Tiago Kikumoto",
    title: "Analista de Marketing",
    content: "Eu precisava de uma prova de conceito rápida para um projeto, sem utilizar os CMSs tradicionais que são muito engessados. Em poucos dias tive esse protótipo pronto",
    rating: 5,
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Marketing Director, GrowthLabs",
    content: "The team at CodeStudio understood our vision from day one. They created a website that perfectly represents our brand and has received amazing feedback from our customers.",
    rating: 5,
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    title: "Founder, EcoShop",
    content: "I was impressed by the attention to detail and creativity that CodeStudio brought to our project. They delivered on time and were a pleasure to work with throughout the process.",
    rating: 5,
    image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export default function SocialProofSection() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <RevealAnimation>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 gradient-text">O que dizem nossos clientes</h2>
            <p className="text-lg text-muted-foreground">
              Veja o que nossos clientes têm a dizer sobre trabalhar conosco. Temos orgulho de ter ajudado pessoas e empresas a atingir seus objetivos.
            </p>
          </div>
        </RevealAnimation>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <RevealAnimation key={testimonial.id} delay={index * 0.2}>
              <motion.div
                className="flex h-full flex-col rounded-lg border border-border/50 bg-card p-6"
                whileHover={{ y: -10, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.2)" }}
              >
                <div className="mb-4 flex">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="mb-6 flex-grow italic text-muted-foreground">"{testimonial.content}"</p>
                
                <div className="mt-auto">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </motion.div>
            </RevealAnimation>
          ))}
        </div>

        <RevealAnimation delay={0.6}>
          <div className="mt-16 flex justify-center">
           <a href="#contact">
            <Button
              variant="glow"
              size="xl"
              className="bg-gradient-to-r from-[#24b2ff] to-[#9c3dff] hover:brightness-110"
            >
              Desenvolva o seu projeto com sucesso
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
           </a>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}
