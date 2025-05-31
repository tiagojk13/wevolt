"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// ...outros imports

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

  // ...restante do componente (JSX do formulário)
}
