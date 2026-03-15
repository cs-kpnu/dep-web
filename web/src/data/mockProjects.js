export const mockProjects = [
  {
    id: "1",
    title: "Digital Learning Hub",
    category: "EdTech",
    categoryLabel: "Освітні технології",
    status: "Завершено",
    coverImage: "/project.png",
    launchDate: "Вересень 2023",
    description:
      "Digital Learning Hub — це інноваційна платформа для об'єднання студентів, викладачів та менторів з ІТ-індустрії. Основна мета проєкту полягає у створенні єдиного цифрового середовища, де кожен учасник освітнього процесу може зручно відслідковувати свій прогрес, отримувати фідбек та брати участь у реальних стартапах.",
    technologies:
      "Проєкт розробляється з використанням сучасного стеку технологій, включаючи React для фронтенду, Node.js та Express для бекенду, а також MongoDB для зберігання даних. Для забезпечення високої продуктивності та масштабованості використовується Docker та Kubernetes. Інтеграція з GitHub/GitLab дозволяє автоматизувати процес оцінки та надання фідбеку студентам.",
    participants: [
      {
        name: "Іванюк Віталій",
        role: "Team Lead",
        profileLink:
          "https://cs.kpnu.edu.ua/2024/09/19/ivaniuk-vitalij-anatolijovych/",
      },
      {
        name: "Мястковськa Маринa",
        role: "Project Manager",
        profileLink:
          "https://cs.kpnu.edu.ua/2019/11/04/miastkovska-maryna-oleksandrivna/",
      },
      {
        name: "Косінов Михайло",
        role: "Developer",
        profileLink:
          "https://cs.kpnu.edu.ua/2024/09/19/kosinov-mykhailo-serhijovych/",
      },
    ],
  },
  {
    id: "2",
    title: "Interest Project",
    category: "Технології",
    categoryLabel: "Технології",
    status: "У розробці",
    coverImage: "/project.png",
    launchDate: "Травень 2024",
    description:
      "Interest Project — експериментальна платформа, спрямована на дослідження нових методів взаємодії користувача з інтерфейсом у реальному часі. Проєкт поєднує можливості машинного навчання та адаптивного UI для персоналізованого досвіду кожного користувача.",
    technologies:
      "Проєкт побудований на базі Next.js та TypeScript для забезпечення типобезпеки і продуктивності. На бекенді використовується FastAPI (Python) у поєднанні з PostgreSQL. Для ML-компонентів застосовується TensorFlow Lite, що дозволяє запускати моделі безпосередньо у браузері.",
    participants: [
      {
        name: "Іванюк Віталій",
        role: "Team Lead",
        profileLink:
          "https://cs.kpnu.edu.ua/2024/09/19/ivaniuk-vitalij-anatolijovych/",
      },
      {
        name: "Мястковськa Маринa",
        role: "Project Manager",
        profileLink:
          "https://cs.kpnu.edu.ua/2019/11/04/miastkovska-maryna-oleksandrivna/",
      },
      {
        name: "Косінов Михайло",
        role: "Developer",
        profileLink:
          "https://cs.kpnu.edu.ua/2024/09/19/kosinov-mykhailo-serhijovych/",
      },
    ],
  },
  {
    id: "3",
    title: "Smart Campus",
    category: "IoT",
    categoryLabel: "Розумна інфраструктура",
    status: "Активний",
    coverImage: "/project.png",
    launchDate: "Лютий 2025",
    description:
      "Smart Campus — система автоматизації університетської інфраструктури на базі IoT-пристроїв. Платформа забезпечує моніторинг аудиторій, управління енергоспоживанням, контроль доступу та аналітику відвідуваності в режимі реального часу для адміністрації та студентів.",
    technologies:
      "Архітектура системи побудована на мікросервісах з використанням Go та gRPC для комунікації між сервісами. Дані з IoT-сенсорів обробляються через Apache Kafka та зберігаються в InfluxDB (time-series). Фронтенд-дашборд реалізований на Vue.js з бібліотекою візуалізації D3.js.",
    participants: [
      {
        name: "Іванюк Віталій",
        role: "Team Lead",
        profileLink:
          "https://cs.kpnu.edu.ua/2024/09/19/ivaniuk-vitalij-anatolijovych/",
      },
      {
        name: "Мястковськa Маринa",
        role: "Project Manager",
        profileLink:
          "https://cs.kpnu.edu.ua/2019/11/04/miastkovska-maryna-oleksandrivna/",
      },
      {
        name: "Косінов Михайло",
        role: "Developer",
        profileLink:
          "https://cs.kpnu.edu.ua/2024/09/19/kosinov-mykhailo-serhijovych/",
      },
    ],
  },
];
