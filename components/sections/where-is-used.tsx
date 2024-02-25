"use client";
import { cn } from "@/lib/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
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

export default function BentoGridDemo() {
    return (
        <div className="flex flex-col gap-4">
            <h2>Где используется ИИ</h2>
            <BentoGrid className="max-w-4xl mx-auto">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        icon={item.icon}
                        className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                    />
                ))}
            </BentoGrid>
        </div>
    );
}
const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
    {
        title: "Здравоохранение",
        description: "Окунитесь в мир, где болезни становятся историей, а продолжительность жизни достигает невиданных высот.",
        header: <Skeleton />,
        icon: <IconHealthRecognition className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Образование",
        description: "Познайте невероятные возможности, которые открывает персонализированное обучение, с помощью ИИ.",
        header: <Skeleton />,
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Транспорт",
        description: "Пронеситесь по дорогам будущего в автономных транспортных средствах, которые доставят вас куда угодно с комфортом и скоростью.",
        header: <Skeleton />,
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Производство",
        description:
            "Оптимизируйте процессы и минимизируйте отходы с помощью ИИ, который видит будущее производства на шаг вперед.",
        header: <Skeleton />,
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Развлечения",
        description: "Погрузитесь в захватывающие истории, созданные ИИ, которые перенесут вас в миры, где фантазия становится реальностью.",
        header: <Skeleton />,
        icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Искусство",
        description: "Прикоснитесь к шедеврам, созданным ИИ, которые стирают грань между машиной и творцом.",
        header: <Skeleton />,
        icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Биотехнологии",
        description: "Расшифруйте код жизни и откройте новые способы лечения, которые победят болезни прошлого.",
        header: <Skeleton />,
        icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
];
