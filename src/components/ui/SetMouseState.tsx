"use client";

import { motion } from "framer-motion";
import { ReactNode, useContext } from "react";
import { MouseStateContext } from "./providers";

export default function SetMouseState({
  children,
  title,
}: {
  children: ReactNode;
  title?: string | ReactNode;
}) {
  const context = useContext(MouseStateContext);
  return (
    <motion.div
      onHoverStart={() => {
        context?.setMouseState("hover");
        context?.setMouseTitle(title);
      }}
      onHoverEnd={() => {
        context?.setMouseState("normal");
        context?.setMouseTitle("");
      }}
      className="mx-auto w-fit"
    >
      {children}
    </motion.div>
  );
}
