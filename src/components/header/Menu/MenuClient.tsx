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
            <motion.div className="pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-[100]" />
            <motion.div
              ref={popupRef} // Step 2
              key="menu"
              initial={{ opacity: 0, scaleY: 0 }}
              exit={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              className="absolute top-20 z-[200] flex min-h-[20vh] min-w-[40vw] max-w-[80vw] flex-col gap-3 rounded-xl border border-pink-600 bg-black/90 p-5 backdrop-blur-xl"
              transition={{ staggerChildren: 0.1 }}
            >
              {data.map((item: MenuClientItemType, index: number) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <Link href={item.href} className="font-bold">
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
