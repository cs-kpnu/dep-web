import Image from "next/image";
import clsx from "clsx";
import { api } from "@/lib/api";
import Header from "@/components/header";
import Footer from "@/components/footer";

import BubbleImage from "@/assets/img/main-section-bubble.png";
import MainImage from "@/assets/img/mission-section-image.png";
import YoutIMage from "@/assets/img/yout_force.png";
import styles from "./page.module.css";



async function getPage(params) {
  try {
    // return await api.get("/pages/2?_embed")
  } catch (error) {
    console.error("Error fetching page:", error);
    // throw error;
  }
}
async function getPosts(params) {
  try {
    // return await api.get("/posts?_embed&per_page=3")
  } catch (error) {
    console.error("Error fetching posts:", error);
    // throw error;
  }
}

export async function generateMetadata() {
  return {
    title: "Цифрова кафедра! Навчайся. Cтворюй. Надихай!",
    description: "Цифрова кафедра — це платформа для об'єднання студентської IT-спільноти. Наша діяльність зосереджена на подоланні розриву між теоретичною підготовкою та її практичним застосуванням. Ми реалізуємо соціально значущі IT-рішення, посилюючи громадянську позицію молоді, та формуємо партнерство з провідними технічними спеціалістами й організаціями галузі.",
    type: "website",
  };
}

export default async function Home() {
  const posts = await getPosts()
  const page = await getPage();
  console.log(posts, "posts")
  console.log('sasha', page)
  const title1 = page?.data?.title?.rendered.split(" ")[0];
  const title2 = page?.data?.title?.rendered.split(" ")[1];

  const description = page?.data?.excerpt?.rendered
  return (

    <>
      <main>
        <section className={styles.hero}>
          <div className={clsx(styles.container, styles['hero-container'])}>
            <div className={styles['hero-content']}>
              <h1>{title1} <br />{title2}</h1>
              <p dangerouslySetInnerHTML={{ __html: description }}></p>
            </div>
            <div className={styles['hero-graphic']}>
              <Image src={BubbleImage} alt="Hero Graphic" />
            </div>
          </div>
        </section>

        <section className={styles.mission} id="mission">
          <div className={styles.container}>
            <h2>МІСІЯ</h2>
            <p className={styles['mission-intro']}>Наша місія полягає у забезпеченні рівного доступу до якісної освіти та створенні технологічного впливу, що реалізується через потужні інструменти для самореалізації.</p>
            <div className={styles['mission-grid']}>
              <div className={styles['mission-image']}>
                <Image src={MainImage} alt="Mission Image" />
              </div>
              <div className={styles['mission-points']}>
                <ul>
                  <li>
                    <div className={styles['point-icon']}></div>
                    <div className={styles['point-text']}>
                      <h3>Розвиток освітніх технологій</h3>
                      <p>Ми створюємо інноваційні платформи, які змінюють підхід до навчання, роблячи його доступнішим та ефективнішим.</p>
                    </div>
                  </li>
                  <li>
                    <div className={styles['point-icon']}></div>
                    <div className={styles['point-text']}>
                      <h3>Підтримка талантів</h3>
                      <p>Надаємо ресурси та менторство для молодих лідерів, щоб вони могли реалізувати свої ідеї та проекти.</p>
                    </div>
                  </li>
                  <li>
                    <div className={styles['point-icon']}></div>
                    <div className={styles['point-text']}>
                      <h3>Соціальний вплив</h3>
                      <p>Сприяємо позитивним змінам у суспільстві через освіту та технології, формуючи майбутнє покоління.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.results} id="results">
          <div className={styles.container}>
            <h2>РЕЗУЛЬТАТИ</h2>
            <div className={styles['stats-grid']}>
              <div className={styles['stat-item']}>
                <div className={styles['stat-number']} data-target="20">20 +</div>
                <div className={styles['stat-label']}>активних учасників</div>
              </div>
              <div className={styles['stat-item']}>
                <div className={styles['stat-number']} data-target="10">10 +</div>
                <div className={styles['stat-label']}>реалізованих проектів</div>
              </div>
              <div className={styles['stat-item']}>
                <div className={styles['stat-number']} data-target="3">3 +</div>
                <div className={styles['stat-label']}>роки досвіду</div>
              </div>
              <div className={styles['stat-item']}>
                <div className={styles['stat-number']} data-target="20">20 +</div>
                <div className={styles['stat-label']}>партнерів</div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.cases} id="cases">
          <div className={styles.container}>
            <h2>УСПІШНІ КЕЙСИ</h2>
            <div className={styles['featured-case']}>
              <div className={styles['case-logo']}>
                <Image src={YoutIMage} alt="YothForce logo" />
                <h3>YouthForce: <span> Цифрове портфоліо студента</span></h3>
              </div>
              <div className={styles['case-info']}>
                <h3>YouthForce — це інноваційна платформа та цифрове портфоліо студента.</h3>
                <p>Ми надаємо студентам можливість взяти участь у реальних проєктах на підтверджений практичний досвід і цінні навички. Створюємо надійний місток між освітою та ринком праці, ефективно розриваючи "замкнене коло першої роботи" для молоді та надаючи роботодавцям доступ до перевірених талантів.</p>
                <a href="#" className={clsx(styles.btn, styles['btn-primary'])}>Детальніше</a>
              </div>
            </div>

            <div className={styles['cards-grid']}>
              {/* <div className={styles.card}>
                <img src="https://placehold.co/80x80/3a6df0/ffffff?text=DLH" alt="Icon" />
                <h4>Digital Learning Hub</h4>
                <p>Освітній хаб, що надає доступ до сучасних курсів та ресурсів для розвитку цифрових навичок.</p>
                <a href="#" className={styles['card-link']}>Детальніше</a>
              </div> */}
              {posts?.data?.map(post => {
                const img_prev = post?._embedded['wp:featuredmedia'] && post?._embedded['wp:featuredmedia'][0]?.source_url;
                return (
                  <div key={post.id} className={styles.card}>
                    {img_prev ? <img src={img_prev} alt="Preview project" /> : <img src="https://placehold.co/80x80/3a6df0/ffffff?text=DLH" alt="Icon" />}
                    <h4>{post?.title?.rendered}</h4>
                    <p>Освітній хаб, що надає доступ до сучасних курсів та ресурсів для розвитку цифрових навичок.</p>
                    <a href={post?.link} className={styles['card-link']}>Детальніше</a>
                  </div>
                )
              })}

            </div>
          </div>
        </section>

        <section className={styles.cta} id="cta">
          <div className={clsx(styles.container, styles['cta-container'])}>
            <div className={styles['cta-content']}>
              <span className={styles['cta-overline']}>ЗРОБИ СВІЙ ВНЕСОК</span>
              <h1 className={styles['cta-title']}>
                <span>НАВЧАЙСЯ</span>
                <span>СТВОРЮЙ</span>
                <span>НАДИХАЙ!</span>
              </h1>
              <a href="#" className={clsx(styles.btn, styles['btn-primary'])}>Приєднатися</a>
            </div>
            <div className={styles['cta-description']}>
              <p>Долучайся до нашої спільноти та стань частиною змін. Разом ми можемо більше!</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
