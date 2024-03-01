'use client'

import useClipboard from "react-use-clipboard"
import { useState, type ReactNode, useEffect } from "react"
import { AnimatePresence, Variants, motion } from "framer-motion"
import { LuCopy } from "react-icons/lu";
import { MdOutlineDone } from "react-icons/md";
import data from "@/lib/data";

export default function Code({ children, code }: { children: ReactNode, code: string }) {
    const [isCoppied, setCopied] = useClipboard(code, { successDuration: 1000 })
    return (
        <div className={`${isCoppied && 'bg-green'}  my-2 font-mono relative group`} >
            {children}
            <motion.button onClick={setCopied} className={`absolute top-2 right-2 ${!isCoppied && 'opacity-0'} group-hover:opacity-100  transition`}>
                <AnimatePresence mode="popLayout">
                    {isCoppied ? (
                        <motion.div variants={data.variants.copyVariants} initial='initial' animate='animate' exit='exit' key='done' className="">
                            <MdOutlineDone />
                        </motion.div>
                    ) : (
                        <motion.div variants={data.variants.copyVariants} initial='initial' animate='animate' exit='exit' key='copy' className="">
                            <LuCopy />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    )
}

