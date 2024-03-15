"use client";
import { Button } from "@/components/ui/Button";
import data from "@/lib/data";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function HowDoesItWork() {
  function GetCurrentCardIndex(frac: number, all: number) {
    return Number(((all - 1) * frac).toFixed(0));
  }

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const [maskOffsetConfig, setMaskConfig] = useState<{ [key: string]: string }>(
    {
      "0": "-30%",
      "1": "50%",
      "2": "130%",
    },
  );
  useEffect(() => {
    const width = window.innerWidth;
    if (width < 386) {
      setMaskConfig({
        "0": "-120%",
        "1": "50%",
        "2": "220%",
      });
    }
  }, []);
  const [currentCard, setCurrentCard] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    setCurrentCard(GetCurrentCardIndex(current, 3));
  });
  return (
    <div
      ref={ref}
      className=" "
      id="how-does-it-work"
      style={{ height: "400dvh" }}
    >
      <h2>Как работает ИИ</h2>
      <div className="sticky top-[25dvh] ">
        <div className="relative flex  flex-col-reverse items-center justify-center gap-32 pb-4 lg:flex-row">
          
          <ul className="lg:min-w-1/2 relative flex w-full max-w-xl items-center justify-center">
            <AnimatePresence>
              {data["how-it-works"].layers.map((layer, i) => {
                if (i === currentCard) {
                  return (
                    <motion.li
                      exit={{ opacity: 0, y: 10 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      key={layer.name}
                      className={`flex-0 gap-5  absolute my-auto flex-col flex w-full items-start justify-center rounded-xl transition-colors md:text-justify lg:p-5`}
                    >
                      <p className="text-xl text-green-300">{layer.name}</p>
                      <p>{layer.description}</p>
                    </motion.li>
                  );
                }
              })}
            </AnimatePresence>
          </ul>
          <div className="relative">
            <motion.div
              animate={{
                maskImage: 'url("/howDoesItWork/mask.svg")',
                maskRepeat: "no-repeat",
                maskPosition: `${maskOffsetConfig[String(currentCard)]} 0px`,
              }}
            >
              <Image
                src="/howDoesItWork/ai-scheme.svg"
                alt="Neural network visualisation"
                className="mx-auto max-h-[40dvh] w-fit flex-1"
                width={1000}
                height={500}
              />
            </motion.div>
            <Image
              src="/howDoesItWork/ai-scheme.svg"
              alt="Neural network visualisation"
              className="absolute left-0 top-0 max-h-[40dvh] w-fit opacity-10 duration-300 "
              width={1000}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
