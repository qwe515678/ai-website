"use client";
import { Button } from "@/components/ui/Button";
import { BgBlurContext } from "@/components/ui/providers";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useContext, useState, useRef, useEffect } from "react";

type MenuClientItemType = {
  name: string;
  href: string;
};
type MenuClientType = {
  data: MenuClientItemType[];
};

export default function MenuClient({ data }: MenuClientType) {
  const [isOpen, setIsOpen] = useState(false);
  const bgBlurContext = useContext(BgBlurContext);
  const popupRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        bgBlurContext?.setBgBlur(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [bgBlurContext]);

  return (
    <>
      <Button
        className={`bg-black ${isOpen && "pointer-events-none"}`}
        onClick={() => {
          bgBlurContext?.setBgBlur(!bgBlurContext.bgBlur);
          setIsOpen(true);
        }}
      >
        карта
      </Button>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              ref={popupRef}
              key="menu"
              initial={{ opacity: 0, scaleY: 0 }}
              exit={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              style={{ translateX: '75%', translateY: '150%' }}
              className=" fixed top-0 left-0 z-[200] flex min-h-[20vh] min-w-[40vw] max-w-[80vw] flex-col gap-3 overflow-hidden rounded-xl border border-pink-600 bg-black/90 p-5 shadow-2xl backdrop-blur-xl"
              transition={{ staggerChildren: 0.1 }}
            >
              {data.map((item: MenuClientItemType, index: number) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10, filter: "blur(5px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <Link
                      href={item.href}
                      className="font-bold"
                      scroll={true}
                      onClick={() => {
                        setIsOpen(false);
                        bgBlurContext?.setBgBlur(false);
                        1;
                      }}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
