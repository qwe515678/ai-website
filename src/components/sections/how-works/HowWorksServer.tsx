import { useTranslations } from "next-intl";
import HowDoesItWorkClient from "./HowWorksClient";


export default function HowItWorksServer(){
  const t = useTranslations("Sections.HowDoesItWork");
  const data = [
    {
      name: t("layers.1.title"),
      description:
        t("layers.1.description"),
    },
    {
      name: t("layers.2.title"),
      description:t("layers.2.description"),
    },
    {
      name: t("layers.3.title"),
      description:t("layers.3.description"),
    },
  ];
  return <HowDoesItWorkClient data={data} h2={t('h2')}/>
}