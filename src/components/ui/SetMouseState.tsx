"use client";

import { motion } from "framer-motion";
import { ReactNode, useContext, useEffect } from "react";
import { MouseStateContext } from "./providers";

export default function SetMouseState({ children }: { children: ReactNode }) {
  const context = useContext(MouseStateContext);
  useEffect(() => {
    console.log("🚀 ~ SetMouseState ~ context", context);
  }, [context]);
  return (
    <motion.div
      onHoverStart={() => context?.setMouseState("hover")}
      onHoverEnd={() => context?.setMouseState("normal")}
      className="mx-auto w-fit"
    >
      {children}
    </motion.div>
  );
}
