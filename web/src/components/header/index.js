'use client';

import { useState, memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { routes } from "@/constants";
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

const menuItems = [
    { name: "Головна", link: routes.home, icon: HomeIcon },
    { name: "Команда", link: routes.team, icon: TeamIcon },
    { name: "Проєкти", link: routes.projects, icon: ProjectsIcon },
    { name: "Діяльність", link: routes.activity, icon: ActivityIcon },
    { name: "Контакти", link: routes.contacts, icon: ContactsIcon }
];

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleOpenMenu(){
        setIsMenuOpen(!isMenuOpen);
    }

    function handleCloseMenu(){
      setTimeout(() => {
          setIsMenuOpen(false)
      }, 400);
    }
    return (
        <div className="header" id="header">
            <header>
                <Link href="/" className="header-logo">
                    <div className="header-logo-image">
                        <Image src={Logo} alt="Logo" />
                    </div>
                    <div className="header-logo-text">Цифрова кафедра</div>
                </Link>

                <div className="burger-btn" onClick={handleOpenMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
 
                <div className={clsx("menu-wrapper", isMenuOpen && "active")}>
                    <nav className={clsx("menu", isMenuOpen && "active")}>
                        <ul>{menuItems.map((item) => (
                            <li key={item.name} onClick={handleCloseMenu}>
                                <Link href={item.link}>
                                    <span className="menu-item-text">
                                        <span className="menu-icon">
                                            <Image src={item.icon} alt="menu item"/>
                                        </span>
                                        {item.name}
                                    </span>
                                </Link>
                                <div className="menu-li-line"></div>
                            </li>
                        ))}</ul>
                        {/* <ul>
                            
                            <li><Link href="/"><span className="menu-item-text active"><span className="menu-icon"><Image src={HomeIcon} alt="menu item"/></span>Головна</span></Link><div className="menu-li-line"></div></li>
                            <li><Link href="/team"><span className="menu-item-text"><span className="menu-icon"><Image src={TeamIcon} alt="menu item"/></span>Команда</span></Link><div className="menu-li-line"></div></li>
                            <li><Link href="/projects"><span className="menu-item-text"><span className="menu-icon"><Image src={ProjectsIcon} alt="menu item"/></span>Проєкти</span></Link><div className="menu-li-line"></div></li>
                            <li><Link href="/activity"><span className="menu-item-text"><span className="menu-icon"><Image src={ActivityIcon} alt="menu item"/></span>Діяльність</span></Link><div className="menu-li-line"></div></li>
                            <li><Link href="/contacts"><span className="menu-item-text"><span className="menu-icon"><Image src={ContactsIcon} alt="menu item"/></span>Контакти</span></Link><div className="menu-li-line"></div></li>
                        </ul> */}
                    </nav>
                </div>

                <span className="lang-switcher">UA</span>
            </header>
        </div>
    )

}

export default memo(Header); 