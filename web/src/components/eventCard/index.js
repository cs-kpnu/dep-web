'use client'
import React from 'react';
import Image from 'next/image';
import styles from './style.module.css';

const EventCard = ({ event }) => {
    const { title, date, description, category, author, publishedAt, imageUrl, links } = event;

    return (
        <article className={styles.card}>
            <div className={styles.imageContainer}>
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className={styles.categoryBadge}>{category}</span>
            </div>

            <div className={styles.content}>
                <h6 className={styles.title}>{title}</h6>

                <div className={styles.dateRow}>
                    <span className={styles.icon}>📅</span>
                    <time>{date}</time>
                </div>

                <p className={styles.description}>{description}</p>

                <div className={styles.publications}>
                    <p className={styles.label}>ПУБЛІКАЦІЇ:</p>
                    {links.map((link, idx) => (
                        <a key={idx} href={link.url} className={styles.link}>
                            🔗 {link.text}
                        </a>
                    ))}
                </div>

                <footer className={styles.footer}>
                    <div className={styles.authorRow}>
                        <span className={styles.icon}>👤</span>
                        <span>{author}</span>
                    </div>
                    <p className={styles.publishDate}>Опубліковано: {publishedAt}</p>
                </footer>
            </div>
        </article>
    );
};

export default EventCard;