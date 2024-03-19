import H2 from "@/components/ui/H2";
import WhatNextCarousel from "./what-next-client";
import { useTranslations } from "next-intl";

export default function WhatNext() {
  const t = useTranslations("Sections.WhatNext");
  const data = [
    {
      title: t("data.1.title"),
      description: t("data.1.description"),
      links: [
        { label: "Python.org", href: "https://www.python.org/" },
        { label: "Real Python", href: "https://realpython.com/" },
        {
          label: "Codecademy",
          href: "https://www.codecademy.com/learn/learn-python-3",
        },
      ],
    },
    {
      title: t("data.2.title"),
      description: t("data.2.description"),
      links: [
        { label: "TensorFlow Official", href: "https://www.tensorflow.org/" },
        { label: "Google AI Blog", href: "https://ai.googleblog.com/" },
        {
          label: "TensorFlow Tutorials",
          href: "https://www.tensorflow.org/tutorials",
        },
      ],
    },
    {
      title: t("data.3.title"),
      description: t("data.3.description"),
      links: [
        {
          label: "Deep Learning Book",
          href: "http://www.deeplearningbook.org/",
        },
        {
          label: "Coursera Deep Learning",
          href: "https://www.coursera.org/specializations/deep-learning",
        },
        {
          label: "Kaggle Deep Learning",
          href: "https://www.kaggle.com/learn/deep-learning",
        },
      ],
    },
    {
      title: t("data.4.title"),
      description: t("data.4.description"),
      links: [
        { label: "Kaggle Datasets", href: "https://www.kaggle.com/datasets" },
        {
          label: "GitHub AI Projects",
          href: "https://github.com/topics/artificial-intelligence",
        },
        {
          label: "AI Project Ideas",
          href: "https://www.analyticsvidhya.com/blog/2021/05/10-ai-project-ideas-for-beginners-to-build-in-2021/",
        },
      ],
    },
    {
      title: t("data.5.title"),
      description: t("data.5.description"),
      links: [
        { label: "AI Stack Exchange", href: "https://ai.stackexchange.com/" },
        { label: "Reddit AI", href: "https://www.reddit.com/r/artificial/" },
        {
          label: "AI Research",
          href: "https://www.arxiv-vanity.com/topics/cs.ai/",
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col items-start justify-start gap-4 pb-40">
      <H2 href="#what-next">{t("h2")}</H2>
      <p>{t("description")}</p>
      <WhatNextCarousel data={data} />
    </div>
  );
}
