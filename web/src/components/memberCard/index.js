'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './style.module.css';
import clsx from "clsx";

const MemberCard = ({ member }) => {
    const { id, firstName, lastName, patronymic, role, status, degree, teamDate, projects, imageUrl } = member;

    // Конфігурація для ролей (лівий бейдж)
    const roleConfig = {
        'Керівник': { class: styles.roleLead, label: 'КЕРІВНИК' },
        'Ментор': { class: styles.roleMentor, label: 'МЕНТОР' },
        'Учасник': { class: styles.roleMember, label: 'УЧАСНИК' },
    };

    // Конфігурація для статусів (правий бейдж)
    const statusConfig = {
        'Активний': { class: styles.statusActive, label: 'АКТИВНИЙ' },
        'Випускник': { class: styles.statusGraduate, label: 'ВИПУСКНИК' },
    };

    const currentRole = roleConfig[role] || { class: styles.roleDefault, label: role.toUpperCase() };
    const currentStatus = statusConfig[status] || { class: styles.statusDefault, label: status.toUpperCase() };

    return (
        <article className={styles.card}>
            <div className={styles.imageContainer}>
                <img
                    src={imageUrl}
                    alt={`${lastName} ${firstName}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.image}
                />
                <span className={clsx(styles.badge, styles.roleBadge, currentRole.class)}>
                    {currentRole.label}
                </span>
                <span className={clsx(styles.badge, styles.statusBadge, currentStatus.class)}>
                    {currentStatus.label}
                </span>
            </div>

            <div className={styles.content}>
                <div className={styles.nameSection}>
                    <h3 className={styles.fullName}>
                        <span className={styles.lastName}>{lastName}</span> {firstName}
                    </h3>
                </div>
                <p className={styles.degree}>{degree}</p>

                <div className={styles.metaRow}>
                    <span className={styles.icon}>📅</span>
                    <span className={styles.metaText}>У команді з <span className={styles.whiteText}>{teamDate}</span></span>
                </div>

                <div className={styles.projectsSection}>
                    <p className={styles.projectsTitle}>ПРОЄКТИ:</p>
                    <div className={styles.tagsContainer}>
                        {projects.map((proj, index) => (
                            <span key={index} className={styles.tag}>{proj}</span>
                        ))}
                    </div>
                </div>

                <Link href={`/team/${id}`} className={styles.detailsBtn}>
                    ПЕРЕГЛЯНУТИ <span className={styles.arrow}>→</span>
                </Link>
            </div>
        </article>
    );
};

export default MemberCard;