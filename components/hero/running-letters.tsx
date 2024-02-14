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
        <div className={(sizes.columns === 50 && sizes.rows === 50) ? 'text-black' : ''}>
            <div className="px-3 rounded flex h-[100dvh] overflow-hidden">
                {Array(sizes.columns).fill(0).map((_, i) => {
                    return (
                        <Column key={i} sizes={sizes} />
                    );
                })}
            </div>
        </div >
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
        <div className=" w-full flex flex-col justify-start overflow-scroll">
            {
                chars.map((char, j) => {
                    return (
                        <Char key={j} char={char} highlighted={j === activeRow} num={j} />
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
    char: string,
    num: number,
}

function Char({ char, highlighted, num }: CharProps) {
    return (
        <div className="relative inline-block">
            <motion.span
                variants={charVariants}
                whileHover='hovered'
                animate={highlighted ? 'bright' : 'usual'}
                className={` text-center min-h-5 text-xs transition-colors select-none`}
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