"use client";

import { useEffect, useState } from "react";

const COLORS = ["#E8A0B5", "#A8C5A0", "#D4839A", "#6B8F71"];

type Bubble = {
  size: number;
  left: number;
  duration: number;
  delay: number;
  color: string;
  opacity: number;
};

function createBubbles(count: number): Bubble[] {
  return Array.from({ length: count }, () => ({
    size: 10 + Math.random() * 26,
    left: Math.random() * 100,
    duration: 8 + Math.random() * 10,
    delay: Math.random() * 10,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    opacity: 0.15 + Math.random() * 0.35,
  }));
}

export default function BubbleBackground({ count = 15 }: { count?: number }) {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    setBubbles(createBubbles(count));
  }, [count]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 overflow-hidden z-[1]"
    >
      {bubbles.map((bubble, index) => (
        <span
          key={index}
          className="absolute bottom-[-40px] rounded-full animate-float-up"
          style={{
            left: `${bubble.left}%`,
            width: bubble.size,
            height: bubble.size,
            backgroundColor: bubble.color,
            opacity: bubble.opacity,
            animationDuration: `${bubble.duration}s`,
            animationDelay: `${bubble.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
