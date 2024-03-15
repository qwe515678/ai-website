import MatrixRain from "./running-letters";
import { MdArrowDownward } from "react-icons/md";

export default function Hero({}) {
  return (
    <div
      id="hero"
      className="absolute left-0 right-0 top-0 z-[80] h-[100dvh] overflow-hidden bg-black"
    >
      <div className="relative h-[100dvh] w-full">
        <div className="absolute bottom-0 left-0 right-0 top-0 z-50"></div>
        <MatrixRain />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <div className="text-center text-4xl font-bold text-white  sm:text-6xl  md:text-6xl xl:text-8xl ">
            <h1 className="bg-gradient-to-t from-stone-400 to-stone-300 bg-clip-text text-transparent ">
              Не можешь победить ИИ - возглавь
            </h1>

            <MdArrowDownward className="mx-auto pt-6 text-6xl text-stone-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
