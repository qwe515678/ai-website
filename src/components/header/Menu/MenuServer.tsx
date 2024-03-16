import { useTranslations } from "next-intl";
import { Button } from "../../ui/Button";
import MenuClient from "./MenuClient";

export default function MenuServer() {
  const data = [
    { name: "Что такое ИИ", href: "#what-is-ai" },
    { name: "История ИИ", href: "#ai-history" },
    { name: "Где используется", href: "#where-is-used" },
    { name: "Quickstart", href: "#quickstart" },
    { name: "Как это работает", href: "#how-works" },
  ];
  return <MenuClient data={data} />;
}
