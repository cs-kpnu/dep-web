import Image from "next/image";
import clsx from "clsx";
import { api } from "@/lib/api";
import Header from "@/components/header";
import Footer from "@/components/footer";

import BubbleImage from "@/assets/img/main-section-bubble.png";
import MainImage from "@/assets/img/mission-section-image.png";
import YoutIMage from "@/assets/img/yout_force.png";
import styles from "./page.module.css";


async function getPage(params) {
    try {
        return await api.get("/pages/2?_embed")
    } catch (error) {
        console.error("Error fetching page:", error);
    }
}
async function getPosts(params) {
    try {
        return await api.get("/posts?_embed&per_page=3")
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}

export async function generateMetadata() {
    return {
        title: "Цифрова кафедра! Навчайся. Cтворюй. Надихай!",
        description: "Цифрова кафедра — це платформа для об'єднання студентської IT-спільноти. Наша діяльність зосереджена на подоланні розриву між теоретичною підготовкою та її практичним застосуванням. Ми реалізуємо соціально значущі IT-рішення, посилюючи громадянську позицію молоді, та формуємо партнерство з провідними технічними спеціалістами й організаціями галузі.",
        type: "website",
    };
}

export default async function Home() {
    const posts = await getPosts()
    const page = await getPage();
    console.log(posts, "posts")
    console.log('sasha', page)
    return (

        <main className={styles.main}>
            <h1>Contact page</h1>
        </main>
    );
}
