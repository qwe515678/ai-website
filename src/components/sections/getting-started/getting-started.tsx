import Quickstart from "./quickstart";
import H2 from "@/components/ui/H2";
import { useTranslations } from "next-intl";
import { FaPython } from "react-icons/fa";

export default function GettingStarted() {
  const t = useTranslations("Sections.GettingStarted");
  const data = {
    "required-skills": [
      { link: "https://docs.python.org/3/", text: t("required-skills.0") },
      {
        link: "https://jupyter.org/",
        text: t("required-skills.1"),
      },
      { link: "https://roadmap.sh/python", text: t("required-skills.2") },
    ],
    snippets: {
      langIcon: <FaPython />,
      stage: t("stage"),
      codeInfo: [
        {
          description: t("snippets.1"),
          code: "pip install tensorflow",
          name: "shell",
          codeHighlighted: <div className="">pip install tensorflow</div>,
        },
        {
          description: t("snippets.2"),
          code: `import tensorflow as tf

                (x_train, y_train), (x_test, y_test) = tf.keras.datasets.mnist.load_data()`,
          name: "main.py",
          codeHighlighted: (
            <div className=" ">
              <div className=""></div>
              <span
                style={{ color: "rgb(197, 200, 198); font-weight:400" }}
                className=""
              >
                <div className="">
                  <span style={{ color: "rgb(178, 148, 187)" }}>import</span>{" "}
                  tensorflow as{" "}
                  <span style={{ color: "rgb(129, 162, 190)" }}>tf</span>
                </div>
                <span style={{ color: "rgb(222, 147, 95)" }}>
                  (x_train, y_train)
                </span>
                ,{" "}
                <span style={{ color: "rgb(222, 147, 95)" }}>
                  (x_test, y_test)
                </span>{" "}
              </span>
              = tf.keras.datasets.mnist.
              <span style={{ color: "rgb(222, 147, 95)" }}>load_data</span>()
            </div>
          ),
        },

        {
          description: t("snippets.3"),
          code: `x_train = x_train.astype('float32') / 255.0
                x_test = x_test.astype('float32') / 255.0`,
          name: "main.py",
          codeHighlighted: (
            <div className="">
              <div className="">
                <span style={{ color: "rgb(197, 200, 198)" }}>x_train</span>=
                x_train.astype(
                <span style={{ color: "rgb(181, 189, 104)" }}>
                  &#x27;float32&#x27;
                </span>
                ) /<span style={{ color: "rgb(222, 147, 95)" }}>255.0</span>
              </div>
              <span style={{ color: "rgb(197, 200, 198)" }}>x_test</span>=
              x_test.astype(
              <span style={{ color: "rgb(181, 189, 104)" }}>
                &#x27;float32&#x27;
              </span>
              ) /<span style={{ color: "rgb(222, 147, 95)" }}>255.0</span>
            </div>
          ),
        },

        {
          description: t("snippets.4"),
          code: `model = tf.keras.models.Sequential([
                    tf.keras.layers.Flatten(input_shape=(28, 28)),
                    tf.keras.layers.Dense(128, activation='relu'),
                    tf.keras.layers.Dense(10, activation='softmax')
                  ])`,
          name: "main.py",
          codeHighlighted: (
            <div className="">
              <span style={{ color: "rgb(197, 200, 198)" }}>model</span> =
              tf.keras.models.Sequential([ tf.keras.layers.Flatten(input_shape=(
              <span style={{ color: "rgb(222, 147, 95)" }}>28</span>,{" "}
              <span style={{ color: "rgb(222, 147, 95)" }}>28</span>)),
              tf.keras.layers.Dense(
              <span style={{ color: "rgb(222, 147, 95)" }}>128</span>,
              activation=
              <span style={{ color: "rgb(181, 189, 104)" }}>
                &#x27;relu&#x27;
              </span>
              ), tf.keras.layers.Dense(
              <span style={{ color: "rgb(222, 147, 95)" }}>10</span>,
              activation=
              <span style={{ color: "rgb(181, 189, 104)" }}>
                &#x27;softmax&#x27;
              </span>
              ) ])
            </div>
          ),
        },

        {
          description: t("snippets.5"),
          code: `model.compile(optimizer='adam',
                loss='sparse_categorical_crossentropy',
                metrics=['accuracy'])`,
          name: "main.py",
          codeHighlighted: (
            <div className="">
              model.<span style={{ color: "rgb(222, 147, 95)" }}>compile</span>
              (optimizer=
              <span style={{ color: "rgb(181, 189, 104)" }}>
                &#x27;adam&#x27;
              </span>
              , loss=
              <span style={{ color: "rgb(181, 189, 104)" }}>
                &#x27;sparse_categorical_crossentropy&#x27;
              </span>
              , metrics=[
              <span style={{ color: "rgb(181, 189, 104)" }}>
                &#x27;accuracy&#x27;
              </span>
              ])
            </div>
          ),
        },

        {
          description: t("snippets.6"),
          code: `model.fit(x_train, y_train, epochs=10)                `,
          name: "main.py",
          codeHighlighted: (
            <div className="">
              model<span style={{ color: "rgb(204, 102, 102)" }}>.fit</span>
              (x_train, y_train, epochs=
              <span style={{ color: "rgb(222, 147, 95)" }}>10</span>)
            </div>
          ),
        },

        {
          description: t("snippets.7"),
          code: `test_loss, test_acc = model.evaluate(x_test, y_test, verbose=2)
                print('\nТестовая точность:', test_acc)`,
          name: "main.py",
          codeHighlighted: (
            <div className="">
              test_loss, test_acc = model.evaluate(x_test, y_test, verbose=2)
              <span style={{ color: "rgb(222, 147, 95)" }}>print</span>(
              <span style={{ color: "rgb(181, 189, 104)" }}>
                &#x27;\nТестовая точность:&#x27;
              </span>
              , test_acc)
            </div>
          ),
        },

        {
          description: t("snippets.8"),
          code: `model.save('mnist_model.h5')`,
          name: "main.py",
          codeHighlighted: (
            <div className="">
              model.save(
              <span style={{ color: "rgb(181, 189, 104)" }}>
                &#x27;mnist_model.h5&#x27;
              </span>
              )
            </div>
          ),
        },
      ],
    },
  };
  return (
    <div className="flex flex-col gap-4">
      <H2 href="#quickstart">Quickstart</H2>
      <p>{t("description")}</p>
      <div className="mb-10">
        <h3>{t("required-skills-title")}</h3>
        <ul>
          {data["required-skills"].map((skill, i) => {
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
      <Quickstart data={data.snippets}/>
    </div>
  );
}
