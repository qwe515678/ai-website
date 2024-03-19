import { useTranslations } from "next-intl";
import MenuClient from "./MenuClient";

export default function MenuServer() {
  const t = useTranslations("Ui.Menu");
  const data = [
    { name: t("1"), href: "#what-is-ai" },
    { name: t("2"), href: "#ai-history" },
    { name: t("3"), href: "#where-is-used" },
    { name: t("4"), href: "#quickstart" },
    { name: t("5"), href: "#how-works" },
    { name: t("6"), href: "#what-next" },
  ];
  return <MenuClient data={data} map={t("Map")} />;
}
