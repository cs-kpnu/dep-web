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
                <h3>Публікації</h3>
                <ChevronDown size={24} className={styles.chevronIcon} />
            </div>
            <div className={clsx(styles.accordionContent, isOpen ? styles.open : '')}>
                {jobs.map(item => (
                     <div key={item?.name} className={clsx(styles.section)}>
                    <div className={styles.sectionHeader}>
                        <Briefcase className={styles.iconBlue} size={20} />
                        <h3>{item?.name}</h3>
                    </div>
                    <p className={styles.projectSubtitle}>{item?.name} <br/> <a target="_blank" className={styles.iconBlue} href={item?.url}>Деталі</a></p>

                </div>
                ))}
            </div>
        </section>
    )
};