"use client";

import data from "@/lib/data";
import Code from "./Code";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Iquickstart {}

export default function Quickstart({}: Iquickstart) {
  const [currentNumber, setCurrentNumber] = useState(0);
  useEffect(() => {
    setCurrentNumber(0);
  }, []); // this is because of bug in useInView that sets currentNumber to 7
  return (
    <div className="flex ">
      <div className=" hidden min-w-[460px] text-[16rem] leading-[13rem] lg:block">
        <span className="sticky top-20 flex overflow-hidden">
          0<Number number={currentNumber} />
        </span>
      </div>

      <div className=" w-full transition">
        {data["getting-started"].snippets.codeInfo.map(
          (
            obj: {
              code: string;
              name: string;
              codeHighlighted: JSX.Element;
              description: string;
            },
            i,
          ) => {
            return (
              <div key={i} className="min-h-[80vh] ">
                <Code
                  icon={data["getting-started"].snippets.langIcon}
                  obj={obj}
                  i={i}
                  setCurrentNumber={setCurrentNumber}
                  currentNumber={currentNumber}
                >
                  {obj.codeHighlighted}
                </Code>
              </div>
            );
          },
        )}
      </div>
    </div>
  );
}

function Number({ number }: { number: number }) {
  return (
    <AnimatePresence>
      <motion.div
        key={number}
        initial={{ opacity: 0, y: 200 }} // начальное состояние
        animate={{ opacity: 1, y: 0 }} // конечное состояние
        exit={{ opacity: 0, y: -200 }} // анимация выхода
        className="w-0"
      >
        {number + 1}
      </motion.div>
    </AnimatePresence>
  );
}
