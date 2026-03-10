'use client';
import { useState } from "react";
import clsx from "clsx";
import { ChevronDown, Briefcase, ExternalLink } from 'lucide-react';

import styles from './style.module.css';


export default function JobsAccordion({ jobs }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className={styles.detailsCard}>
            <div className={styles.accordionCard} onClick={toggleAccordion}>
                <h3>Наукові праці</h3>
                <ChevronDown size={24} className={styles.chevronIcon} />
            </div>
            <div className={clsx(styles.accordionContent, isOpen ? styles.open : '')}>
                <div className={clsx(styles.section)}>
                    <div className={styles.sectionHeader}>
                        <Briefcase className={styles.iconBlue} size={20} />
                        <h3>Робота 1 </h3>
                    </div>
                    <p className={styles.projectSubtitle}>Деталі про роботу 1</p>

                </div>
                <div className={clsx(styles.section)}>
                    <div className={styles.sectionHeader}>
                        <Briefcase className={styles.iconBlue} size={20} />
                        <h3>Робота 2 </h3>
                    </div>
                    <p className={styles.projectSubtitle}>Деталі про роботу 2</p>

                </div>
                <div className={clsx(styles.section)}>
                    <div className={styles.sectionHeader}>
                        <Briefcase className={styles.iconBlue} size={20} />
                        <h3>Робота 3 </h3>
                    </div>
                    <p className={styles.projectSubtitle}>Деталі про роботу 3</p>

                </div>
            </div>
        </section>
    )
};