"use client";
import { useContext, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { MouseStateContext } from "./providers";

export default function Mouse() {
  const mouseState = useContext(MouseStateContext);
  const cursorSize = 20;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  //Smooth out the mouse values
  const smoothMouse = {
    x: useSpring(mouse.x, { stiffness: 1000, damping: 100 }),
    y: useSpring(mouse.y, { stiffness: 1000, damping: 100 }),
  };
  function mouseMove(e: any) {
    mouse.x.set(e.clientX - cursorSize / 2);
    mouse.y.set(e.clientY - cursorSize / 2);
  }
  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  });

  return (
    <motion.div
      style={{
        left: mouse.x,
        top: mouse.y,
        scale: mouseState?.mouseState === "normal" ? 1 : 4,
      }}
      className={`pointer-events-none fixed z-[100] hidden h-6 w-6 scale-0 rounded-full opacity-0 backdrop-invert transition-transform group-hover/body:scale-100 group-hover/body:opacity-100 md:block`}
    />
  );
}
