import React from "react";
import { BentoGrid, BentoGridItem } from "../../ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconHealthRecognition,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";
import { Button } from "../../ui/Button";
import GlitchImage from "./GlitchImage";
import H2 from "@/components/ui/H2";

export default function BentoGridDemo() {
  return (
    <div className="flex flex-col gap-4">
      <H2 href="#where-is-used">Где используется ИИ</H2>
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
      <Button>еще</Button>
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
const items = [
  {
    title: "Здравоохранение",
    description:
      "Окунитесь в мир, где болезни становятся историей, а продолжительность жизни достигает невиданных высот.",
    header: <Skeleton src="health.svg" />,
    icon: <IconHealthRecognition className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Образование",
    description:
      "Познайте невероятные возможности, которые открывает персонализированное обучение, с помощью ИИ.",
    header: <Skeleton src="science.svg" />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Транспорт",
    description:
      "Пронеситесь по дорогам будущего в автономных транспортных средствах, которые доставят вас куда угодно с комфортом и скоростью.",
    header: <Skeleton src="transport.svg" />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Производство",
    description:
      "Оптимизируйте процессы и минимизируйте отходы с помощью ИИ, который видит будущее производства на шаг вперед.",
    header: <Skeleton src="manufacture.svg" />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Развлечения",
    description:
      "Погрузитесь в захватывающие истории, созданные ИИ, которые перенесут вас в миры, где фантазия становится реальностью.",
    header: <Skeleton src="fun.svg" />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Искусство",
    description:
      "Прикоснитесь к шедеврам, созданным ИИ, которые стирают грань между машиной и творцом.",
    header: <Skeleton src="art.svg" />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Биотехнологии",
    description:
      "Расшифруйте код жизни и откройте новые способы лечения, которые победят болезни прошлого.",
    header: <Skeleton src="bio.svg" />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
