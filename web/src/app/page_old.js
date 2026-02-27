import Image from "next/image";
import styles from "./page.module.css";
import { api } from "@/lib/api";

async function getPosts(params) {
  return await api.get("/posts")
}

export default async function Home() {
  const posts = await getPosts()
  console.log(posts, "posts")
  console.log('sasha')
  return (
    <main className={styles.body}>
      <section className={styles.main}>
        <div className={styles.header} id="header"></div>
        <div className={styles['main-content']}>
          <div className={styles['main-content-text']}>
            <div className={styles['main-content-title']}>Навчайся. Cтворюй. Надихай!</div>
            <div className={styles['main-content-description']}>
              Цифрова кафедра — це платформа для об'єднання студентської
              IT-спільноти. Наша діяльність зосереджена на подоланні розриву між
              теоретичною підготовкою та її практичним застосуванням. Ми
              реалізуємо соціально значущі IT-рішення, посилюючи громадянську
              позицію молоді, та формуємо партнерство з провідними технічними
              спеціалістами й організаціями галузі.
            </div>
          </div>
          <div className={styles['main-content-photo']}>
            <img src="../assets/main-page-images/main-section-bubble.png" alt="Image" /></div>
        </div>
      </section>

      <section className={styles['mission-section']}>
        <div className={styles['section-title']}>
          <div className={styles['section-title-text']}>Місія</div>
          <div className={`${styles['section-title-line']} ${styles['w-100']}`}></div>
        </div>
        <div className={styles['mission-content']}>
          <div className={styles['mission-description-container']}>
            <div className={styles['mission-description']}>
              Наша місія полягає у забезпеченні комплексної діяльності для розвитку
              спільноти та технологічного впливу, що реалізується через ключові напрямки:
            </div>
          </div>
          {/* Спрощено для прикладу */}
          <div className={styles['mission-description-items']}>
            <ul>
              <li><strong>Практична трансформація знань</strong></li>
              <li><strong>Соціальне лідерство</strong></li>
              <li><strong>Екосистема партнерства</strong></li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.main}>
        <div className={styles['section-title']}>
          <div className={styles['section-title-text']}>Результати</div>
          <div className={`${styles['section-title-line']} ${styles['w-150']}`}></div>
        </div>
        <div className={styles['results-content']}>
          <div className={styles['result-half']}>
            <div className={styles['result-card']}>
              <div className={styles['result-number']}>20 +</div>
              <div className={styles['result-text']}>активних учасників</div>
            </div>
            <div className={styles['result-card']}>
              <div className={styles['result-number']}>10 +</div>
              <div className={styles['result-text']}>виконаних проєктів</div>
            </div>
          </div>
          <div className={styles['result-half']}>
            <div className={styles['result-card']}>
              <div className={styles['result-number']}>3 +</div>
              <div className={styles['result-text']}>активних проєктів</div>
            </div>
            <div className={styles['result-card']}>
              <div className={styles['result-number']}>20 +</div>
              <div className={styles['result-text']}>випускників</div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.main}>
        <div className={styles['section-title']}>
          <div className={styles['section-title-text']}>УСПІШНІ КЕЙСИ</div>
          <div className={`${styles['section-title-line']} ${styles['w-150']}`}></div>
        </div>
        <div className={styles['successful-content']}>
          <div className={styles['successful-right-title']}>
            YouthForce — це інноваційна платформа та цифрове портфоліо студента.
          </div>
          <div className={styles['successful-right-description']}>
            Ми надаємо студентам можливість взяти участь у реальних проєктах
            та отримати підтверджений практичний досвід.
          </div>
          <button className={styles['more-details-button']}>
            Детальніше
          </button>
        </div>
      </section>

      <footer className={styles.header} style={{ textAlign: 'center', padding: '40px', opacity: 0.5 }}>
        © 2024 Цифрова Кафедра. Всі права захищені.
      </footer>
    </main>
  );
}
