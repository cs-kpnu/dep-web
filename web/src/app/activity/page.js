"use client";

import styles from "./page.module.css";
import { useState, useMemo, useEffect } from "react";
import EventCard from "@/components/eventCard"; // Твій новий компонент
import Pagination from "@/components/paginator";
import clsx from "clsx";
import { api } from "@/lib/api";
import { transformActivity } from "@/utils/transformFromWp";
import { mockData } from "@/app/activity/mock";

import WorkProcessImage from "@/assets/activity-images/Work_process.jpg";

async function getPosts() {
  let data = await api.get("/events?_embed&per_page=3");
  data = transformActivity(data?.data, WorkProcessImage);
  return data;
}

export default function EventsPage() {
  const [mockEvents, setMockEvents] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Фільтри");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const options = ["За останній місяць", "За останній рік", "За весь час"];

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const events = await getPosts();
        console.log("Mapped events:", events);
        setMockEvents(events);
      } catch (e) {
        console.error("Error fetching events:", e);
        setMockEvents(mockData);
      }
    };
    fetchEvents();
  }, []);

  console.log("Fetched events:", mockEvents);

  // Фільтрація за часом та пошуком
  const filteredEvents = useMemo(() => {
    const now = new Date();
    return mockEvents
      .filter((event) => {
        const matchesSearch = event.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

        let matchesTime = true;
        if (selected === "За останній місяць") {
          const monthAgo = new Date().setMonth(now.getMonth() - 1);
          matchesTime = event.rawDate >= monthAgo;
        } else if (selected === "За останній рік") {
          const yearAgo = new Date().setFullYear(now.getFullYear() - 1);
          matchesTime = event.rawDate >= yearAgo;
        }

        return matchesSearch && matchesTime;
      })
      .sort((a, b) => b.rawDate - a.rawDate); // Нові спочатку
  }, [selected, searchTerm, mockEvents]);

  // Пагінація
  const eventsPerPage = 12;
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const displayedEvents = filteredEvents.slice(
    indexOfFirstEvent,
    indexOfLastEvent,
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
          <input
            type="search"
            name="search"
            id="searchInput"
            placeholder="Введіть назву проєкту"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className={styles.selectWrapper}>
          <div
            className={`${styles.filterSelect} ${isOpen ? styles.active : ""}`}
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
          <p className={styles.noResults}>
            За вказаними критеріями пошуку подій не знайдено
          </p>
        )}
      </section>
      {/* PAGINATION  */}
      {totalPages > 1 && (
        <Pagination
          className={styles.wrapperContainer}
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </main>
  );
}
