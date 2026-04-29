import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { api } from "@/lib/api";
import DebugProps from "@/components/debugProps";

import BubbleImage from "@/assets/img/main-section-bubble.png";
import MainImage from "@/assets/img/mission-section-image.png";
import YoutIMage from "@/assets/img/yout_force.png";
import ProjectImage from "@/assets/img/case1.png";
import styles from "./page.module.css";
import { mockProjects } from "@/data/mockProjects";
import { useMemo } from "react";

async function getPage(params) {
  try {
    const data = await api.get("/pages/2?_embed");
    return data;
  } catch (error) {
    console.error("Error fetching page:", error);
    // throw error;
  }
}
async function getPosts() {
  try {
    const data = await api.get("/posts?_embed&per_page=3");
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    }
}

export async function generateMetadata() {
  return {
    title: "Цифрова кафедра! Навчайся. Cтворюй. Надихай!",
    description:
      "Цифрова кафедра - це платформа для об'єднання студентської IT-спільноти. Наша діяльність зосереджена на подоланні розриву між теоретичною підготовкою та її практичним застосуванням. Ми реалізуємо вагомі IT-рішення, посилюючи громадянську позицію молоді, та формуємо партнерство з провідними технічними спеціалістами й організаціями галузі.",
    type: "website",
  };
}

function MockedProjects() {
  const data = useMemo(() => {
    return mockProjects.slice(-3)
  }, [])

  return (
    <>
      {data.map((project) => (
        <div key={project.id} className={styles.card}>
          <Image src={project?.coverImage || ProjectImage} width="80" height="80" alt="Icon" />
          <h4>{project.title}</h4>
          <p>{project.description}</p>
          <Link
            href={`/projects/${project.id}`}
            className={styles["card-link"]}
          >
            Детальніше
          </Link>
        </div>
      ))}
    </>
  );
}

const mockedDescription =  "Ми реалізуємо вагомі IT-рішення, посилюючи громадянську позицію молоді, та формуємо партнерство з провідними технічними спеціалістами й організаціями галузі."


  


