import Image from "next/image";
import { api } from "@/lib/api";
import clsx from "clsx";
import Logo from "@/assets/img/logo.png"


// async function getPosts(params) {
//     return await api.get("/posts")
// }

export default async function Header() {
    return (
        <div className="header" id="header">
            <header>
                <a href="main.html" className="header-logo">
                    <div className="header-logo-image">
                        <Image src={Logo} alt="Logo" />
                    </div>
                    <div className="header-logo-text">Цифрова кафедра</div>
                </a>

                <div className="burger-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className="menu-wrapper">
                    <nav className="menu">
                        <ul>
                            <li><a href="/"><div className="menu-item-text active"><div className="menu-icon"><img src="@/assets/menu-icons/home-icon.png" alt="Home" /></div>Головна</div></a><div className="menu-li-line"></div></li>
                            <li><a href="/team"><div className="menu-item-text"><div className="menu-icon"><img src="@/assets/menu-icons/team-icon.png" alt="Team" /></div>Команда</div></a><div className="menu-li-line"></div></li>
                            <li><a href="/projects"><div className="menu-item-text"><div className="menu-icon"><img src="@/assets/menu-icons/projects-icon.png" alt="Projects" /></div>Проєкти</div></a><div className="menu-li-line"></div></li>
                            <li><a href="/activity"><div className="menu-item-text"><div className="menu-icon"><img src="@/assets/menu-icons/activity-icon.png" alt="Activity" /></div>Діяльність</div></a><div className="menu-li-line"></div></li>
                            <li><a href="/contacts"><div className="menu-item-text"><div className="menu-icon"><img src="@/assets/menu-icons/contacts-icon.png" alt="Contacts" /></div>Контакти</div></a><div className="menu-li-line"></div></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )

}