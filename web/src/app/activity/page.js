'use client'

import styles from "./page.module.css";
import { useState, useMemo } from "react";
import EventCard from "@/components/eventCard"; // Твій новий компонент
import Pagination from "@/components/paginator";
import clsx from "clsx";

/*
* temporary dev images imports for testing purposes
* TODO: delete after implementation
* */
import Project1Image from "../../assets/project-images/project1.svg"
import Project2Image from "../../assets/project-images/project2.svg"
import Project3Image from "../../assets/project-images/project3.svg"

export default function EventsPage() {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState('За весь час');
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const options = ['За останній місяць', 'За останній рік', 'За весь час'];

    // Mock-дані для подій
    const mockEvents = useMemo(() => [
        {
            id: "1",
            title: "ЕКСКУРСІЯ НА АТ «ПОДІЛЬСЬКИЙ ЦЕМЕНТ»",
            category: "ПОДОРОЖ",
            date: "15.10.2024",
            rawDate: new Date(2026, 3, 3), // Для фільтрації (місяці в JS починаються з 0)
            description: "Здобувачі вищої освіти кафедри комп'ютерних наук разом із викладачами фізико-математичного факультету здійснили важливу виробничу екскурсію...",
            author: "Юліана Некрасова",
            publishedAt: "02.03.2026, 14:30",
            imageUrl: Project1Image,
            links: [{ text: "Посилання 1", url: "https://cs.kpnu.edu.ua/2025/10/30/ekskursiia-na-at-podilskyj-tsement/" }]
        },
        {
            id: "2",
            title: "EGAP IDEATHON 2025",
            category: "OCBITA",
            date: "15.10.2024",
            rawDate: new Date(2025, 9, 15),
            description: "Учасники наукового гуртка 'Цифрова кафедра' взяли активну участь у EGAP Ideathon 2025 - національному ідеатоні з розробки нових сервісів...",
            author: "Юліана Некрасова",
            publishedAt: "20.09.2024, 14:30",
            imageUrl: Project3Image,
            links: [{ text: "Посилання 1", url: "https://cs.kpnu.edu.ua/2025/10/20/kafedra-komp-iuternykh-nauk-na-egap-ideathon-2025/" }]
        },
        // Генерація для тесту пагінації (всі минулорічні)
        ...Array.from({ length: 30 }, (_, i) => ({
            id: (i + 3).toString(),
            title: `Подія ${i + 3}`,
            category: "OCBITA",
            date: "12.10.2024",
            rawDate: new Date(2024, 9, 12),
            description: "Опис чергової важливої події, що відбулася в рамках діяльності кафедри або університету...",
            author: "Юліана Некрасова",
            publishedAt: "14.10.2024, 14:30",
            imageUrl: Project3Image,
            links: [{ text: "Посилання 1", url: "https://cs.kpnu.edu.ua/2025/10/30/ekskursiia-na-at-podilskyj-tsement/" }]
        }))
    ], []);

    // Фільтрація за часом та пошуком
    const filteredEvents = useMemo(() => {
        const now = new Date();
        return mockEvents.filter(event => {
            const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());

            let matchesTime = true;
            if (selected === 'За останній місяць') {
                const monthAgo = new Date().setMonth(now.getMonth() - 1);
                matchesTime = event.rawDate >= monthAgo;
            } else if (selected === 'За останній рік') {
                const yearAgo = new Date().setFullYear(now.getFullYear() - 1);
                matchesTime = event.rawDate >= yearAgo;
            }

            return matchesSearch && matchesTime;
        }).sort((a, b) => b.rawDate - a.rawDate); // Нові спочатку
    }, [selected, searchTerm, mockEvents]);

    // Пагінація
    const eventsPerPage = 12;
    const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
    const indexOfLastEvent = currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
    const displayedEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleFilterChange = (opt) => {
        setSelected(opt);
        setCurrentPage(1);
        setIsOpen(false);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    return (
        <main className={styles.main}>
            <h1>Події</h1>
            {/* FILTERS SECTION */}
            <div className={clsx(styles.wrapperContainer, styles.filtersWrapper)}>
                <div className={styles.searchInput}>
                    <input type="search"
                        name="search"
                        id="searchInput"
                        placeholder="Введіть назву проєкту"
                        value={searchTerm}
                        onChange={handleSearchChange} />
                </div>
                <div className={styles.selectWrapper}>
                    <div
                        className={`${styles.filterSelect} ${isOpen ? styles.active : ''}`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span>{selected}</span>
                        <span className={styles.arrowIcon}></span>
                    </div>
                    {isOpen && (
                        <ul className={styles.optionsList}>
                            {options.map((opt) => (
                                <li
                                    key={opt}
                                    className={styles.optionItem}
                                    onClick={() => handleFilterChange(opt)}
                                >
                                    {opt}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            {/* EVENTS SECTION  */}
            <section className={clsx(styles.wrapperContainer, styles.eventsSection)}>
                {displayedEvents.length > 0 ? (
                    displayedEvents.map((event) => (
                        <div key={event.id} className={styles.cardWrapper}>
                            <EventCard event={event} />
                        </div>
                    ))
                ) : (
                    <p className={styles.noResults}>За вказаними критеріями пошуку подій не знайдено</p>
                )}
            </section>
            {/* PAGINATION  */}
            {totalPages > 1 && (
                <Pagination className={styles.wrapperContainer}
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            )}
        </main>
    );
}