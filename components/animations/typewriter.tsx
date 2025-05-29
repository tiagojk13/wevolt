"use client";

import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

interface TypewriterAnimationProps {
  words: string[];
  loop?: boolean;
  typeSpeed?: number;
  deleteSpeed?: number;
  delaySpeed?: number;
  className?: string;
}

export default function TypewriterAnimation({
  words,
  loop = true,
  typeSpeed = 80,
  deleteSpeed = 50,
  delaySpeed = 1500,
  className = "",
}: TypewriterAnimationProps) {
  const [text] = useTypewriter({
    words,
    loop,
    typeSpeed,
    deleteSpeed,
    delaySpeed,
  });

  return (
    <div className={className}>
      <span>{text}</span>
      <Cursor cursorStyle="|" cursorColor="hsl(var(--primary))" />
    </div>
  );
}