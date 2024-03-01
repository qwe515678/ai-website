'use client'
import data from "@/lib/data"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { TracingBeam } from "../ui/tracing-beam"
export default function AiHistory() {
    return (
        <div className="flex flex-col gap-4">
            <h2>История ИИ</h2>
            <TracingBeam>
                <ul className="flex flex-col gap-4">
                    {data["what-is-ai"].events.map((event, i) => {
                        return (
                            <motion.a key={i} href={event.wiki_link} variants={data.variants.eventsVariants} initial='closed' whileInView='open' whileHover='hover' transition={{ duration: 1, type: 'spring' }} className="group relative">
                                <p className="text-green-300 font-bold tracking-wider w-fit xl:group-hover:-translate-x-2 transition delay-75">{event.year}</p>
                                <div className="flex">
                                    <div className="bg-gradient-to-tr from-green-300 to-blue-300 min-w-[2px] rounded pl-1 translate-x-1 opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-y-75 scale-x-0 transition delay-75" />
                                    <p className="pl-1 group-hover:translate-x-2 transition delay-75">{event.event}</p>
                                </div>
                            </motion.a>
                        )
                    })}
                    <Link href='/' className="w-fit mx-auto border px-4 py-1 rounded-full hover:scale-x-105 transition my-1">???</Link>
                </ul>
            </TracingBeam>
        </div >
    )
}
