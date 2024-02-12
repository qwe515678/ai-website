'use client'
import { Variants, motion } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';

type Sizes = {
    rows: number,
    columns: number,
}

export default function RunningLetters() {
    let [sizes, setSizes] = useState<Sizes>({ rows: 50, columns: 50 });

    useEffect(() => {
        setSizes({ rows: Math.floor(window.innerHeight / 30), columns: Math.floor(window.innerWidth / 40) });
    }, []);


    return (
        <div className="">
            <div className="p-2 flex">
                {Array(sizes.columns).fill(0).map((_, i) => {
                    return (
                        <Column key={i} sizes={sizes} />
                    );
                })}
            </div>
        </div>
    );
}

function Column({ sizes }: { sizes: Sizes }) {
    const [activeRow, setActiveRow] = useState(-1);
    const intervalDuration = Math.random() * 50 + 1;

    const [chars, setChars] = useState(new Array(sizes.rows).fill('').map((_, index) => getChar()));

    useEffect(() => {
        const timerId = setInterval(() => {
            setActiveRow((prev) => (prev + 1) % sizes.rows);
        }, intervalDuration);

        return () => clearInterval(timerId);
    }, [sizes.rows, intervalDuration]);

    useEffect(() => {
        // Update the character for the active row
        setChars((oldChars) => {
            const newChars = [...oldChars];
            newChars[activeRow] = getChar();
            return newChars;
        });
    }, [activeRow]);

    return (
        <div className=" w-full flex flex-col justify-start">
            {
                chars.map((char, j) => {
                    return (
                        <Char key={j} char={char} highlighted={j === activeRow} />
                    );
                })
            }
        </div>
    );
}


function getChar(): string {
    const characters: string[] = [
        '一', '二', '三', '四', '五',
        '六', '七', '八', '九', '十',
        '百', '千', '万', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1', '2', '4', '7', '9'
    ];

    return characters[Math.floor(Math.random() * characters.length)];
}

interface CharProps {
    highlighted: boolean,
    char: string
}

function Char({ char, highlighted }: CharProps) {
    return (
        <div className="relative inline-block">
            <div className="absolute inset-0 bg-transparent peer " />
            <motion.span
                variants={charVariants}
                whileHover='hovered'
                animate={highlighted ? 'bright' : 'usual'}
                className={` text-center min-h-5 text-xs transition-colors select-none peer-hover:text-red-600`}
                suppressHydrationWarning
                draggable={false}
            >
                {char}
            </motion.span>
        </div>
    );
}


const charVariants: Variants = {
    bright: {
        color: '#bfffd0',
        shadow: '0px 0px 100px 19px rgba(255, 255, 255, 0.04)'
    },
    usual: {
        color: '#00240a'
    },
    hovered: {
        color: '#e61809'
    }
}