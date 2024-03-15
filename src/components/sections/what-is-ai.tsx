import { useTranslations } from "next-intl";


export default function WhatIsAi() {
  const t:any = useTranslations()
  return (
    <div className="flex flex-col gap-4">
      <h2 className="">{t('Sections.WhatIsAi.h2')}</h2>
      <p>
        <span className="border-b border-dashed border-green-300">
          {t("Sections.WhatIsAi.definition.name")}
        </span>{" "}
       {t('Sections.WhatIsAi.definition.definition')}
      </p>
    </div>
  );
}
