'use client'

import useClipboard from "react-use-clipboard"
import { type ReactNode, useEffect, useRef, Dispatch, SetStateAction } from "react"
import { AnimatePresence,  motion, useInView } from "framer-motion"
import { LuCopy } from "react-icons/lu";
import { MdOutlineDone } from "react-icons/md";
import data from "@/lib/data";
import { FaSquareFull } from "react-icons/fa6";
type CodeProps = {
    children: ReactNode,
    icon: ReactNode,
    obj: { code: string, name: string, description: string },
    i: number,
    currentNumber: number,
    setCurrentNumber: Dispatch<SetStateAction<number>>

}
export default function Code({ children, icon, obj, i, setCurrentNumber, currentNumber }: CodeProps) {
    const [isCoppied, setCopied] = useClipboard(obj.code, { successDuration: 1000 })
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 0.7 })
    useEffect(() => {
        setCurrentNumber(i)
    }, [isInView])
    return (
        <motion.div ref={ref} className="relative lg:min-h-screen ">
            <div className="xl:hidden py-5 items-center gap-2 flex ">
                    <FaSquareFull className={`w-2 ${currentNumber === i ? 'text-green-600 rounded-full' : 'text-red-600'} transition`} />
                    <span className="text-2xl text-start">Этап: 00{i + 1}</span>
                </div>
            <div className="">{obj.description}</div>
            <div className="border rounded  px-3 py-1  flex-col font-mono my-10 group relative">

                <div className="absolute top-0 -right-16 xl:flex justify-center items-center gap-2 hidden ">
                    <FaSquareFull className={`w-2 ${currentNumber === i ? 'text-green-600 rounded-full' : 'text-red-600'} transition`} />
                    <span>00{i + 1}</span>
                </div>

                <div className="border-b border-dashed flex justify-between items-center text-white/80">
                    <span className="flex justify-center items-center gap-2 ">{icon}<span>{obj.name}</span></span>
                    <span>
                        <motion.button onClick={setCopied} className={` ${!isCoppied && 'lg:opacity-0'} group-hover:opacity-100 transition text-xl hover:scale-95 scale-100`}>
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
                    </span>
                </div>
                <div className={` my-2 relative group `} >
                    <div className="md:px-3 md:py-1 flex-col overflow-x-scroll">{children}</div>
                </div>
            </div>
        </motion.div>
    )
}

