import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./style.module.css";
import { Calendar, Users, Tag, AlignLeft, ExternalLink } from "lucide-react";

import { api } from "@/lib/api";
import Breadcrumb from "@/components/breadcrumb";
import { mockProjects } from "@/data/mockProjects";
import { transformProject } from "@/utils/transformFromWp";
import defaultImg from "@/assets/team-photo-mock/member1.jpg";

async function getProject(slug) {
  try {
    const data = await api.get(`projects/${slug}?_embed`);
    return transformProject(data?.data, defaultImg);
  } catch {
    return mockProjects.find((p) => p.slug === slug || p.id === slug) ?? null;
  }
}

export default async function PortfolioProject({ params }) {
  const { slug } = await params;
  const project = await getProject(slug);

  console.log(project, 'project')
  if (!project) notFound();

  return (
    <main className={styles.pageContainer}>
      <Breadcrumb to="/projects" text="Назад до проєктів" />

      {/* Project Hero Header */}
      <div className={styles.projectHeader}>
        <div className={styles.titleSection}>
          <h1 className={styles.title}>{project.title}</h1>
          <div className={styles.badges}>
            <span className={`${styles.badge} ${styles.badgeStatus}`}>
              {project.status}
            </span>
          </div>
        </div>

        {/* Cover Image */}
        <div className={styles.coverImageWrapper}>
          {/* FIXME: CHANGE TO NEXT/IMAGE */}
          <img
            src={project.coverImage}
            alt={`${project.title} Cover`}
            fill
            className={styles.coverImage}
          />
        </div>
      </div>

      {/* Main Content Grid */}
      <div className={styles.contentGrid}>
        {/* Left Column: Description */}
        <div className={styles.mainColumn}>
          <div className={styles.card}>
            <div className={styles.sectionHeader}>
              <AlignLeft className={styles.iconBlue} size={24} />
              <h1>Опис проєкту</h1>
              <span className={`${styles.badge} ${styles.badgeCategory}`}>
                {project.category}
              </span>
            </div>
            <div
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: project.description || "" }}
            />
          </div>

          {project.technologies && (
            <div className={styles.card}>
              <div className={styles.sectionHeader}>
                <AlignLeft className={styles.iconBlue} size={24} />
                <h1>Технології</h1>
              </div>
              <div className={styles.description}>
                <p>{project.technologies}</p>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Metadata & Participants */}
        <aside className={styles.sidebar}>
          {/* Details Card */}
          <div className={styles.card}>
            <h3 className={styles.sidebarTitle}>Деталі</h3>
            <ul className={styles.metaList}>
              <li className={styles.metaItem}>
                <div className={styles.metaLabel}>
                  <Calendar size={18} className={styles.metaIcon} />
                  <span>Дата запуску</span>
                </div>
                <span className={styles.metaValue}>{project.launchDate}</span>
              </li>
              <li className={styles.metaItem}>
                <div className={styles.metaLabel}>
                  <Tag size={18} className={styles.metaIcon} />
                  <span>Категорія</span>
                </div>
                <span className={styles.metaValue}>{project.categoryLabel}</span>
              </li>
            </ul>
          </div>

          {/* Participants Card */}
          {project.participants?.length > 0 && (
            <div className={styles.card}>
              <div className={styles.sectionHeaderSmall}>
                <Users className={styles.iconBlue} size={20} />
                <h3 className={styles.sidebarTitle}>Учасники</h3>
              </div>
              <ul className={styles.participantsList}>
                {project.participants.map((participant) => (
                  <li key={participant.name} className={styles.participantItem}>
                    <div className={styles.participantInfo}>
                      <span className={styles.participantName}>
                        {participant.name}
                      </span>
                      <span className={styles.participantRole}>
                        {participant.role}
                      </span>
                    </div>
                    <Link href={participant.profileLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className={styles.externalIcon} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </main>
  );
}
