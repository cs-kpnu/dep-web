import Image from "next/image";
import { api } from "@/lib/api";

import MapIcon from "@/assets/icons/map-icon-blue.svg";
import EmailIcon from "@/assets/icons/email-icon-blue.svg";
import PhoneIcon from "@/assets/icons/phone-icon-blue.svg";

import ContactForm from "./ContactForm";
import styles from "./page.module.css";


// async function getPage(params) {
//     try {
//         return await api.get("/pages/2?_embed")
//     } catch (error) {
//         console.error("Error fetching page:", error);
//     }
// }
// async function getPosts(params) {
//     try {
//         return await api.get("/posts?_embed&per_page=3")
//     } catch (error) {
//         console.error("Error fetching posts:", error);
//     }
// }

export async function generateMetadata() {
    return {
        title: "Цифрова кафедра! Навчайся. Cтворюй. Надихай!",
        description: "Цифрова кафедра — це платформа для об'єднання студентської IT-спільноти. Наша діяльність зосереджена на подоланні розриву між теоретичною підготовкою та її практичним застосуванням. Ми реалізуємо соціально значущі IT-рішення, посилюючи громадянську позицію молоді, та формуємо партнерство з провідними технічними спеціалістами й організаціями галузі.",
        type: "website",
    };
}

export default async function Home() {
    // const posts = await getPosts()
    // const page = await getPage();
    // console.log(posts, "posts")
    // console.log('sasha', page)
    return (
        <main className={styles.main}>
            <h1 className={styles['title1']}>Лишаємось на зв'язку</h1>
            <div className={styles['after-title-text']}>Ми завжди відкриті до нових ідей, співпраці та запитань.<br />
                Оберіть напрямок вашого звернення у формі нижче, щоб ми могли якнайшвидше<br /> надати вам актуальну інформацію або
                розглянути вашу пропозицію.<br />
                Ваші кроки до цифрових змін починаються тут!</div>
            <section className={styles['contacts-form']}>
                <ContactForm />
            </section>
        </main>
    );
}
