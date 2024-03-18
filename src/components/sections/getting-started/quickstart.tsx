"use client";

import Code from "./Code";
import { useEffect, useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Iquickstart {
  data: {
    langIcon: JSX.Element;
    stage: string;
    codeInfo: {
      description: string;
      code: string;
      name: string;
      codeHighlighted: JSX.Element;
    }[];
  };
}

export default function Quickstart({ data }: Iquickstart) {
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

      <div className=" w-full border-l-2 pl-4 transition lg:border-none lg:pl-0">
        {data.codeInfo.map(
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
              <div key={i} className="lg:min-h-[80vh] ">
                <Code
                  icon={data.langIcon}
                  obj={obj}
                  i={i}
                  setCurrentNumber={setCurrentNumber}
                  currentNumber={currentNumber}
                  stage={data.stage}
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
        initial={{ y: 200 }} // начальное состояние
        animate={{ y: 0 }} // конечное состояние
        exit={{ y: -200, transition: { duration: 0.2 } }}
        className="w-0"
      >
        {number + 1}
      </motion.div>
    </AnimatePresence>
  );
}
