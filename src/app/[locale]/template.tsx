"use client";

import { ReactNode, useContext } from "react";
import { motion } from "framer-motion";
import { BgBlurContext } from "@/components/ui/providers";

export default function Page({ children }: { children: ReactNode }) {
  const bgBlurContext = useContext(BgBlurContext);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: bgBlurContext?.bgBlur ? 0.5 : 1,
        filter: bgBlurContext?.bgBlur ? "blur(5px) brightness(0.5)" : "blur(0px) brightness(1)",
      }}
      transition={{ duration: 1, delay: 0.1 }}
      className=""
    >
      {children}
    </motion.div>
  );
}
