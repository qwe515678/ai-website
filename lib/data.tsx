import {  Variants } from "framer-motion";
const data = {
    "variants": {
        "eventsVariants": {
            "closed": {
                opacity: 0,
                translateX: 20,
                scaleY: 0.9
            },
            "open": {
                opacity: 1,
                translateX: 0,
                scaleY: 1
            },
            "hover": {
                transition: {
                    duration: 0.4
                }
            }
        } as Variants,

        "copyVariants": {
            "exit": {
                scaleY: .2,
                opacity: 0,
                translateY: -2
            },
            "initial": {
                scaleY: .2,
                opacity: 0,
                translateY: 2
            },
            "animate": {
                scaleY: 1,
                opacity: 1,
                translateY: 0
            } as Variants
        }
    },
    "what-is-ai": {
        "events": [
            {
                "year": 1943,
                "event": "Уоррен Маккалок и Уолтер Питтс создают модель нейрона, которая закладывает основы нейронных сетей.",
                "wiki_link": "https://en.wikipedia.org/wiki/Neural_network"
            },
            {
                "year": 1949,
                "event": "Алан Тьюринг формулирует тест Тьюринга, который до сих пор используется для оценки способности машин мыслить.",
                "wiki_link": "https://en.wikipedia.org/wiki/Turing_test"
            },
            {
                "year": 1956,
                "event": "На Дартмутской конференции впервые используется термин `искусственный интеллект`.",
                "wiki_link": "https://en.wikipedia.org/wiki/Artificial_intelligence"
            },
            {
                "year": 1957,
                "event": "Аллен Ньюэлл и Герберт Саймон создают General Problem Solver (GPS), первую программу, способную решать задачи из разных областей.",
                "wiki_link": "https://en.wikipedia.org/wiki/General_Problem_Solver"
            },
            {
                "year": 1965,
                "event": "Джон Маккарти создает язык программирования Lisp, который до сих пор используется в исследованиях ИИ.",
                "wiki_link": "https://en.wikipedia.org/wiki/Lisp_(programming_language)"
            },
            {
                "year": 1966,
                "event": "Джозеф Вейценбаум создает ELIZA, компьютерную программу, которая имитирует психотерапевта.",
                "wiki_link": "https://en.wikipedia.org/wiki/ELIZA"
            },
            {
                "year": 1972,
                "event": "Разработана программа STUDENT, которая могла решать задачи алгебры на уровне студента.",
                "wiki_link": "https://en.wikipedia.org/wiki/STUDENT_(program)"
            },
            {
                "year": 1974,
                "event": "Создана программа MYCIN, которая могла ставить диагнозы и назначать лечение некоторых заболеваний.",
                "wiki_link": "https://en.wikipedia.org/wiki/MYCIN"
            },
            {
                "year": 1980,
                "event": "Разработана программа Deep Thought, которая стала первой, обыгравшей чемпиона мира по шахматам.",
                "wiki_link": "https://en.wikipedia.org/wiki/Deep_Thought_(computer)"
            },
            {
                "year": 1985,
                "event": "Создана программа Eureka, которая могла решать задачи, используя здравый смысл.",
                "wiki_link": "https://en.wikipedia.org/wiki/Eureka_(computer)"
            },
            {
                "year": 1997,
                "event": "Deep Blue, созданная IBM, обыграла чемпиона мира по шахматам Гарри Каспарова.",
                "wiki_link": "https://en.wikipedia.org/wiki/Deep_Blue"
            },
            {
                "year": 1998,
                "event": "Создана программа Watson, которая могла отвечать на вопросы по медицине на уровне врача.",
                "wiki_link": "https://en.wikipedia.org/wiki/Watson_(computer)"
            },
            {
                "year": 2005,
                "event": "DARPA Grand Challenge: беспилотный автомобиль Stanley, разработанный Stanford University, выиграл приз в $1 млн.",
                "wiki_link": "https://en.wikipedia.org/wiki/Stanley_(robot)"
            },
            {
                "year": 2011,
                "event": "IBM Watson побеждает в телевикторине Jeopardy!, обыгрывая двух чемпионов.",
                "wiki_link": "https://en.wikipedia.org/wiki/Jeopardy!_episode_4000"
            },
            {
                "year": 2012,
                "event": "Google X запускает проект самоуправляемого автомобиля.",
                "wiki_link": "https://en.wikipedia.org/wiki/Google_Self-Driving_Car"
            },
            {
                "year": 2016,
                "event": "AlphaGo, разработанная DeepMind (Google), обыгрывает чемпиона мира по игре в го Ли Седоля.",
                "wiki_link": "https://en.wikipedia.org/wiki/AlphaGo"
            },
            {
                "year": 2020,
                "event": "GPT-3, разработанная OpenAI, генерирует текст, который невозможно отличить от текста, написанного человеком.",
                "wiki_link": "https://en.wikipedia.org/wiki/GPT-3"
            }, {
                "year": 2021,
                "event": "Прогнозирование погоды с помощью ИИ становится все более точным и полезным для предупреждения о стихийных бедствиях.",
                "wiki_link": "https://en.wikipedia.org/wiki/Weather_forecasting"
            },
            {
                "year": 2022,
                "event": "Искусственный интеллект начинает играть ключевую роль в экономии расходов стартапов, заменяя некоторые человеческие задачи на более дешевые и эффективные ИИ-решения.",
                "wiki_link": "https://en.wikipedia.org/wiki/Startup_costs"
            },
            {
                "year": 2023,
                "event": "Рост интереса к искусственному интеллекту в профессиональном и образовательном контексте, с акцентом на его использование для создания эффективных бизнес-решений и управления маркетинговыми бюджетами.",
                "wiki_link": "https://en.wikipedia.org/wiki/Artificial_intelligence_in_business"
            },
            {
                "year": 2024,
                "event": "Ожидается, что искусственный интеллект будет играть еще более значительную роль в бизнесе и образовании, с увеличением числа профессий, требующих знаний в области ИИ. Появление новых должностей, таких как главный директор по искусственному интеллекту (CAIO), указывает на растущую роль ИИ в стратегическом планировании и внедрении.",
                "wiki_link": "https://en.wikipedia.org/wiki/Artificial_intelligence_in_business"
            }],
    },
    "getting-started": {
        "required-skills": ['Python 3.6+', 'Jupyter Notebook (или любой другой IDE)', 'Базовые знания Python'],
        "snippets": {
            "installTensorFlow":
            {
                "code": "pip install tensorflow",
                "codeHighlighted": (

                    <div
                        className=' border rounded  px-3 py-1 w-full flex-col'
                    >
                        pip install tensorflow
                    </div>

                )
            },
            "loadingData": {
                "code": `import tensorflow as tf

                (x_train, y_train), (x_test, y_test) = tf.keras.datasets.mnist.load_data()`,
                "codeHighlighted": (

                    <div className=' border rounded  px-3 py-1 w-full flex-col '>
                        <div className=""></div>
                        <span style={{ color: 'rgb(197, 200, 198); font-weight:400' }} className="">
                            <div className="">

                                <span style={{ color: "rgb(178, 148, 187)" }}>import</span> tensorflow as <span style={{ color: "rgb(129, 162, 190)" }}>tf</span>
                            </div>

                            <span style={{ color: 'rgb(222, 147, 95)' }}>(x_train, y_train)</span>, <span style={{ color: 'rgb(222, 147, 95)' }}>(x_test, y_test)</span> </span>= tf.keras.datasets.mnist.<span style={{ color: 'rgb(222, 147, 95)' }}>load_data</span>()
                    </div>

                )
            },
            "preprocessingData":
            {
                "code": `x_train = x_train.astype('float32') / 255.0
                x_test = x_test.astype('float32') / 255.0`,
                "codeHighlighted": (

                    <div
                        className=' border rounded  px-3 py-1 w-full flex-col'
                    >
                        <div className="">
                            <span style={{ color: "rgb(197, 200, 198)" }}>
                                x_train
                            </span>
                            = x_train.astype(<span style={{ color: "rgb(181, 189, 104)" }}>&#x27;float32&#x27;</span>) /
                            <span style={{ color: "rgb(222, 147, 95)" }}>255.0</span>
                        </div>
                        <span style={{ color: "rgb(197, 200, 198)" }}>x_test</span>
                        = x_test.astype(<span style={{ color: "rgb(181, 189, 104)" }}>&#x27;float32&#x27;</span>) /
                        <span style={{ color: "rgb(222, 147, 95)" }}>255.0</span>
                    </div>

                )
            },
            "modelCreation":
            {
                "code": `model = tf.keras.models.Sequential([
                    tf.keras.layers.Flatten(input_shape=(28, 28)),
                    tf.keras.layers.Dense(128, activation='relu'),
                    tf.keras.layers.Dense(10, activation='softmax')
                  ])`,
                "codeHighlighted": (

                    <div
                        className=' border rounded  px-3 py-1 w-full flex-col'
                    >
                        <span style={{ color: "rgb(197, 200, 198)" }}>model</span> = tf.keras.models.Sequential([
                        tf.keras.layers.Flatten(input_shape=(<span style={{ color: "rgb(222, 147, 95)" }}>28</span>, <span style={{ color: "rgb(222, 147, 95)" }}>28</span>)),
                        tf.keras.layers.Dense(<span style={{ color: "rgb(222, 147, 95)" }}>128</span>, activation=<span style={{ color: "rgb(181, 189, 104)" }}>&#x27;relu&#x27;</span>),
                        tf.keras.layers.Dense(<span style={{ color: "rgb(222, 147, 95)" }}>10</span>, activation=<span style={{ color: "rgb(181, 189, 104)" }}>&#x27;softmax&#x27;</span>)
                        ])
                    </div>

                )
            },
            "modelCompilation":
            {
                "code": `model.compile(optimizer='adam',
                loss='sparse_categorical_crossentropy',
                metrics=['accuracy'])`,
                "codeHighlighted": (

                    <div
                        className=' border rounded  px-3 py-1 w-full flex-col'
                    >
                        model.<span style={{ color: "rgb(222, 147, 95)" }}>compile</span>(optimizer=<span style={{ color: "rgb(181, 189, 104)" }}>&#x27;adam&#x27;</span>,
                        loss=<span style={{ color: "rgb(181, 189, 104)" }}>&#x27;sparse_categorical_crossentropy&#x27;</span>,
                        metrics=[<span style={{ color: "rgb(181, 189, 104)" }}>&#x27;accuracy&#x27;</span>])
                    </div>

                )
            },
            "modelTraining":
            {
                "code": `model.fit(x_train, y_train, epochs=10)                `,
                "codeHighlighted": (

                    <div
                        className=' border rounded  px-3 py-1 w-full flex-col'
                    >
                        model<span style={{ color: "rgb(204, 102, 102)" }}>.fit</span>(x_train, y_train, epochs=<span style={{ color: "rgb(222, 147, 95)" }}>10</span>)
                    </div>

                )
            },
            "modelEvaluation":
            {
                "code": `test_loss, test_acc = model.evaluate(x_test, y_test, verbose=2)
                print('\nТестовая точность:', test_acc)`,
                "codeHighlighted": (

                    <div
                        className=' border rounded  px-3 py-1 w-full flex-col'
                    >
                        test_loss, test_acc = model.evaluate(x_test, y_test, verbose=2)
                        <span style={{ color: "rgb(222, 147, 95)" }}>print</span>(<span style={{ color: "rgb(181, 189, 104)" }}>&#x27;\nТестовая точность:&#x27;</span>, test_acc)
                    </div>

                )
            },
            "savingModel":
            {
                "code": `model.save('mnist_model.h5')`,
                "codeHighlighted": (

                    <div
                        className=' border rounded  px-3 py-1 w-full flex-col'
                    >
                        model.save(<span style={{ color: "rgb(181, 189, 104)" }}>&#x27;mnist_model.h5&#x27;</span>)
                    </div>

                )
            }
        }

    }

}
export default data;