import Image from "next/image";
import { notFound } from "next/navigation";
import { Code2, Globe, Briefcase, ExternalLink } from "lucide-react";

import JobsAccordion from "@/components/jobsAccordion";
import Breadcrumb from "@/components/breadcrumb";
import { mockTeam } from "@/data/mockTeam";
import styles from "./first.module.css";

export default async function Profile({ params }) {
  const { slug } = await params;
  const member = mockTeam.find((m) => m.id === slug);

  if (!member) {
    notFound();
  }

  return (
    <main className={styles.pageContainer}>
      <Breadcrumb to="/team" text="Назад до команди" />

      {/* Main Profile Hero */}
      <section className={styles.profileHero}>
        <div className={styles.leftColumn}>
          <div className={styles.imageWrapper}>
            <img
              src={`/users-profile-images/${member.photo}`}
              alt={member.name}
              width={300}
              height={300}
              className={styles.profileImage}
            />
          </div>
          <div className={styles.badges}>
            <div className={`${styles.badge} ${styles.badgePrimary} capitalize`}>
              {member.role}
            </div>
            <div className={`${styles.badge} ${styles.badgeSuccess} uppercase`}>
              {member.status}
            </div>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <h1 className={styles.name}>{member.name}</h1>

          <div className={styles.infoBlock}>
            {member.bio.map((paragraph, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
            <p>
              <strong>Дата народження:</strong> {member.birthDate}
            </p>
          </div>
        </div>
      </section>

      {/* Details Card */}
      <section className={styles.detailsCard}>
        {/* Technologies Section */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <Code2 className={styles.iconBlue} size={20} />
            <h3>Технології</h3>
          </div>
          <h4>HARD-skills</h4>
          <div className={styles.tagsContainer}>
            {member.skills.hard.map((skill) => (
              <span key={skill} className={styles.tag}>
                {skill}
              </span>
            ))}
          </div>
          <h4>SOFT-skills</h4>
          <div className={styles.tagsContainer}>
            {member.skills.soft.map((skill) => (
              <span key={skill} className={styles.tag}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <hr className={styles.divider} />

        {/* Languages Section */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <Globe className={styles.iconBlue} size={20} />
            <h3>Іноземні мови</h3>
          </div>
          <div className={styles.languagesGrid}>
            {member.languages.map((lang) => (
              <div key={lang.name} className={styles.languageItem}>
                <span>{lang.name}</span>
                <span className={styles.level}>{lang.level}</span>
              </div>
            ))}
          </div>
        </div>

        <hr className={styles.divider} />

        {/* Projects Section */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <Briefcase className={styles.iconBlue} size={20} />
            <h3>Проєкти</h3>
          </div>
          <p className={styles.projectSubtitle}>
            Учасник брав участь у таких проєктах:
          </p>
          <ul className={styles.projectList}>
            {member.projects.map((project) => (
              <li key={project.id} className={styles.projectItem}>
                <span>{project.name}</span>
                <ExternalLink size={16} className={styles.externalIcon} />
              </li>
            ))}
          </ul>
        </div>

        {/* {member.publications.length > 0 && (
          <>
            <hr className={styles.divider} />
            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                <h3>Публікації</h3>
              </div>
              <ul className={styles.projectList}>
                {member.publications.map((pub) => (
                  <li key={pub.name} className={styles.projectItem}>
                    <a href={pub.url} target="_blank" rel="noopener noreferrer">
                      {pub.name}
                    </a>
                    <ExternalLink size={16} className={styles.externalIcon} />
                  </li>
                ))}
              </ul>
            </div>
          </>
        )} */}
      </section>
      {member?.publications?.length > 0 &&  <JobsAccordion jobs={member.publications} />}
     
    </main>
  );
}
