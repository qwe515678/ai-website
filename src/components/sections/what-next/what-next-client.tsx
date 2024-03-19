"use client";
import SetMouseState from "@/components/ui/SetMouseState";
import useWindowSizes from "@/lib/useWindowSizes";
import { motion } from "framer-motion";
import { MutableRefObject, useEffect, useRef, useState } from "react";

interface WhatNextCarouselProps {
  data: {
    title: string;
    description: string;
    links: {
      label: string;
      href: string;
    }[];
  }[];
}


export default function WhatNextCarousel({data}: WhatNextCarouselProps) {
  const containerRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const numberOfSlides = data.length;
  const [containerWidth, setContainerWidth] = useState(0);
  useEffect(() => {
    setContainerWidth(containerRef.current?.offsetWidth || 0);
  });
  const slideWidth = containerWidth * 0.9;
  return (
    <div
      className="relative w-full max-w-full overflow-x-scroll"
      ref={containerRef}
    >
      <div className="absolute bottom-0 right-0 top-0 z-[30] w-5 bg-gradient-to-l from-black to-black/5" />
      <div className="absolute bottom-0 left-0 top-0 z-[30] w-5 bg-gradient-to-r from-black to-black/5" />
      <SetMouseState>
        <motion.ul
          drag="x"
          dragConstraints={containerRef}
          dragElastic={0.2}
          style={{ width: `${numberOfSlides * slideWidth}px` }} // Set the width to be the total width of all slides
          className="z-[20] flex h-full items-stretch justify-center gap-5 px-4"
        >
          {data.map((item, index) => (
            <li
              key={index}
              className="h-auto min-h-[6rem] rounded-xl border border-pink-500 bg-black px-4 py-1"
              style={{ width: slideWidth + "px" }} // Adjusted width calculation
            >
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-sm text-stone-300">{item.description}</p>
              <ul className="flex flex-wrap gap-2 pb-1 pt-3">
                {item.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-nowrap break-keep rounded-full border border-dashed border-green-400 px-2 py-1 text-xs lg:px-4"
                  >
                    <span className="h-1 w-1 rounded-full bg-pink-500" />
                    {link.label}
                  </a>
                ))}
              </ul>
            </li>
          ))}
        </motion.ul>
      </SetMouseState>
    </div>
  );
}
