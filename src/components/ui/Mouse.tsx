"use client";
import { useContext, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { MouseStateContext } from "./providers";

export default function Mouse() {
  const mouseContext = useContext(MouseStateContext);
  const cursorSize = 20;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };
  const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

  function mouseMove(e: any) {
    mouse.x.set(lerp(mouse.x.get(), e.clientX - cursorSize / 2, 1));
    mouse.y.set(lerp(mouse.y.get(), e.clientY - cursorSize / 2, 1));
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
        scale: mouseContext?.mouseState === "normal" ? 1 : 2,
      }}
      className={`pointer-events-none fixed z-[100]  hidden h-6 w-6 scale-0 items-center justify-center rounded-full text-[.3rem] font-extrabold text-black opacity-0 backdrop-invert transition-transform group-hover/body:scale-100 group-hover/body:opacity-100 md:flex`}
    >
      {mouseContext?.mouseTitle}
    </motion.div>
  );
}
