import { useTranslations } from "next-intl";
import List from "./List";
import ListItem from "./ListItem";
import H2 from "@/components/ui/H2";
const keys = [
  "1943",
  "1949",
  "1956",
  "1957",
  "1965",
  "1966",
  "1972",
  "1974",
  "1980",
  "1985",
  "1997",
  "1998",
  "2005",
  "2011",
  "2012",
  "2016",
  "2020",
  "2021",
  "2022",
  "2023",
  "2024",
] as const;
export default function AiHistory() {
  const t = useTranslations();
  return (
    <div className="flex flex-col gap-4">
      <H2 href="#ai-history">{t("Sections.AiHistory.h2")}</H2>
      <List prolong={t("Ui.Prolong")}>
        {keys.map((key, i) => (
          <ListItem
            event={t(`Sections.AiHistory.${key}.event`)}
            year={t(`Sections.AiHistory.${key}.year`)}
            wiki_link={t(`Sections.AiHistory.${key}.wiki_link`)}
            key={i}
          />
        ))}
      </List>
    </div>
  );
}
