"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import RevealAnimation from "@/components/animations/reveal-animation";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(6, "Please enter a valid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
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
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast.success("Message sent successfully! We'll get back to you soon.");
    form.reset();
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
            <h2 className="mb-4 gradient-text">Entre em contato</h2>
            <p className="text-lg text-muted-foreground">
              Ready to start your next project? Contact us today and let's discuss how we can bring your vision to life.
              We're excited to hear from you and help you achieve your digital goals.
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
