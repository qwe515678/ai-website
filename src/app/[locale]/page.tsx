import Hero from "@/components/hero/hero";
import AiHistory from "@/components/sections/ai-history/ai-history";
import GettingStarted from "@/components/sections/getting-started/getting-started";
import WhatIsAI from "@/components/sections/what-is-ai";
import WhereIsUsed from "@/components/sections/where-is-used/where-is-used";

import { cn } from "@/lib/cn";
import { ReactNode } from "react";
import { useTranslations } from "next-intl";
import HowDoesItWork from "@/components/sections/how-works/how-works";
export default function Home() {
  const t: any = useTranslations();
  return (
    <div className=" flex flex-col gap-5">
      <section className="max-h-full overflow-hidden">
        <Hero title={t("Sections.Hero")} />
      </section>
      <div className="min-h-[100vh]" />
      <Section className="h-fit">
        <WhatIsAI />
      </Section>
      <Section className="overflow-hidden border-b border-dashed pb-2">
        <AiHistory />
      </Section>
      <Section>
        <WhereIsUsed />
      </Section>
      <Section>
        <GettingStarted />
      </Section>
      <Section>
        <HowDoesItWork />
      </Section>
      <Section></Section>
    </div>
  );
}

function Section({
  children,
  ...props
}: { children?: ReactNode } & React.HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={cn("min-h-dvh border-b border-dashed py-4 ", props.className)}
      {...props}
    >
      {children}
    </section>
  );
}
