import Image from 'next/image';
import styles from './style.module.css';
import { Calendar, Users, Tag, AlignLeft, ExternalLink } from 'lucide-react';

export default function PortfolioProject() {
    return (
        <div className={styles.pageContainer}>
            {/* Breadcrumb */}
            <nav className={styles.breadcrumb}>
                <span className={styles.breadcrumbLink}>Проєкти</span> / Digital Learning Hub
            </nav>

            {/* Project Hero Header */}
            <div className={styles.projectHeader}>
                <div className={styles.titleSection}>
                    <h1 className={styles.title}>Digital Learning Hub</h1>
                    <div className={styles.badges}>
                        <span className={`${styles.badge} ${styles.badgeCategory}`}>EdTech</span>
                        <span className={`${styles.badge} ${styles.badgeStatus}`}>В розробці</span>
                    </div>
                </div>

                {/* Cover Image Placeholder */}
                <div className={styles.coverImageWrapper}>
                    <Image
                        src="/project.png"
                        alt="Digital Learning Hub Cover"
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
                        </div>
                        <div className={styles.description}>
                            <p>
                                <strong>Digital Learning Hub</strong> — це інноваційна платформа для об'єднання студентів,
                                викладачів та менторів з ІТ-індустрії. Основна мета проєкту полягає у створенні єдиного
                                цифрового середовища, де кожен учасник освітнього процесу може зручно відслідковувати свій
                                прогрес, отримувати фідбек та брати участь у реальних стартапах.
                            </p>
                            <p>
                                Система включає в себе модулі гейміфікації, трекінгу задач та інтеграцію з популярними
                                системами контролю версій (GitHub/GitLab) для автоматичної оцінки практичних робіт.
                            </p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.sectionHeader}>
                            <AlignLeft className={styles.iconBlue} size={24} />
                            <h1>Технології</h1>
                        </div>
                        <div className={styles.description}>
                            <p>
                                Проєкт розробляється з використанням сучасного стеку технологій, включаючи React для
                                фронтенду, Node.js та Express для бекенду, а також MongoDB для зберігання даних. Для
                                забезпечення високої продуктивності та масштабованості використовується Docker та Kubernetes.
                            </p>
                            <p>
                                Крім того, інтеграція з GitHub/GitLab дозволяє автоматизувати процес оцінки та надання
                                фідбеку студентам на основі їхніх комітів та пул-реквестів, що значно підвищує ефективність
                                навчального процесу.
                            </p>
                        </div>
                    </div>
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
                                <span className={styles.metaValue}>Вересень 2023</span>
                            </li>
                            <li className={styles.metaItem}>
                                <div className={styles.metaLabel}>
                                    <Tag size={18} className={styles.metaIcon} />
                                    <span>Категорія</span>
                                </div>
                                <span className={styles.metaValue}>Освітні технології</span>
                            </li>
                        </ul>
                    </div>

                    {/* Participants Card */}
                    <div className={styles.card}>
                        <div className={styles.sectionHeaderSmall}>
                            <Users className={styles.iconBlue} size={20} />
                            <h3 className={styles.sidebarTitle}>Учасники</h3>
                        </div>

                        <ul className={styles.participantsList}>
                            <li className={styles.participantItem}>
                                <div className={styles.participantInfo}>
                                    <span className={styles.participantName}>Іванюк Віталій</span>
                                    <span className={styles.participantRole}>Ментор / PM</span>
                                </div>
                                <ExternalLink size={16} className={styles.externalIcon} />
                            </li>
                            <li className={styles.participantItem}>
                                <div className={styles.participantInfo}>
                                    <span className={styles.participantName}>Олександр Ткаченко</span>
                                    <span className={styles.participantRole}>Frontend Developer</span>
                                </div>
                                <ExternalLink size={16} className={styles.externalIcon} />
                            </li>
                            <li className={styles.participantItem}>
                                <div className={styles.participantInfo}>
                                    <span className={styles.participantName}>Марія Коваленко</span>
                                    <span className={styles.participantRole}>UI/UX Designer</span>
                                </div>
                                <ExternalLink size={16} className={styles.externalIcon} />
                            </li>
                        </ul>
                    </div>

                </aside>
            </div>
        </div>
    );
}