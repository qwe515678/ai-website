"use client";
import { Variants, motion, useInView } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";

type Sizes = {
  rows: number;
  columns: number;
};

const config = {
  rowHeight: 30,
  columnWidth: 45,
}

export default function RunningLetters() {
  let [sizes, setSizes] = useState<Sizes>({ rows: 50, columns: 50 });

  useEffect(() => {
    setSizes({
      rows: Math.floor(window.innerHeight / config.rowHeight),
      columns: Math.floor(window.innerWidth / config.columnWidth),
    });
  }, []);

  return (
    <div
      className={sizes.columns === 50 && sizes.rows === 50 ? "text-black" : ""}
    >
      <div className="flex h-[100dvh] overflow-hidden rounded px-3">
        {Array(sizes.columns)
          .fill(0)
          .map((_, i) => {
            return <Column key={i} sizes={sizes} />;
          })}
      </div>
    </div>
  );
}

function Column({ sizes }: { sizes: Sizes }) {
  const [activeRow, setActiveRow] = useState(-1);
  const intervalDuration = Math.random() * 50 + 1;
  const ref = useRef(null!);
  const isInView = useInView(ref);
  const [chars, setChars] = useState(
    new Array(sizes.rows).fill("").map((_, index) => getChar()),
  );

  useEffect(() => {
    const timerId = setInterval(() => {
      if (!isInView) return;
      setActiveRow((prev) => (prev + 1) % sizes.rows);
    }, intervalDuration);

    return () => clearInterval(timerId);
  }, [sizes.rows, intervalDuration, isInView]);

  useEffect(() => {
    // Update the character for the active row
    setChars((oldChars) => {
      const newChars = [...oldChars];
      newChars[activeRow] = getChar();
      return newChars;
    });
  }, [activeRow]);

  return (
    <div
      ref={ref}
      className=" flex w-full flex-col justify-start overflow-scroll"
    >
      {chars.map((char, j) => {
        return (
          <Char key={j} char={char} highlighted={j === activeRow} num={j} />
        );
      })}
    </div>
  );
}

function getChar(): string {
  const characters: string[] = [
    "一",
    "二",
    "三",
    "四",
    "五",
    "六",
    "七",
    "八",
    "九",
    "十",
    "百",
    "千",
    "万",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    "1",
    "2",
    "4",
    "7",
    "9",
  ];

  return characters[Math.floor(Math.random() * characters.length)];
}

interface CharProps {
  highlighted: boolean;
  char: string;
  num: number;
}

function Char({ char, highlighted, num }: CharProps) {
  return (
    <div className="relative inline-block mx-auto">
      <motion.span
        variants={charVariants}
        animate={highlighted ? "bright" : "usual"}
        className={` min-h-5 select-none text-center text-xs transition-colors`}
        suppressHydrationWarning
        draggable={false}
      >
        {char}
      </motion.span>
    </div>
  );
}

const charVariants: Variants = {
  bright: {
    color: "#bfffd0",
    shadow: "0px 0px 100px 19px rgba(255, 255, 255, 0.04)",
  },
  usual: {
    color: "#00240a",
  },
};

;