'use client'
import MatrixRain from './running-letters'
import { MdArrowDownward } from "react-icons/md";
import { useScroll, useTransform, motion, useViewportScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';

export default function Hero({ }) {
    const container: any = useRef(null!);
    const { scrollY } = useScroll(container);
    const y = useTransform(scrollY, [0, 200], [0, 50]);
    const ySpring = useSpring(y, {
        stiffness: 1000,
        damping: 100
    });
    return (
        <div ref={container} id='hero' className="absolute h-[100dvh] right-0 left-0 top-0 overflow-hidden">
            <div className="w-full h-[100dvh] relative">
                <div className="absolute top-0 right-0 left-0 bottom-0 z-50"></div>
                <MatrixRain />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <motion.h1 style={{ y:ySpring }} className="font-bold md:text-6xl sm:text-6xl text-4xl  xl:text-8xl  text-white text-center ">
                        <p className='bg-gradient-to-t from-stone-300 to-stone-50 bg-clip-text'>Не можешь победить ИИ - возглавь</p>
                        <MdArrowDownward className='mx-auto pt-6 text-6xl' />
                    </motion.h1>
                </div>
            </div>
        </div>
    )
}


