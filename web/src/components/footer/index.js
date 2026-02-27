import Image from "next/image";
import { api } from "@/lib/api";
import clsx from "clsx";

import Logo from "@/assets/img/logo.png"
import MapIcon from "@/assets/contact-icons/map-icon.png";
import MailIcon from "@/assets/contact-icons/mail-icon.png";
import PhoneIcon from "@/assets/contact-icons/phone-icon.png";

import Instagram from "@/assets/social-media-icons/instagram-icon.png";
import TikTok from "@/assets/social-media-icons/tiktok-icon.png";
import Facebook from "@/assets/social-media-icons/facebook-icon.png";
import LinkedIn from "@/assets/social-media-icons/linkedin-icon.png";

import styles from "./style.module.css";

// async function getPosts(params) {
//     return await api.get("/posts")
// }

export default async function Footer() {
    return (
        <div id="footer"><footer>
            <div className="footer-main">
                <div className="footer-content">
                    <div className="footer-content-column">
                        <div className="footer-logo">
                            <div className="logo-image">
                                <Image src={Logo} alt="Logo" />

                            </div>
                            <div className="logo-text">
                                <div className="logo-text-title">“Цифрова кафедра”</div>
                                <div className="logo-text-subtitle">кафедри комп’ютерних наук КПНУ ім. Івана Огієнка</div>
                            </div>
                        </div>
                        <div className="social-media">
                            <a href="https://www.instagram.com/cs_kpnu" target="_blank" className="instagram">
                                <Image src={Instagram} alt="Instagram" />
                            </a>
                            <a href="https://www.tiktok.com/@cs_kpnu" target="_blank" className="tiktok">
                                <Image src={TikTok} alt="TikTok" />
                            </a>
                            <a href="https://www.facebook.com/cs.kpnu" target="_blank" className="facebook">
                                <Image src={Facebook} alt="Facebook" />
                            </a>
                            <a href="https://ua.linkedin.com/company/cs-kpnu" target="_blank" className="linkedin">
                                <Image src={LinkedIn} alt="LinkedIn" />
                            </a>
                        </div>
                    </div>
                    <div className="footer-content-column">
                        <div className="footer-useful-links">
                            <div className="footer-useful-links-title">Корисні посилання</div>
                            <a href="/main">Головна</a>
                            <a href="/team">Команда</a>
                            <a href="/projects">Проєкти</a>
                            <a href="/activities">Діяльність</a>
                            <a href="/contacts">Контакти</a>
                        </div>
                    </div>
                    <div className="footer-content-column">
                        <div className="footer-contacts-title">Контакти</div>
                        <a className="contact-item" href="https://maps.app.goo.gl/D1QAXSy6cu2XuP7g9" target="_blank">
                            <div className="contact-item-icon map">
                                <Image src={MapIcon} alt="Location" />
                            </div>
                            <div className="contact-item-text">32301, Україна, Хмельницька область, м. Кам’янець-Подільський, вул. Симона Петлюри, 1, пов. 4, каб. 44</div>
                        </a>
                        <a className="contact-item" href="mailto:digitaldepartment@kpnu.edu.ua">
                            <div className="contact-item-icon mail">
                                <Image src={MailIcon} alt="Email" />
                            </div>
                            <div className="contact-item-text">cs.dev@kpnu.edu.ua</div>
                        </a>
                        <a className="contact-item" href="tel: +38 (068) 746 33 28">
                            <div className="contact-item-icon phone">
                                <Image src={PhoneIcon} alt="Phone" />
                            </div>
                            <div className="contact-item-text">+38 (097) 805 14 01</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="copyright-text">© 2025 Кафедра комп'ютерних наук. Усі права захищені.</div>
            </div>
        </footer>
        </div>
    )
}