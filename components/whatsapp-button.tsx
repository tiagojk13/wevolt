"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "+5519998085561"; // Replace with your actual WhatsApp number
  const message = "Olá! Gostaria de orçar um projeto.";
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <motion.button
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600"
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      <MessageCircle size={24} />
    </motion.button>
  );
};

export default WhatsAppButton;