'use client'

import { ReactNode } from "react"
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { motion } from "framer-motion"

export default function Page({ children }: { children: ReactNode }) {
    return (
        <ReactLenis root>
            <motion.div initial={{ opacity: 0.5, y: 50 }} animate={{ opacity: 1, y: 0 }}>
                {children}
            </motion.div>
        </ReactLenis>
    )
}
