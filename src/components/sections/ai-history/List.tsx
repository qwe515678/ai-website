"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { TracingBeam } from "../../ui/tracing-beam";
import { Button } from "../../ui/Button";
import { variants } from "@/lib/data";

export default function List({ children }: { children: ReactNode }) {
  const [isPrelonged, setIsPrelonged] = useState(false);
  return (
    <>
      <motion.div
        initial={{ height: 200 }}
        animate={{ height: isPrelonged ? "fit-content" : 200 }}
        className="relative overflow-hidden"
      >
        <TracingBeam>
          <ul className="flex flex-col gap-4">
            {children}
            <Button className="mx-auto my-1 w-fit rounded-full border px-4 py-1 transition hover:scale-x-105">
              ???
            </Button>
          </ul>
        </TracingBeam>
        <div
          className={`absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-black to-black/0 ${isPrelonged && "hidden"}`}
        />
      </motion.div>
      <Button
        className={`mx-auto w-fit rounded-xl border px-4 py-1 ${isPrelonged && "hidden"}`}
        onClick={() => setIsPrelonged(!isPrelonged)}
      >
        дальше
      </Button>
    </>
  );
}
