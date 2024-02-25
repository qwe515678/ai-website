import Hero from "@/components/hero/hero";
import AiHistory from "@/components/sections/ai-history";
import GettingStarted from "@/components/sections/getting-started";
import WhatIsAI from "@/components/sections/what-is-ai";
import WhereIsUsed from "@/components/sections/where-is-used";
import { cn } from "@/lib/cn";
import { ReactNode } from "react";

export default function Home() {
  return (
    <div className=" flex flex-col gap-5">
      <section className="max-h-full overflow-hidden"><Hero /></section>
      <div className="min-h-dvh" />
      <Section className="h-fit">
        <WhatIsAI />
      </Section>
      <Section>
        <AiHistory />
      </Section>
      <Section>
        <WhereIsUsed />
      </Section>
      <Section>
        <GettingStarted />
      </Section>
    </div>
  );
}

function Section({ children, ...props }: { children?: ReactNode, } & React.HTMLAttributes<HTMLElement>) {
  return (
    <section className={cn("min-h-dvh border-b border-dashed py-4 overflow-hidden", props.className)} {...props}>
      {children}
    </section>
  );
}