export default async function Home() {
  const posts = await getPosts();
  const page = await getPage();
  const renderedTitle = page?.data?.title?.rendered;
  const titleWords = renderedTitle?.split(" ") ?? [];
  const title1 = titleWords[0] ?? "Навчайся.";
  const title2 = titleWords.slice(1).join(" ") || "Створюй. Надихай!";

  const description = page?.data?.excerpt?.rendered  || mockedDescription;

  const {mission_desc, } = page?.data?.acf || {};
  const {members, projects, years, partners} = page?.data?.acf?.statistic || {};

  return (
    <>
      <DebugProps label="page" data={page?.data} />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={clsx(styles.container, styles["hero-container"])}>
            <div className={styles["hero-content"]}>
              {title1 ? (
                <h1>
                  {title1} <br />
                  <span style={{ whiteSpace: "nowrap" }}>{title2}</span>
                </h1>
              ) : (
                <h1>
                  Навчайся.{" "}
                  <span style={{ whiteSpace: "nowrap" }}>
                    Створюй. Надихай!
                  </span>
                </h1>
              )}
                <p dangerouslySetInnerHTML={{ __html: description }}></p>
            </div>
            <div className={styles["hero-graphic"]}>
              <Image src={BubbleImage} alt="Hero Graphic" />
            </div>
          </div>
        </section>

        <section className={styles.mission} id="mission">
          <div className={styles.container}>
            <h2>МІСІЯ</h2>
            <p className={styles['mission-intro']}>{ mission_desc ?? "Наша місія полягає у забезпеченні рівного доступу до якісної освіти та створенні технологічного впливу, що реалізується через потужні інструменти для самореалізації." }</p>
            <div className={styles['mission-grid']}>
              <div className={styles['mission-image']}>
                <Image src={MainImage} alt="Mission Image" />
              </div>
              <div className={styles["mission-points"]}>
                <ul>
                  <li>
                    <div className={styles["point-icon"]}></div>
                    <div className={styles["point-text"]}>
                      <h3>Розвиток освітніх технологій</h3>
                      <p>
                        Ми створюємо інноваційні платформи, які змінюють підхід
                        до навчання, роблячи його доступнішим та ефективнішим.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className={styles["point-icon"]}></div>
                    <div className={styles["point-text"]}>
                      <h3>Підтримка талантів</h3>
                      <p>
                        Надаємо ресурси та менторство для молодих лідерів, щоб
                        вони могли реалізувати свої ідеї та проекти.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className={styles["point-icon"]}></div>
                    <div className={styles["point-text"]}>
                      <h3>Соціальний вплив</h3>
                      <p>
                        Сприяємо позитивним змінам у суспільстві через освіту та
                        технології, формуючи майбутнє покоління.
                      </p>
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
                <div className={styles['stat-number']} data-target="20">{members ?? "20"} +</div>
                <div className={styles['stat-label']}>активних учасників</div>
              </div>
              <div className={styles['stat-item']}>
                <div className={styles['stat-number']} data-target="10">{projects ?? "10"} +</div>
                <div className={styles['stat-label']}>реалізованих проектів</div>
              </div>
              <div className={styles['stat-item']}>
                <div className={styles['stat-number']} data-target="3">{years ?? "3"} +</div>
                <div className={styles['stat-label']}>роки досвіду</div>
              </div>
              <div className={styles['stat-item']}>
                <div className={styles['stat-number']} data-target="20">{partners ?? "20"} +</div>
                <div className={styles['stat-label']}>партнерів</div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.cases} id="cases">
          <div className={styles.container}>
            <h2>УСПІШНІ КЕЙСИ</h2>
            <div className={styles["featured-case"]}>
              <div className={styles["case-logo"]}>
                <Image src={YoutIMage} alt="YothForce logo" />
                <h3>
                  YouthForce: <span> Цифрове портфоліо студента</span>
                </h3>
              </div>
              <div className={styles["case-info"]}>
                <h3>
                  YouthForce - це інноваційна платформа та цифрове портфоліо
                  студента.
                </h3>
                <p>
                  Ми надаємо студентам можливість взяти участь у реальних
                  проєктах на підтверджений практичний досвід і цінні навички.
                  Створюємо надійний місток між освітою та ринком праці,
                  ефективно розриваючи "замкнене коло першої роботи" для молоді
                  та надаючи роботодавцям доступ до перевірених талантів.
                </p>
                <Link
                  href="/projects/6"
                  className={clsx(styles.btn, styles["btn-primary"])}
                >
                  Детальніше<span className={styles.arrow}>→</span>
                </Link>
              </div>
            </div>

            <div className={styles["cards-grid"]}>
              {posts?.data ? (
                posts?.data?.map((post) => {
                  let img_prev =
                    post?._embedded["wp:featuredmedia"] &&
                    post?._embedded["wp:featuredmedia"][0]?.source_url;
                  img_prev = img_prev || post.coverImage
                  return (
                    <div key={post.id} className={styles.card}>
                      {img_prev ? (
                        <img src={img_prev} alt="Preview project" />
                      ) : (
                        <Image src={ProjectImage} alt="Icon" />
                      )}
                      <h4>{post?.title?.rendered}</h4>
                      <p>
                        Освітній хаб, що надає доступ до сучасних курсів та
                        ресурсів для розвитку цифрових навичок.
                      </p>
                      <Link href={post?.link} className={styles["card-link"]}>
                        Детальніше
                      </Link>
                    </div>
                  );
                })
              ) : (
                <MockedProjects />
              )}
            </div>
          </div>
        </section>

        <section className={styles.cta} id="cta">
          <div className={clsx(styles.container, styles["cta-container"])}>
            <div className={styles["cta-content"]}>
              <span className={styles["cta-overline"]}>ЗРОБИ СВІЙ ВНЕСОК</span>
              <h1 className={styles["cta-title"]}>
                <span>НАВЧАЙСЯ</span>
                <span>СТВОРЮЙ</span>
                <span>НАДИХАЙ!</span>
              </h1>
              <Link
                href="/contacts"
                className={clsx(styles.btn, styles["btn-primary"])}
              >
                Приєднатися<span className={styles.arrow}>→</span>
              </Link>
            </div>
            <div className={styles["cta-description"]}>
              <p>
                Долучайся до нашої спільноти та стань частиною змін. Разом ми
                можемо більше!
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
