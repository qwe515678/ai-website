"use client";

import useClipboard from "react-use-clipboard";
import {
  type ReactNode,
  useEffect,
  useRef,
  Dispatch,
  SetStateAction,
} from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { LuCopy } from "react-icons/lu";
import { MdOutlineDone } from "react-icons/md";
import data from "@/lib/data";
import { FaSquareFull } from "react-icons/fa6";
type CodeProps = {
  children: ReactNode;
  icon: ReactNode;
  obj: { code: string; name: string; description: string };
  i: number;
  currentNumber: number;
  setCurrentNumber: Dispatch<SetStateAction<number>>;
};
export default function Code({
  children,
  icon,
  obj,
  i,
  setCurrentNumber,
  currentNumber, 
}: CodeProps) {
  const [isCoppied, setCopied] = useClipboard(obj.code, {
    successDuration: 1000,
  });
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.7 });
  useEffect(() => {
    setCurrentNumber(i);
  }, [isInView, i]);
  return (
    <motion.div ref={ref} className="relative lg:min-h-screen ">
      <div className="flex items-center gap-2 py-5 xl:hidden ">
        <FaSquareFull
          className={`w-2 ${currentNumber === i ? "rounded-full text-green-600" : "text-red-600"} transition`}
        />
        <span className="text-start text-2xl">Этап: 00{i + 1}</span>
      </div>
      <div className="">{obj.description}</div>
      <div className="group relative  my-10 flex-col  rounded border px-3 py-1 font-mono">
        <div className="absolute -right-16 top-0 hidden items-center justify-center gap-2 xl:flex ">
          <FaSquareFull
            className={`w-2 ${currentNumber === i ? "rounded-full text-green-600" : "text-red-600"} transition`}
          />
          <span>00{i + 1}</span>
        </div>

        <div className="flex items-center justify-between border-b border-dashed text-white/80">
          <span className="flex items-center justify-center gap-2 ">
            {icon}
            <span>{obj.name}</span>
          </span>
          <span>
            <motion.button
              onClick={setCopied}
              className={` ${!isCoppied && "lg:opacity-0"} scale-100 text-xl transition hover:scale-95 group-hover:opacity-100`}
            >
              <AnimatePresence mode="popLayout">
                {isCoppied ? (
                  <motion.div
                    variants={data.variants.copyVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    key="done"
                    className=""
                  >
                    <MdOutlineDone />
                  </motion.div>
                ) : (
                  <motion.div
                    variants={data.variants.copyVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    key="copy"
                    className=""
                  >
                    <LuCopy />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </span>
        </div>
        <div className={` group relative my-2 `}>
          <div className="flex-col overflow-x-scroll md:px-3 md:py-1">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
