import data from "@/lib/data"
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import SyntaxHighlighter from 'react-syntax-highlighter';

export default function GettingStarted() {
    return (
        <div className="flex flex-col gap-4">
            <h2>Quickstart</h2>
            <p>В этом гайде мы шаг за шагом создадим простую нейронную сеть для классификации изображений с помощью Python и TensorFlow.</p>
            <div className="">
                <h3>Что вам понадобится:</h3>
                <ul className="list-disc">
                    {data["getting-started"]["required-skills"].map((skill, i) => {
                        return (
                            <li key={i} className="flex gap-2 items-center justify-start">
                                <svg width="170" height="50" viewBox="0 0 170 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-1 w-fit">
                                    <rect width="170" height="50" className="fill-green-300" />
                                </svg>

                                <span>{skill}</span>
                            </li>
                        )
                    })}
                </ul>
                <div className="">
                </div>
            </div>
        </div>
    )
}