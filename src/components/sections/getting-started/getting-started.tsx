import data from "@/lib/data";
import Code from "./Code";
import Link from "next/link";
import Quickstart from "./quickstart";
import H2 from "@/components/ui/H2";

export default function GettingStarted() {
  return (
    <div className="flex flex-col gap-4">
      <H2 href="#quickstart">Quickstart</H2>
      <p>
        В этом гайде мы шаг за шагом создадим простую нейронную сеть для
        классификации изображений с помощью Python и TensorFlow.
      </p>
      <div className="mb-10">
        <h3>Что вам понадобится:</h3>
        <ul>
          {data["getting-started"]["required-skills"].map((skill, i) => {
            return (
              <li key={i} className="flex items-center justify-start gap-2">
                <svg
                  width="170"
                  height="50"
                  viewBox="0 0 170 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[4px] w-[16px]"
                >
                  <rect width="170" height="50" className="fill-green-300" />
                </svg>

                <a href={skill.link} className="group">
                  {skill.text.split("").map((minichar, i) => (
                    <span
                      key={i}
                      className="border-b border-dashed border-black transition group-hover:border-green-300"
                    >
                      {minichar}
                    </span>
                  ))}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <Quickstart />
    </div>
  );
}
