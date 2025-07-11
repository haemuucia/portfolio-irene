"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

interface TiltedCardProps {
  children: React.ReactNode;
  className?: string;
  scaleOnHover?: number;
  perspective?: number;
  imageSrc?: string;
}

export default function TiltedCard({
  children,
  className = "",
  scaleOnHover = 1.05,
  perspective = 1000,
}: TiltedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;

    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const newRotateX = ((y - height / 2) / height) * 30;
    const newRotateY = ((x - width / 2) / width) * -30;

    rotateX.set(newRotateX);
    rotateY.set(newRotateY);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: scaleOnHover }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
