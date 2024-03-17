import { MdArrowDownward } from "react-icons/md";
import MatrixRain from "./MatrixRain";
import { getLocale } from "next-intl/server";

export default async function Hero({ title }: { title: string }) {
  const locale = await getLocale();
  return (
    <div id="hero" className="z-[80] overflow-hidden bg-black">
      <div className="relative h-[100dvh] w-full">
        <MatrixRain />
        <div className="absolute left-1/2 top-1/2 z-[3] -translate-x-1/2 -translate-y-1/2 transform">
          <div
            className={`text-center ${locale==='de'? 'text-2xl' : 'text-3xl '} font-bold text-white  sm:text-6xl md:text-6xl xl:text-8xl `}
          >
            <h1 className="bg-gradient-to-t from-stone-400 to-stone-300 bg-clip-text text-transparent ">
              {title}
            </h1>

            <MdArrowDownward className="mx-auto pt-6 text-6xl text-stone-400" />
          </div>
        </div>
        <div
          className={`absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black to-black/0`}
        />
      </div>
    </div>
  );
}
