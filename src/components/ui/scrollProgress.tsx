"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export default function App() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-[80] h-[2px] bg-green-500"
      style={{
        scaleX: smoothProgress,
      }}
    />
  );
}
