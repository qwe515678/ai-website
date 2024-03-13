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
  const smoothOptions = { damping: 4, stiffness: 1, mass: 1 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
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
        scale: mouseState?.mouseState === "normal" ? 1 : 3,
      }}
      transition={{ type: "spring", duration: 0.3 }}
      className={`pointer-events-none fixed z-[80] h-5 w-5 scale-0 rounded-full bg-white opacity-0 transition group-hover/body:scale-100 group-hover/body:opacity-100 ${window.innerWidth < 768 && "hidden"}`}
    ></motion.div>
  );
}
