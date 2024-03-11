"use client";
import MatrixRain from "./running-letters";
import { MdArrowDownward } from "react-icons/md";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useRef } from "react";

export default function Hero({}) {
  const container: any = useRef(null!);
  const { scrollY } = useScroll(container);
  const y = useTransform(scrollY, [0, 200], [0, 50]);
  return (
    <div
      ref={container}
      id="hero"
      className="absolute left-0 right-0 top-0 h-[100dvh] overflow-hidden"
    >
      <div className="relative h-[100dvh] w-full">
        <div className="absolute bottom-0 left-0 right-0 top-0 z-50"></div>
        <MatrixRain />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <motion.h1
            style={{ y: y }}
            className="text-center text-4xl font-bold text-white  sm:text-6xl  md:text-6xl xl:text-8xl "
          >
            <p className="bg-gradient-to-t from-stone-300 to-stone-50 bg-clip-text">
              Не можешь победить ИИ - возглавь
            </p>
            <MdArrowDownward className="mx-auto pt-6 text-6xl" />
          </motion.h1>
        </div>
      </div>
    </div>
  );
}
