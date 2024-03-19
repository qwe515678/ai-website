"use client";

import { variants } from "@/lib/data";
import { motion } from "framer-motion";

type IListItem = {
  year: string;
  event: string;
  wiki_link: string;
};
export default function ListItem({ year, event, wiki_link }: IListItem) {
  return (
    <div>
      {
        <motion.a
          key={event}
          href={wiki_link}
          variants={variants.eventsVariants}
          initial="closed"
          whileInView="open"
          whileHover="hover"
          transition={{ duration: 1, type: "spring" }}
          className="group relative"
        >
          <p className="w-fit font-bold tracking-wider text-green-300 transition delay-75 xl:group-hover:-translate-x-2">
            {year}
          </p>
          <div className="flex">
            <div className="min-w-[2px] translate-x-1 scale-x-0 scale-y-75 rounded bg-gradient-to-tr from-pink-600 to-pink-400 pl-1 opacity-0 transition delay-75 group-hover:scale-100 group-hover:opacity-100" />
            <p className="pl-1 transition delay-75 group-hover:translate-x-2">
              {event}
            </p>
          </div>
        </motion.a>
      }
    </div>
  );
}
