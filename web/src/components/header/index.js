'use client';

import { useState, memo } from "react";
import Image from "next/image";
import { api } from "@/lib/api";
import clsx from "clsx";
import Logo from "@/assets/img/logo.png"

import HomeIcon from "@/assets/menu-icons/home-icon.png";
import TeamIcon from "@/assets/menu-icons/team-icon.png";
import ProjectsIcon from "@/assets/menu-icons/projects-icon.png";
import ActivityIcon from "@/assets/menu-icons/activity-icon.png";
import ContactsIcon from "@/assets/menu-icons/contacts-icon.png";


// async function getPosts(params) {
//     return await api.get("/posts")
// }

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleOpenMenu(){
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <div className="header" id="header">
            <header>
                <a href="main.html" className="header-logo">
                    <div className="header-logo-image">
                        <Image src={Logo} alt="Logo" />
                    </div>
                    <div className="header-logo-text">Цифрова кафедра</div>
                </a>

                <div className="burger-btn" onClick={handleOpenMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className={clsx("menu-wrapper", isMenuOpen && "active")}>
                    <nav className={clsx("menu", isMenuOpen && "active")}>
                        <ul>
                            <li><a href="/"><span className="menu-item-text active"><span className="menu-icon"><Image src={HomeIcon} alt="menu item"/></span>Головна</span></a><div className="menu-li-line"></div></li>
                            <li><a href="/team"><span className="menu-item-text"><span className="menu-icon"><Image src={TeamIcon} alt="menu item"/></span>Команда</span></a><div className="menu-li-line"></div></li>
                            <li><a href="/projects"><span className="menu-item-text"><span className="menu-icon"><Image src={ProjectsIcon} alt="menu item"/></span>Проєкти</span></a><div className="menu-li-line"></div></li>
                            <li><a href="/activity"><span className="menu-item-text"><span className="menu-icon"><Image src={ActivityIcon} alt="menu item"/></span>Діяльність</span></a><div className="menu-li-line"></div></li>
                            <li><a href="/contacts"><span className="menu-item-text"><span className="menu-icon"><Image src={ContactsIcon} alt="menu item"/></span>Контакти</span></a><div className="menu-li-line"></div></li>
                        </ul>
                    </nav>
                </div>

                <span className="lang-switcher">UA</span>
            </header>
        </div>
    )

}

export default memo(Header);