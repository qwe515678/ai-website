"use client";
import H2 from "@/components/ui/H2";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";

export default function HowDoesItWorkClient({
  data,
  h2,
}: {
  data: {
    name: string;
    description: string;
  }[];
  h2: string;
}) {
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
      <H2 href="#how-works">{h2}</H2>
      <div className="sticky top-[25dvh] ">
        <div className="relative flex flex-col-reverse items-center justify-center gap-20 pb-20 xs:pb-4 lg:flex-row">
          <ul className="lg:min-w-1/2 relative flex w-full max-w-xl items-center justify-center">
            <AnimatePresence>
              {data.map((layer, i) => (
                <motion.li
                  key={`${layer.name}-${i}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: i === currentCard ? 1 : 0, y: i === currentCard ? 0 : 10 }}
                  exit={{ opacity: 0, y: 10, transition: { duration: 0.5 } }}
                  className={`flex-0 absolute my-auto flex w-full flex-col items-start justify-center gap-3 rounded-xl transition-colors md:text-justify lg:p-5`}
                >
                  <p className="text-xl font-bold text-pink-500">
                    {layer.name}
                  </p>
                  <p className="break-all">{layer.description}</p>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
          <div className="relative hidden xs:block">
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
          <div className="relative xs:hidden">
            <Image
              src="/howDoesItWork/ai-scheme.svg"
              alt="Neural network visualisation"
              width={1000}
              height={500}
              className="py-1"
            />
            <motion.div
              className="absolute -bottom-2 -top-2 w-[15vw]  border-y-2 border-pink-600"
              animate={{
                translateX:
                  currentCard === 0
                    ? "0vw"
                    : currentCard === 1
                      ? "39vw"
                      : currentCard === 2
                        ? "80vw"
                        : "0vw",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
