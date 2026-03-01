import Image from "next/image";
import clsx from "clsx";
import { api } from "@/lib/api";

import TextImg from "@/assets/img/Text.svg";
import FiltermarkImg from "@/assets/icons/filtermark.svg";
import MapIcon from "@/assets/icons/map-icon-blue.svg";
import EmailIcon from "@/assets/icons/email-icon-blue.svg";
import PhoneIcon from "@/assets/icons/phone-icon-blue.svg";

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
            <h1 className={styles['title1']}>Лишаємось на зв'язку</h1>
            <div className={styles['after-title-text']}>Ми завжди відкриті до нових ідей, співпраці та запитань.<br />
                Оберіть напрямок вашого звернення у формі нижче, щоб ми могли якнайшвидше<br /> надати вам актуальну інформацію або
                розглянути вашу пропозицію.<br />
                Ваші кроки до цифрових змін починаються тут!</div>
            <section className={styles['contacts-form']}>
                <label className={styles['label']}>ТИП ЗВЕРНЕННЯ</label>
                <div className={styles['filter-box']}>
                    <div className={styles['filter-selected']}>
                        <span className={styles['selected-text']}>Оберіть тип звернення</span>
                        <Image src={FiltermarkImg} className={styles['filtermark']} alt="Filter image" />
                    </div>
                    <div className={styles['filter-option']}>
                        <div className={styles['option']}>
                            <input type="radio" className={styles['radio']} id="order" name="type" />
                            <label htmlFor="order">Запит на послуги</label>
                        </div>
                        <div className={styles['option']}>
                            <input type="radio" className={styles['radio']} id="join" name="type" />
                            <label htmlFor="join">Приєднуйтесь до команди</label>
                        </div>
                        <div className={styles['option']}>
                            <input type="radio" className={styles['radio']} id="other" name="type" />
                            <label htmlFor="other">Інший запит</label>
                        </div>
                    </div>
                </div>
                <form className={styles['form']}>
                    <label htmlFor="name">Ім'я<Image className={styles.img} src={TextImg} alt="Text" /></label>
                    <input type="text" id="name" name="name" placeholder="Введіть ваше ім'я" required />
                    <label htmlFor="surname">Прізвище<Image className={styles.img} src={TextImg} alt="Text" /></label>
                    <input type="text" id="surname" name="surname" placeholder="Введіть ваше прізвище" required />
                    <label htmlFor="email">Адреса електронної пошти<Image className={styles.img} src={TextImg} alt="Text" /></label>
                    <input type="email" id="email" name="email" placeholder="your.email@example.com" required />
                    <label htmlFor="phone-num">Мобільний телефон</label>
                    <input type="tel" id="phone-num" name="phone-num" placeholder="+38 XX XXX XX XX" required />

                    <label htmlFor="message">Зміст послуги на яку створюється запит<Image className={styles.img} src={TextImg} alt="Text" /></label>
                    <textarea id="message" name="message" required></textarea>
                    <div className={styles['checkbox-container']}>
                        <input type="checkbox" id="checkbox" name="checkbox" required />
                        <label htmlFor="checkbox">Надаю згоду на обробку персональних даних</label>
                    </div>
                    <button className={styles['form-button']} type="submit">Надіслати</button>
                </form>
            </section>
            <section className={styles['contact-info']}>
                <h2 className={styles['title2']}>Контакти</h2>
                <div className={styles['contact-container']}>
                    <div className={styles['contact-item1']}>
                        <Image src={MapIcon} alt="Location" />
                        <div className={styles['contact-item-half']}>
                            <div className={styles['contact-label']}>АДРЕСА</div>
                            <div className={styles['contact-item-text']}>32301, Україна, Хмельницька область, м. Кам’янець-Подільський, <br /> вул. Симона
                                Петлюри, 1, пов. 4, каб. 44</div>
                        </div>
                    </div>
                    <div className={styles['contact-item1']}>
                        <Image src={EmailIcon} alt="Email" />
                        <div className={styles['contact-item-half']}>
                            <div className={styles['contact-label']}>ЕЛЕКТРОННА ПОШТА</div>
                            <div className={styles['contact-item-text']}>digital.department@kpnu.edu.ua</div>
                        </div>
                    </div>
                    <div className={styles['contact-item1']}>
                        <Image src={PhoneIcon} alt="Phone" />
                        <div className={styles['contact-item-half']}>
                            <div className={styles['contact-label']}>НОМЕР ТЕЛЕФОНУ</div>
                            <div className={styles['contact-item-text']}>+38 (044) 123 45 67</div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
