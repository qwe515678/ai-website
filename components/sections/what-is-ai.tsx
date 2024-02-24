'use client'
interface WhatIsAIData {
    title: string;
    description: string;
    image: string;
    benefits: string[];
}

const whatIsAIData: WhatIsAIData = {
    title: "Что такое ИИ?",
    description: "Искусственный интеллект (ИИ) - это быстро развивающаяся область, которая меняет мир к лучшему.",
    image: "/images/ai-concept.webp",
    benefits: [
        "Автоматизация задач",
        "Улучшение качества жизни",
        "Новые возможности для бизнеса",
        "Революция в различных сферах",
    ],
};


import React from "react";
import Image from "next/image";

const WhatIsAI: React.FC = () => {
    const { title, description, image, benefits } = whatIsAIData;

    return (
        <section>
            <h2>{title}</h2>
            <p>{description}</p>
            <Image src={image} alt="Искусственный интеллект" width={600} height={400} />
            <h3>Преимущества ИИ:</h3>
            <ul>
                {benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                ))}
            </ul>
        </section>
    );
};

export default WhatIsAI;
