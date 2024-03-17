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

  const [hoverIndex, setHoverIndex] = useState(-1);
  const [isMenuHovered, setIsMenuHovered] = useState(false);
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
              initial={{ opacity: 0, y: 20 }}
              exit={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ staggerChildren: 0.1 }}
              className="fixed"
              style={{
                top: "50%",
                left: "50%",
              }}
            >
              <motion.ul
                className="relative z-[200] flex min-h-[20vh] w-fit flex-col  gap-5 rounded-xl border-2 border-dashed border-pink-600 bg-black/90 p-5 text-xl shadow-2xl backdrop-blur-xl xs:text-3xl"
                style={{ transform: "translate(-50%, -50%)" }}
                onHoverStart={() => setIsMenuHovered(true)}
                onHoverEnd={() => setIsMenuHovered(false)}
              >
                {data.map((item: MenuClientItemType, index: number) => {
                  return (
                    <motion.li
                      key={index}
                      initial={{
                        opacity: 0,
                        x: -10,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      style={{
                        filter:
                          (hoverIndex === index )|| !isMenuHovered
                            ? "blur(0px) opacity(1)"
                            : "blur(2px) opacity(0.5)",
                      }}
                      className="transition"
                      transition={{ delay: index * 0.2 }}
                      onMouseEnter={() => setHoverIndex(index)}
                      onMouseLeave={() => setHoverIndex(-1)}
                    >
                      <Link
                        href={item.href}
                        className="font-semibold"
                        scroll={true}
                        onClick={() => {
                          setIsOpen(false);
                          bgBlurContext?.setBgBlur(false);
                        }}
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
