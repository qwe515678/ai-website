import { Variants } from "framer-motion";

const data = {
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
        "eventsVariants": {
            "closed": {
                opacity: 0,
                // translateX: 20,
                // scaleY: 0.9
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
        } as Variants
    }

}
export default data;