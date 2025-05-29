"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type Direction = "up" | "down" | "left" | "right";

interface RevealAnimationProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
}

const directionVariants = {
  up: {
    hidden: { y: 75, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  down: {
    hidden: { y: -75, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  left: {
    hidden: { x: 75, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  right: {
    hidden: { x: -75, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
};

export default function RevealAnimation({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  className = "",
}: RevealAnimationProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={directionVariants[direction]}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}