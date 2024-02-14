import MatrixRain from './running-letters'
import { MdArrowDownward } from "react-icons/md";


export default function Hero({ }) {
    return (
        <div id='hero' className="absolute h-[100dvh] right-0 left-0 top-0 overflow-hidden">
            <div className="w-full h-[100dvh] relative">
                <MatrixRain />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-8xl font-bold text-white text-center ">
                        <p className='md:text-6xl sm:text-4xl'>Не можешь победить ИИ - возглавь</p>
                        <MdArrowDownward className='mx-auto pt-6' />
                    </h1>
                </div>
            </div>
        </div>
    )
}
