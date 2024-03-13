"use client";
import data from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { TracingBeam } from "../ui/tracing-beam";
import { Button } from "../ui/Button";
export default function AiHistory() {
  const [isPrelonged, setIsPrelonged] = useState(false);
  return (
    <div className="flex flex-col gap-4">
      <h2>История ИИ</h2>
      <motion.div
        initial={{ height: 200 }}
        animate={{ height: isPrelonged ? "fit-content" : 200 }}
        className="relative overflow-hidden"
      >
        <TracingBeam>
          <ul className="flex flex-col gap-4">
            {data["what-is-ai"].events.map((event, i) => {
              return (
                <motion.a
                  key={i}
                  href={event.wiki_link}
                  variants={data.variants.eventsVariants}
                  initial="closed"
                  whileInView="open"
                  whileHover="hover"
                  transition={{ duration: 1, type: "spring" }}
                  className="group relative"
                >
                  <p className="w-fit font-bold tracking-wider text-green-300 transition delay-75 xl:group-hover:-translate-x-2">
                    {event.year}
                  </p>
                  <div className="flex">
                    <div className="min-w-[2px] translate-x-1 scale-x-0 scale-y-75 rounded bg-gradient-to-tr from-green-300 to-blue-300 pl-1 opacity-0 transition delay-75 group-hover:scale-100 group-hover:opacity-100" />
                    <p className="pl-1 transition delay-75 group-hover:translate-x-2">
                      {event.event}
                    </p>
                  </div>
                </motion.a>
              );
            })}
            <Link
              href="/"
              className="mx-auto my-1 w-fit rounded-full border px-4 py-1 transition hover:scale-x-105"
            >
              ???
            </Link>
          </ul>
        </TracingBeam>
        <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-black/0 h-4 ${isPrelonged&&'hidden'}`}></div>
      </motion.div>
      <Button
        className={`mx-auto w-fit rounded-xl border px-4 py-1 ${isPrelonged && "hidden"}`}
        onClick={() => setIsPrelonged(!isPrelonged)}
      >
        дальше
      </Button>
    </div>
  );
}
