import Image from 'next/image';
import styles from './first.module.css';
import { Code2, Globe, Briefcase, ExternalLink, ChevronDown } from 'lucide-react';

import JobsAccordion from '@/components/jobsAccordion';

import Lead1 from '@/assets/team-photo-mock/member1.jpg'

export default function Profile() {
    return (
        <div className={styles.pageContainer}>
            {/* Breadcrumb */}
            <nav className={styles.breadcrumb}>
                <span className={styles.breadcrumbLink}>Команда</span> / Іванюк Віталій Анатолійович
            </nav>

            {/* Main Profile Hero */}
            <section className={styles.profileHero}>
                <div className={styles.leftColumn}>
                    <div className={styles.imageWrapper}>
                        {/* Replace src with your actual image path */}
                        <Image
                            src={Lead1}
                            alt="Іванюк Віталій Анатолійович"
                            width={300}
                            height={300}
                            className={styles.profileImage}
                        />
                    </div>
                    <div className={styles.badges}>
                        <div className={`${styles.badge} ${styles.badgePrimary}`}>КЕРІВНИК</div>
                        <div className={`${styles.badge} ${styles.badgeSuccess}`}>АКТИВНИЙ</div>
                    </div>
                </div>

                <div className={styles.rightColumn}>
                    <h1 className={styles.name}>Іванюк Віталій Анатолійович</h1>

                    <div className={styles.infoBlock}>
                        <p><strong>Завідувач кафедри</strong> комп'ютерних наук.</p>
                        <p><strong>Доцент кафедри</strong> інформатики (атестат 12ДЦ №043524 30.06.2015 р.).</p>
                        <p><strong>Доктор технічних наук</strong> за спеціальністю 01.05.02 — "Математичне моделювання та обчислювальні методи" (Диплом ДД №0102356 24.09.2020 р.). Тема дисертації: "Методи та засоби математичного моделювання динамічних процесів в об'єктах із розподіленими параметрами на основі одновимірних інтегральних моделей".</p>
                        <p><strong>Гарант освітньої програми</strong> "Комп'ютерні науки та інформаційні технології" другого (магістерського) рівня вищої освіти.</p>
                        <p>Голова громадської організації "ІТ Кам'янець".</p>
                        <p><strong>Дата народження :</strong> 05.04.1986</p>
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
                    <div className={styles.tagsContainer}>
                        <span className={styles.tag}>React</span>
                        <span className={styles.tag}>Node.js</span>
                        <span className={styles.tag}>TypeScript</span>
                        <span className={styles.tag}>MySQL</span>
                        <span className={styles.tag}>Git / GitHub</span>
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
                        <div className={styles.languageItem}>
                            <span>Українська</span>
                            <span className={styles.level}>Рідна</span>
                        </div>
                        <div className={styles.languageItem}>
                            <span>Англійська</span>
                            <span className={styles.level}>B1</span>
                        </div>
                        <div className={styles.languageItem}>
                            <span>Німецька</span>
                            <span className={styles.level}>B1</span>
                        </div>
                    </div>
                </div>

                <hr className={styles.divider} />

                {/* Projects Section */}
                <div className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <Briefcase className={styles.iconBlue} size={20} />
                        <h3>Проєкти</h3>
                    </div>
                    <p className={styles.projectSubtitle}>Учасник брав участь у таких проєктах:</p>
                    <ul className={styles.projectList}>
                        <li className={styles.projectItem}>
                            <span>Time management system</span>
                            <ExternalLink size={16} className={styles.externalIcon} />
                        </li>
                        <li className={styles.projectItem}>
                            <span>Система для вибору дисциплін</span>
                            <ExternalLink size={16} className={styles.externalIcon} />
                        </li>
                        <li className={styles.projectItem}>
                            <span>Digital Learning Hub</span>
                            <ExternalLink size={16} className={styles.externalIcon} />
                        </li>
                    </ul>
                </div>
            </section>

            <JobsAccordion />
        </div>
    );
}