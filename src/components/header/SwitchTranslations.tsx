"use client";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { Button } from "../ui/Button";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { variants } from "@/lib/data";

export default function SwitchTranslations() {
  const [testLocale, setTestLocale] = useState("en");
  const router = useRouter();
  const path = usePathname();
  const locales = ["en", "ru", "de"];
  const pathSegments = path.split("/");
  const changeLocale = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    router.push(
      getNextOrFirst(locales, pathSegments[1] || "ru") +
        "/" +
        path.split("/").slice(2).join("/"),
      { scroll: false },
    );
  };

  return (
    <div className="overflow-y-hidden1">
      <Button
        className="relative flex min-w-10 flex-col bg-black"
        onClick={(e) => {
          setTestLocale(getNextOrFirst(locales, testLocale || "ru"));
          changeLocale(e);
        }}
      >
        <AnimatePresence>
          {locales.map((locale) => {
            if (locale !== testLocale) return null;
            return (
              <motion.div
                key={`lang-switch-${locale}`}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute "
                variants={variants.copyVariants}
              >
                {locale}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </Button>
    </div>
  );
}

function getNextOrFirst(array: string[], current: string) {
  const currentIndex = array.indexOf(current);
  if (currentIndex === -1) {
    return "en";
  }
  const nextIndex = (currentIndex + 1) % array.length;
  return array[nextIndex];
}
