"use client";

import styles from "./page.module.css";
import { useState, useMemo, useEffect } from "react";
import clsx from "clsx";

import ProjectCard from "@/components/projectCard";
import Pagination from "@/components/paginator";
import { api } from "@/lib/api";
import { transformProjects } from "@/utils/transformFromWp";

import { mockProjects as projectsData } from "@/data/mockProjects";

/*
 * temporary dev images imports for testing purposes
 * TODO: delete after implementation
 * */
import Project1Image from "../../assets/project-images/project1.svg";
import Project2Image from "../../assets/project-images/project2.svg";
import Project3Image from "../../assets/project-images/project3.svg";

async function getProjects() {
  const data = await api.get("/projects?_embed&per_page=3");
  return transformProjects(data?.data);
}

export default function ProjectsPage() {
  const [mockProjects, setMockProjects] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Фільтри");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const options = ["Всі", "Активний", "У розробці", "Завершено"];

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const projects = await getProjects();
        console.log("Mapped projects:", projects);
        setMockProjects(projects);
      } catch (e) {
        console.error("Error fetching projects:", e);
        setMockProjects(projectsData);
      }
    };
    fetchEvents();
  }, []);

  // project filtration by type and filter data by project name
  const filteredProjects = useMemo(() => {
    return mockProjects.filter((project) => {
      const matchesStatus =
        selected === "Фільтри" ||
        selected === "Всі" ||
        project.status === selected;
      const matchesSearch = project.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesStatus && matchesSearch;
    });
  }, [selected, searchTerm, mockProjects]);

  // define paginator options
  const projectsPerPage = 12;
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  // current page index calculation
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const displayedProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject,
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFilterChange = (opt) => {
    setSelected(opt);
    setCurrentPage(1); // return to 1st pagination page
    setIsOpen(false);
  };
  // search input handler
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <main className={styles.main}>
      <h1>Проєкти</h1>
      {/*     FILTERS SECTION     */}
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
      {/*    PROJECTS SECTION     */}
      <section
        className={clsx(styles.wrapperContainer, styles.projectsSection)}
      >
        {displayedProjects.length > 0 ? (
          displayedProjects.map((project) => (
            <div key={project.id} className={styles.cardWrapper}>
              <ProjectCard project={project} />
            </div>
          ))
        ) : (
          // alternative text for missed search criteria
          <p className={styles.noResults}>
            За вказаними критеріями пошуку проєктів не знайдено
          </p>
        )}
      </section>
      {/*    PAGINATION     */}
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
