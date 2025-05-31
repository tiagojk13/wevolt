"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser"; // <-- IMPORTANTE!
import { motion } from "framer-motion";
// ...outros imports

const SERVICE_ID = "service_wdb209l";
const TEMPLATE_ID = "template_nge41va";
const PUBLIC_KEY = "3fDGx3WoIxNvdbgnt";

const formSchema = z.object({/*...*/});
type FormValues = z.infer<typeof formSchema>;

export default function CTASection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<FormValues>({/*...*/});

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

  // ...restante do componente igual
}
