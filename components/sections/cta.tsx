"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import RevealAnimation from "@/components/animations/reveal-animation";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Send } from "lucide-react";

const SERVICE_ID = "service_wdb209l";
const TEMPLATE_ID = "template_nge41va";
const PUBLIC_KEY = "3fDGx3WoIxNvdbgnt";

const formSchema = z.object({
  name: z.string().min(2, "O campo de nome precisa ter ao menos 2 caracteres"),
  email: z.string().email("Por favor, insira um e-mail válido"),
  phone: z.string().min(6, "Por favor, insira um número de telefone válido"),
  message: z.string().min(10, "O campo de mensagem precisa ter ao menos 10 caracteres"),
});
type FormValues = z.infer<typeof formSchema>;

export default function CTASection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
        },
        PUBLIC_KEY
      );
      toast.success("Mensagem enviada com sucesso! Entraremos em contato com você em breve.");
      form.reset();
    } catch (error) {
      toast.error("Erro ao enviar mensagem. Tente novamente.");
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background light effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/4 bottom-1/4 h-[250px] w-[250px] rounded-full bg-primary/10 blur-[100px] light-pulse" />
        <div className="absolute right-1/4 top-1/3 h-[200px] w-[200px] rounded-full bg-secondary/10 blur-[100px] light-pulse" style={{ animationDelay: "1s" }} />
      </div>
      <div className="container relative z-10 mx-auto px-4">
        <RevealAnimation>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-white">Entre em contato</h2>
            <p className="text-lg text-muted-foreground">
              Pronto para começar seu próximo projeto? Entre em contato conosco hoje mesmo e vamos discutir como podemos dar vida à sua visão.
            </p>
          </div>
        </RevealAnimation>
        <div className="mx-auto max-w-3xl">
          <RevealAnimation delay={0.2}>
            <motion.div
              className="rounded-lg border border-border/50 bg-card p-8"
              whileHover={{ boxShadow: "0 10px 30px -10px rgba(0,0,0,0.2)" }}
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome</FormLabel>
                          <FormControl>
                            <Input placeholder="Seu nome" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>E-mail</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Seu e-mail" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefone / WhatsApp</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex. 11 9 9999-0000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensagem</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Conte-nos sobre o seu projeto" 
                            className="min-h-32" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="text-center">
                    <Button
                      type="submit"
                      variant="glow"
                      size="xl"
                      className="w-full sm:w-auto bg-gradient-to-r from-[#24b2ff] to-[#9c3dff] hover:brightness-110"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Enviando...</>
                      ) : (
                        <>Envie sua mensagem <Send className="ml-2 h-5 w-5" /></>
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </motion.div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
}
