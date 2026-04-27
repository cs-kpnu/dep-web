const PERSONAL_PAGE_BASE_URL = `${process.env.NEXT_PUBLIC_SITE_URL}/team`
export const mockProjects = [
    {
    id: "1",
    title: "Nexus",
    category: "Management",
    categoryLabel: "Освітні технології",
    status: "Завершено",
    coverImage: "/projects-images/nexus.png",
    launchDate: "Вересень 2025",
    description:
      "Рішення створене для перетворення хаосу студентських розробок на структурований інженерний процес. Ми побудували «цифровий фундамент», який дозволяє миттєво розгортати професійне робоче середовище, об’єднуючи контроль за документацією, централізовану комунікацію та єдині стандарти керування кодом. Система забезпечує структурований підхід роботи від ідеї до реалізації, дозволяючи за лічені хвилини створити все необхідне для нових проєктів: від структурованих сховищ документації до налаштованих GitHub-репозиторіїв. Nexus гарантує прозорість процесів та дозволяє командам фокусуватися на створенні продукту, забезпечуючи учасникам миттєвий доступ до всіх артефактів проєкту.",
    technologies:
      "Проєкт розробляється за допомогою No-code рішень, включаючи Google Workspace для створення, підтримки та доступу до артефактів проєктів, Discord - для комунікації. Доступ та реалізація коду здійснюється з урахуванням актуальних DevOps практик за допомогою Github.",
    participants: [
      {
        name: "Іванюк Віталій",
        role: "Team Lead",
        profileLink:
          PERSONAL_PAGE_BASE_URL+"/1",
      },
      {
        name: "Мястковськa Маринa",
        role: "Project Manager",
        profileLink:
          PERSONAL_PAGE_BASE_URL+"/2",
      },
      {
        name: "Косінов Михайло",
        role: "Engineer",
        profileLink:
          PERSONAL_PAGE_BASE_URL+"/3",
      },
      {
        name: "Макуш Валерія",
        role: "Engineer",
        profileLink:
          PERSONAL_PAGE_BASE_URL+"/6",
      },
      {
        name: "Демченко Дмитро",
        role: "Engineer",
        profileLink:
          PERSONAL_PAGE_BASE_URL+"/4",
      },
        {
        name: "Гумельник Анатолій",
        role: "Engineer",
        profileLink:
          PERSONAL_PAGE_BASE_URL+"/5",
      },
    ],
  },
  {
    id: "2",
    title: "Fight Synk",
    category: "SportsTech",
    categoryLabel: "Спорт",
    status: "Активний",
    coverImage: "/projects-images/fight-synk.png",
    launchDate: "Травень 2025",
    description:
      "Платформа для федерацій бойових мистецтв, що автоматизує ключові процеси організації змагань. Система дозволяє автоматично формувати пари поєдинків із поданих заявок, керувати регламентами та розкладом подій. У майбутньому проєкт стане екосистемою для ведення детальної статистики спортсменів, їхніх рейтингів та глибокої аналітики результатів боїв.",
    technologies:
      "Проєкт побудований на сучасному стеку JavaScript (ES6+). Фронтенд реалізовано на Next.js із використанням Tailwind CSS для адаптивного дизайну. Управління контентом та даними здійснюється через Strapi CMS, а стабільне розгортання забезпечує платформа Vercel.",
    participants: [
      {
        name: "Пилипенко Олександр", 
        role: "Developer",
        profileLink: PERSONAL_PAGE_BASE_URL + "/22", //TODO: САНЯ ДОДАЙ СВОЮ CV і зміни якщо щось не так зробив тут :)
      },
    ],
  },
  // {
  //   id: "3",
  //   title: "Digital Learning Hub",
  //   category: "EdTech",
  //   categoryLabel: "Освітні технології",
  //   status: "В роботі",
  //   coverImage: "/dl-hub.png",
  //   launchDate: "Травень 2025",
  //   description:
  //     "Інтегроване освітнє середовище, що трансформує взаємодію здобувачів освіти з університетом. Платформа автоматизує вибір дисциплін, моніторинг навчального прогресу та розподіл навантаження. Завдяки централізації даних, студенти отримують зручний доступ до своїх ІНП, оцінок та можливість швидкого контакту з викладачами через екосистему Google.",
  //   technologies:
  //     "Мобільна та веб-платформа розробляється на Flutter (Dart), що забезпечує кросплатформенність. Хмарна інфраструктура та база даних реалізовані на Firebase, а інтеграція з сервісами Google Workspace дозволяє автоматизувати академічну комунікацію та документообіг.",
  //   participants: [
  //     {
  //       name: "Іванюк Віталій",
  //       role: "Team Lead",
  //       profileLink: PERSONAL_PAGE_BASE_URL + "/ivanyuk-vitalii",
  //     },
  //     {
  //       name: "Мястковська Марина",
  //       role: "Project Manager",
  //       profileLink: PERSONAL_PAGE_BASE_URL + "/miastkovska-maryna",
  //     },
  //     {
  //       name: "Косінов Михайло",
  //       role: "Engineer / Tester",
  //       profileLink: PERSONAL_PAGE_BASE_URL + "/kosinov-mykhailo",
  //     },
  //   ],
  // },
  {
    id: "3",
    title: "Adaptive Web Testing Model",
    category: "Automation",
    categoryLabel: "Автоматизація тестування",
    status: "Підтримка",
    coverImage: "/projects-images/adaptive_testing_model.png",
    launchDate: "Вересень 2025",
    description:
      "Масштабована архітектурна модель для комплексного тестування адаптивних вебзастосунків. Вона забезпечує перевірку працездатності продуктів на різних типах пристроїв (web, mobile, tablet). Завдяки підходу Clean Code та багатопотоковому виконанню тестів, модель суттєво скорочує час на регресійне тестування та гарантує високу якість фінального продукту.",
    technologies:
      "Рішення базується на JavaScript та фреймворку Playwright. Процес безперервного тестування (Continuous Testing) автоматизовано через GitHub Actions. Для візуалізації результатів та аналізу помилок інтегрована система розширеної звітності Allure.",
    participants: [
      {
        name: "Мястковськa Маринa",
        role: "Project Manager",
        profileLink:
          PERSONAL_PAGE_BASE_URL+"/2",
      },
      {
        name: "Іванюк Віталій",
        role: "Consultant",
        profileLink:
          PERSONAL_PAGE_BASE_URL+"/1",
      },
      {
        name: "Косінов Михайло",
        role: "Developer",
        profileLink: PERSONAL_PAGE_BASE_URL + "/3",
      },
    ],
  },
    {
    id: "4",
    title: "TextLogic AI",
    category: "Data Analytics, EdTech",
    categoryLabel: "Data Analytics, EdTech",
    status: "Активний",
    coverImage: "/projects-images/youth-pulse.png",
    launchDate: "Жовтень 2025",
    description:
      `ВTextLogic AI — це автономний програмно-аналітичний комплекс, що приймає великі масиви неструктурованих текстових даних (відгуки, результати опитувань, тікети) та автоматично генерує стратегічні звіти за допомогою великих мовних моделей (LLM). Проєкт ефективно усуває проблему ручної праці, перетворюючи «текстовий хаос» на готові аналітичні інсайти менш ніж за 60 секунд. Практична апробація системи та її робота в інфраструктурі університету доступні за посиланням: analytics.cs.kpnu.edu.ua.`,
    technologies:
      "Архітектура застосунку та швидкісний бекенд побудовані на мові програмування Python з використанням фреймворку FastAPI. Інтелектуальне ядро реалізоване через глибоку інтеграцію з API Gemini для розуміння контексту тексту, семантичного кластерування та генерації фінальних документів. Клієнтська частина та інтерактивний дашборд розроблені за допомогою React та Bootstrap.",
    participants: [
      {
        name: "Іванюк Віталій",
        role: "Mentor",
        profileLink:
          PERSONAL_PAGE_BASE_URL+"/1",
      },
      {
        name: "Демченко Дмитро",
        role: "Developer",
        profileLink: PERSONAL_PAGE_BASE_URL + "/4",
      },
      {
        name: "Гумельник Анатолій",
        role: "Developer",
        profileLink: PERSONAL_PAGE_BASE_URL + "/5",
      },
    ],
  },
{
  id: "5",
  title: "Цифрова кафедра",
  category: "EdTech/TalentTech",
  categoryLabel: "EdTech, TalentTech",
  status: "Активний",
  coverImage: "/projects-images/digital-department.png",
  launchDate: "Жовтень 2024",
  description: "Проєкт «Цифрова кафедра» — це інноваційний освітній простір та головний проєкт студентського гуртка кафедри комп'ютерних наук К-ПНУ імені Івана Огієнка.\n Основна мета — розвиток практичних навичок студентів та формування мосту між академічною освітою і реальними вимогами ІТ-ринку. В межах екосистеми створюються та впроваджуються цифрові освітні рішення, університетські системи та перспективні стартапи.",
  technologies: "Використовується гнучкий стек сучасних технологій: хмарні інфраструктури, AI-рішення, веб- та мобільна розробка, а також інструменти управління R&D-проєктами. Це дозволяє адаптувати технології під кожен проєкт і відповідати стандартам ІТ-індустрії.",
  participants: [
    {
      name: "Учасники гуртка",
      role: "Team Members"
      // profileLink: "PERSONAL_PAGE_BASE_URL"
    }
  ]
},
{
  id: "6",
  title: "YouthForce",
  category: "HRTech/EdTech",
  categoryLabel: "HR Tech, EdTech",
  status: "Активний",
  coverImage: "/projects-images/youthforce.png",
  launchDate: "Жовтень 2025",
  description: "YouthForce — це цифрова екосистема портфоліо студента для верифікації навичок та досягнень. Платформа трансформує участь у R&D-проєктах, волонтерстві та хакатонах у прозорий рейтинг, допомагаючи студентам подолати бар'єр відсутності досвіду. Це ефективний інструмент взаємодії між студентами та роботодавцями.",
  technologies: "Клієнтська частина побудована на Flutter для кросплатформної роботи (Web, iOS, Android). Backend реалізовано через Firebase (Firestore, Auth, Storage). Бізнес-логіка та інтеграції виконуються через Cloud Functions.",
  participants: [
    {
      name: "Смотриковський Леонід",
      role: "Developer",
      profileLink: PERSONAL_PAGE_BASE_URL + "/5"
    },
    {
      name: "Некрасова Юліана",
      role: "Developer",
      profileLink: PERSONAL_PAGE_BASE_URL + "/6"
    },
    {
      name: "Політов Артем",
      role: "Developer",
      profileLink: PERSONAL_PAGE_BASE_URL + "/12"
    }
  ]
},
{
  id: "7",
  title: "Mathmaze",
  category: "EdTech/GameDev",
  categoryLabel: "EdTech, GameDev",
  status: "Активний",
  coverImage: "/projects-images/mathmaze.png",
  launchDate: "Жовтень 2025",
  description: "Mathmaze — це гейміфікований симулятор для вивчення математики, який адаптується до рівня учня. Завдяки ігровим механікам та алгоритмам адаптивного навчання платформа робить навчання інтерактивним, підтримує мотивацію та допомагає ефективно засвоювати матеріал.",
  technologies: "Frontend реалізовано з використанням Unity WebGL або React + Phaser.js для кросплатформного доступу. Backend побудований на хмарних сервісах і NoSQL базах даних. Використовується алгоритмічне ядро для генерації завдань і адаптації складності.",
  participants: [
    {
      name: "Білоус Ілля",
      role: "Developer",
      profileLink: PERSONAL_PAGE_BASE_URL + "/7"
    }
  ]
}
  // {
  //   id: "1111",
  //   title: "Digital Learning Hub",
  //   category: "EdTech",
  //   categoryLabel: "Освітні технології",
  //   status: "Завершено",
  //   coverImage: "/project.png",
  //   launchDate: "Вересень 2023",
  //   description:
  //     "Digital Learning Hub - це інноваційна платформа для об'єднання студентів, викладачів та менторів з ІТ-індустрії. Основна мета проєкту полягає у створенні єдиного цифрового середовища, де кожен учасник освітнього процесу може зручно відслідковувати свій прогрес, отримувати фідбек та брати участь у реальних стартапах.",
  //   technologies:
  //     "Проєкт розробляється з використанням сучасного стеку технологій, включаючи React для фронтенду, Node.js та Express для бекенду, а також MongoDB для зберігання даних. Для забезпечення високої продуктивності та масштабованості використовується Docker та Kubernetes. Інтеграція з GitHub/GitLab дозволяє автоматизувати процес оцінки та надання фідбеку студентам.",
  //   participants: [
  //     {
  //       name: "Іванюк Віталій",
  //       role: "Team Lead",
  //       profileLink:
  //         "https://cs.kpnu.edu.ua/2024/09/19/ivaniuk-vitalij-anatolijovych/",
  //     },
  //     {
  //       name: "Мястковськa Маринa",
  //       role: "Project Manager",
  //       profileLink:
  //         "https://cs.kpnu.edu.ua/2019/11/04/miastkovska-maryna-oleksandrivna/",
  //     },
  //     {
  //       name: "Косінов Михайло",
  //       role: "Developer",
  //       profileLink:
  //         "https://cs.kpnu.edu.ua/2024/09/19/kosinov-mykhailo-serhijovych/",
  //     },
  //   ],
  // },
  // {
  //   id: "2",
  //   title: "Interest Project",
  //   category: "Технології",
  //   categoryLabel: "Технології",
  //   status: "У розробці",
  //   coverImage: "/project.png",
  //   launchDate: "Травень 2024",
  //   description:
  //     "Interest Project - експериментальна платформа, спрямована на дослідження нових методів взаємодії користувача з інтерфейсом у реальному часі. Проєкт поєднує можливості машинного навчання та адаптивного UI для персоналізованого досвіду кожного користувача.",
  //   technologies:
  //     "Проєкт побудований на базі Next.js та TypeScript для забезпечення типобезпеки і продуктивності. На бекенді використовується FastAPI (Python) у поєднанні з PostgreSQL. Для ML-компонентів застосовується TensorFlow Lite, що дозволяє запускати моделі безпосередньо у браузері.",
  //   participants: [
  //     {
  //       name: "Іванюк Віталій",
  //       role: "Team Lead",
  //       profileLink:
  //         "https://cs.kpnu.edu.ua/2024/09/19/ivaniuk-vitalij-anatolijovych/",
  //     },
  //     {
  //       name: "Мястковськa Маринa",
  //       role: "Project Manager",
  //       profileLink:
  //         "https://cs.kpnu.edu.ua/2019/11/04/miastkovska-maryna-oleksandrivna/",
  //     },
  //     {
  //       name: "Косінов Михайло",
  //       role: "Developer",
  //       profileLink:
  //         "https://cs.kpnu.edu.ua/2024/09/19/kosinov-mykhailo-serhijovych/",
  //     },
  //   ],
  // },
  // {
  //   id: "3",
  //   title: "Smart Campus",
  //   category: "IoT",
  //   categoryLabel: "Розумна інфраструктура",
  //   status: "Активний",
  //   coverImage: "/project.png",
  //   launchDate: "Лютий 2025",
  //   description:
  //     "Smart Campus - система автоматизації університетської інфраструктури на базі IoT-пристроїв. Платформа забезпечує моніторинг аудиторій, управління енергоспоживанням, контроль доступу та аналітику відвідуваності в режимі реального часу для адміністрації та студентів.",
  //   technologies:
  //     "Архітектура системи побудована на мікросервісах з використанням Go та gRPC для комунікації між сервісами. Дані з IoT-сенсорів обробляються через Apache Kafka та зберігаються в InfluxDB (time-series). Фронтенд-дашборд реалізований на Vue.js з бібліотекою візуалізації D3.js.",
  //   participants: [
  //     {
  //       name: "Іванюк Віталій",
  //       role: "Team Lead",
  //       profileLink:
  //         "https://cs.kpnu.edu.ua/2024/09/19/ivaniuk-vitalij-anatolijovych/",
  //     },
  //     {
  //       name: "Мястковськa Маринa",
  //       role: "Project Manager",
  //       profileLink:
  //         "https://cs.kpnu.edu.ua/2019/11/04/miastkovska-maryna-oleksandrivna/",
  //     },
  //     {
  //       name: "Косінов Михайло",
  //       role: "Developer",
  //       profileLink:
  //         "https://cs.kpnu.edu.ua/2024/09/19/kosinov-mykhailo-serhijovych/",
  //     },
  //   ],
  // },
];
