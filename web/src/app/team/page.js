'use client'

import styles from "./page.module.css";
import { useState, useMemo, useEffect } from "react";
import MemberCard from "@/components/memberCard";
import Pagination from "@/components/paginator";
import clsx from "clsx";
import { api } from "@/lib/api";
import { transformMembers } from "@/utils/transformFromWp";

import { mockTeam as teamData } from "@/data/mockTeam";
// /*
// * temporary dev images imports for testing purposes
// * TODO: delete after implementation
// * */
import UserImage from "../../assets/team-photo-mock/member1.jpg"


function transformForViewTeam(data = []) {
    return data.map(({ name, role, projects, status, joinDate, ...member }) => {
        const [lastName = "", firstName = "", patronymic = ""] = name.split(" ");
        return {
            ...member,
            lastName,
            firstName,
            patronymic,
            role: role ?? "Учасник",
            status,
            imageUrl: member.photo,
            projects: projects.map((proj) => proj.name),
            teamDate: joinDate,
        };
    })
}

async function getMembers() {
    let data = await api.get("/members?_embed&per_page=3");
    data = transformMembers(data?.data, UserImage);
    return data;
}


export default function TeamPage() {
    const [mockTeam, setMockTeam] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState('Фільтри');
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    // Оновлені опції відповідно до статусів команди
    const options = ['Всі', 'Керівник', 'Ментор', 'Учасник'];



    useEffect(() => {
        const fetchEvents = async () => {
            try {
                let members = await getMembers();
                console.log("Mapped members:", members);
                members = transformForViewTeam(members);
                setMockTeam(members);
            } catch (e) {
                const mockedTeamFromFile = transformForViewTeam(teamData);
                console.error("Error fetching members:", e);
                setMockTeam(mockedTeamFromFile);
            }
        };
        fetchEvents();
    }, []);


    // Фільтрація учасників (пошук по прізвищу або імені)
    const filteredMembers = useMemo(() => {
        return mockTeam.filter(member => {
            const matchesStatus = selected === 'Фільтри' || selected === 'Всі' || member.role === selected;
            const fullName = `${member.lastName} ${member.firstName}`.toLowerCase();
            const matchesSearch = fullName.includes(searchTerm.toLowerCase());
            return matchesStatus && matchesSearch;
        });
    }, [selected, searchTerm, mockTeam]);

    // Пагінація
    const membersPerPage = 12;
    const totalPages = Math.ceil(filteredMembers.length / membersPerPage);
    const indexOfLastMember = currentPage * membersPerPage;
    const indexOfFirstMember = indexOfLastMember - membersPerPage;
    const displayedMembers = filteredMembers.slice(indexOfFirstMember, indexOfLastMember);

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
            <h1 className={styles.pageTitle}>Наша команда</h1>

            <div className={clsx(styles.wrapperContainer, styles.filtersWrapper)}>
                <div className={styles.searchInput}>
                    <input type="search"
                        name="search"
                        id="searchInput"
                        placeholder="Прізвище або ім'я учасника..."
                        value={searchTerm}
                        onChange={handleSearchChange} />
                </div>

                <div className={styles.selectWrapper}>
                    <div
                        className={clsx(styles.filterSelect, isOpen && styles.active)}
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

            <section className={clsx(styles.wrapperContainer, styles.membersSection)}>
                {displayedMembers.length > 0 ? (
                    displayedMembers.map((member) => (
                        <div key={member.id} className={styles.cardWrapper}>
                            {/* Передаємо пропс member, як очікує компонент */}
                            <MemberCard member={member} />
                        </div>
                    ))
                ) : (
                    <div className={styles.noResultsWrapper}>
                        <p className={styles.noResults}>Учасників за вашим запитом не знайдено</p>
                    </div>
                )}
            </section>

            {totalPages > 1 && (
                <div className={styles.paginationWrapper}>
                    <Pagination
                        className={styles.wrapperContainer}
                        totalPages={totalPages}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            )}
        </main>
    );
}