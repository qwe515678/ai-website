"use client";

import useClipboard from "react-use-clipboard";
import { type ReactNode, Dispatch, SetStateAction } from "react";
import { AnimatePresence, motion,  } from "framer-motion";
import { LuCopy } from "react-icons/lu";
import { MdOutlineDone } from "react-icons/md";
import { variants } from "@/lib/data";

import { FaSquareFull } from "react-icons/fa6";
import Link from "next/link";
import SetMouseState from "@/components/ui/SetMouseState";
type CodeProps = {
  children: ReactNode;
  icon: ReactNode;
  obj: { code: string; name: string; description: string };
  i: number;
  currentNumber: number;
  setCurrentNumber: Dispatch<SetStateAction<number>>;
  stage: string;
};
export default function Code({
  children,
  icon,
  obj,
  i,
  setCurrentNumber,
  currentNumber,
  stage,
}: CodeProps) {
  const [isCoppied, setCopied] = useClipboard(obj.code, {
    successDuration: 1000,
  });

  return (
    <motion.div
      onViewportEnter={() => setCurrentNumber(i)}
      className="relative lg:min-h-screen "
    >
      <div className="flex items-center gap-2 py-5  ">
        <FaSquareFull
          className={`w-2 ${currentNumber === i ? "rounded-full text-green-600" : "text-pink-600"} hidden transition lg:block`}
        />
        <Link
          href={`#${i + 1}`}
          id={String(i + 1)}
          className="-translate-x-2 text-start text-2xl lg:translate-x-0"
        >
          {stage}: 00{i + 1}
        </Link>
      </div>
      <div className="break-words">{obj.description}</div>
      <div className="group relative  my-10 flex-col  rounded border px-3 py-1 font-mono">
        <div className="absolute -right-16 top-0 hidden items-center justify-center gap-2 xl:flex ">
          <FaSquareFull
            className={`w-2 ${currentNumber === i ? "rounded-full text-green-600" : "text-pink-600"} transition`}
          />
          <span>00{i + 1}</span>
        </div>

        <div className="flex items-center justify-between border-b border-dashed text-white/80">
          <span className="flex items-center justify-center gap-2 ">
            {icon}
            <span>{obj.name}</span>
          </span>
          <span>
            <SetMouseState>
              <motion.button
                onClick={setCopied}
                className={` ${!isCoppied && "lg:opacity-0"} scale-100 text-xl transition hover:scale-95 group-hover:opacity-100`}
              >
                <AnimatePresence mode="popLayout">
                  {isCoppied ? (
                    <motion.div
                      variants={variants.copyVariants}
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
                      variants={variants.copyVariants}
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
            </SetMouseState>
          </span>
        </div>
        <div className={` group relative my-2 `}>
          <div className="code-scroll max-w-xl flex-col overflow-x-scroll text-nowrap md:px-3 md:py-1">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
} 
