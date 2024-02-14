'use client'

import { ReactNode } from "react"
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { AnimatePresence, motion } from "framer-motion"

export default function Page({ children }: { children: ReactNode }) {
    return (
        //<ReactLenis root>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.1 }}>
                {children}
            </motion.div>
        //</ReactLenis>
    )
}
