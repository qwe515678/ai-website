import React from "react";
import { BentoGrid, BentoGridItem } from "../../ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconFileBroken,
  IconHealthRecognition,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";
import { Button } from "../../ui/Button";
import GlitchImage from "./GlitchImage";
import H2 from "@/components/ui/H2";
import { useTranslations } from "next-intl";

export default function BentoGridDemo() {
  const t = useTranslations("Sections.WhereIsUsed");
  const items = [
    {
      title: t("bento-items.health.title"),
      description: t("bento-items.health.description"),
      header: <Skeleton src="health.svg" />,
      icon: <IconHealthRecognition className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: t("bento-items.educaion.title"),
      description: t("bento-items.educaion.description"),
      header: <Skeleton src="science.svg" />,
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: t("bento-items.transport.title"),
      description: t("bento-items.transport.description"),
      header: <Skeleton src="transport.svg" />,
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: t("bento-items.manufacturing.title"),
      description:t("bento-items.manufacturing.description"),
      header: <Skeleton src="manufacture.svg" />,
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: t("bento-items.fun.title"),
      description:
        t('bento-items.fun.description'),
      header: <Skeleton src="fun.svg" />,
      icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
      title:t("bento-items.art.title"),
      description:
        t('bento-items.art.description'),
      header: <Skeleton src="art.svg" />,
      icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: t("bento-items.bio.title"),
      description:
        t("bento-items.bio.description"),
      header: <Skeleton src="bio.svg" />,
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <H2 href="#where-is-used">{t("h2")}</H2>
      <BentoGrid className="mx-auto max-w-4xl">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : "" + " group"}
          />
        ))}
      </BentoGrid>
      <Button>{t("more")}</Button>
    </div>
  );
}
function Skeleton({
  src = "fun.svg",
  alt = "fun",
  ...props
}: {
  src?: string;
  alt?: string;
}) {
  return (
    <div
      className="relative flex h-full min-h-[6rem] w-full flex-1  items-center justify-center overflow-hidden rounded-xl bg-black "
      {...props}
    >
      <Image
        className="absolute inset-0 opacity-30"
        src="/noise.svg"
        width={500}
        height={250}
        alt=""
      />
      <div className="hidden md:block">
        <GlitchImage src={"whereIsUsed/" + src} />
      </div>
      <Image
        src={"whereIsUsed/" + src}
        width={500}
        height={250}
        alt=""
        className="max-h-[10dvh] md:hidden"
      />
    </div>
  );
}
