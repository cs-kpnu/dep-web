'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './style.module.css';
import clsx from "clsx";

const ProjectCard = ({ project }) => {

    // Деструктуризація даних проєкту
    const { id, title, status, category, startDate, participants, description, imageUrl } = project;
    const statusConfig = {
        'Завершено': { class: styles.success, label: 'Завершено' },
        'У розробці': { class: styles.warning, label: 'У розробці' },
        'Активний': { class: styles.info, label: 'Активний' },
    };
    const { class: statusClass, label } = statusConfig[status] || { class: styles.default, label: status };

    return (
        <article className={styles.card}>
            {/* Секція зображення з бейджем статусу */}
            <div className={styles.imageContainer}>
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={styles.image}
                />
                <span className={clsx(styles.statusBadge, statusClass)}>
    {label}
</span>
            </div>

            {/* Основний контент */}
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>

                <div className={styles.categoryWrapper}>
                    <span className={styles.categoryDot}></span>
                    <span className={styles.categoryText}>{category}</span>
                </div>

                <div className={styles.metaInfo}>
                    <div className={styles.metaItem}>
                        <span className={styles.icon}>📅</span>
                        <span>Початок: {startDate}</span>
                    </div>
                    <div className={styles.metaItem}>
                        <span className={styles.icon}>👥</span>
                        <span>{participants}</span>
                    </div>
                </div>

                <p className={styles.description}>{description}</p>

                {/* Динамічне посилання на сторінку проєкту */}
                <Link href={`/projects/${id}`} className={styles.detailsBtn}>
                    Детальніше <span className={styles.arrow}>→</span>
                </Link>
            </div>
        </article>
    );
};

export default ProjectCard;