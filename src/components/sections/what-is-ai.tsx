import { useTranslations } from "next-intl";
import H2 from "../ui/H2";


export default function WhatIsAi() {
  const t = useTranslations()
  return (
    <div className="flex flex-col gap-4">
      <H2 href="#what-is-ai">{t('Sections.WhatIsAi.h2')}</H2>
      <p>
        <span className="border-b border-dashed border-green-300">
          {t("Sections.WhatIsAi.definition.name")}
        </span>{" "}
       {t('Sections.WhatIsAi.definition.definition')}
      </p>
    </div>
  );
}
