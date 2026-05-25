/*
 * temporary dev images imports for testing purposes
 * TODO: delete after implementation
 * */
import CementImage from "../../assets/activity-images/cement.jpg";
import EgapIdeatonImage from "../../assets/activity-images/Egap_ideaton.png";
import WorkProcessImage from "../../assets/activity-images/Work_process.jpg";

export const mockData = [
  {
    id: "3",
    title: "Цифрова кафедра: робота за будь-яких умов",
    category: "РОБОЧИЙ ПРОЦЕС",
    date: "12.12.2025",
    rawDate: new Date(2026, 3, 3), // Для фільтрації (місяці в JS починаються з 0)
    description:
      "Навіть попри постійні вимкнення електроенергії проблемна група “Цифрова кафедра” продовжує свою роботу у звичному режимі...",
    author: "Юліана Некрасова",
    publishedAt: "12.12.2025, 14:30",
    imageUrl: WorkProcessImage,
    links: [
      {
        text: "Посилання на публікацію",
        url: "https://cs.kpnu.edu.ua/2025/12/12/tsyfrova-kafedra-robota-za-bud-iakykh-umov/",
      },
    ],
  },
  {
    id: "1",
    title: "ЕКСКУРСІЯ НА АТ «ПОДІЛЬСЬКИЙ ЦЕМЕНТ»",
    category: "ЕКСКУРСІЯ",
    date: "30.10.2025",
    rawDate: new Date(2026, 3, 3), // Для фільтрації (місяці в JS починаються з 0)
    description:
      "Здобувачі вищої освіти кафедри комп'ютерних наук разом із викладачами фізико-математичного факультету здійснили важливу виробничу екскурсію...",
    author: "Юліана Некрасова",
    publishedAt: "30.10.2025, 14:30",
    imageUrl: CementImage,
    links: [
      {
        text: "Посилання на публікацію",
        url: "https://cs.kpnu.edu.ua/2025/10/30/ekskursiia-na-at-podilskyj-tsement/",
      },
    ],
  },
  {
    id: "2",
    title: "EGAP IDEATHON 2025",
    category: "OCBITA",
    date: "20.10.2025",
    rawDate: new Date(2025, 9, 15),
    description:
      "Учасники наукового гуртка 'Цифрова кафедра' взяли активну участь у EGAP Ideathon 2025 - національному ідеатоні з розробки нових сервісів...",
    author: "Юліана Некрасова",
    publishedAt: "20.10.2025, 14:30",
    imageUrl: EgapIdeatonImage,
    links: [
      {
        text: "Посилання на публікацію",
        url: "https://cs.kpnu.edu.ua/2025/10/20/kafedra-komp-iuternykh-nauk-na-egap-ideathon-2025/",
      },
    ],
  },

  // // Генерація для тесту пагінації (всі минулорічні)
  // ...Array.from({ length: 30 }, (_, i) => ({
  //     id: (i + 3).toString(),
  //     title: `Подія ${i + 3}`,
  //     category: "OCBITA",
  //     date: "12.10.2024",
  //     rawDate: new Date(2024, 9, 12),
  //     description: "Опис чергової важливої події, що відбулася в рамках діяльності кафедри або університету...",
  //     author: "Юліана Некрасова",
  //     publishedAt: "14.10.2024, 14:30",
  //     imageUrl: Project3Image,
  //     links: [{ text: "Посилання 1", url: "https://cs.kpnu.edu.ua/2025/10/30/ekskursiia-na-at-podilskyj-tsement/" }]
  // }))
];
