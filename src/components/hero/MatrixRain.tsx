"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MatrixRainingLetters } from "react-mdr";

export default function MatrixRain() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div ref={ref} className="absolute inset-0 opacity-40 ">
      <MatrixRainingLetters
        custom_class={`m-0 p-0 z-1 ${!isInView && "hidden"}`}
      />
      <div className="absolute inset-0 z-[2] opacity-70" />
    </div>
  );
}
