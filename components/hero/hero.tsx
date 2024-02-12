'use client'
import MatrixRain from './running-letters'
import { MdArrowDownward } from "react-icons/md";


export default function Hero({ }) {
    return (
        <div className="absolute right-0 left-0">
            <div className="w-full h-dvh relative">
                <MatrixRain />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-8xl md:text-4xl font-bold text-white text-center ">
                        Не можешь победить ИИ - возглавь
                        <MdArrowDownward className='mx-auto pt-6' />
                    </h1>
                </div>
            </div>
        </div>
    )
}
