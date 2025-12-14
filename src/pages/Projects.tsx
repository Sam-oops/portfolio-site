import React from "react";
import Navbar from "../components/Navbar";
import Heading from "../ui/Heading";
import styles from "../styles/layouts/Projects.module.scss";
import { project_img_portfolio, project_img_todo } from "../utils/reExportImg";
import { Link } from "react-router-dom";

interface IBlocks {
  id: number;
  img: string;
  desc: string;
  link: { url: string; target: "_blank" | "_self" };
}

const blocks: IBlocks[] = [
  {
    id: 1,
    img: project_img_todo,
    desc: "Pet-проект - To do list на React js с использованием React Context, i18n, функциями смены языка и переводами",
    link: {
      url: "https://github.com/Sam-oops/To-do-list-on-React",
      target: "_blank",
    },
  },
  {
    id: 2,
    img: project_img_portfolio,
    desc: "Это простой по дизайну сайт-портфолио, с использованием React-router, UI компонентами, React Context и React hook form",
    link: {
      url: "https://github.com/Sam-oops/portfolio-site",
      target: "_blank",
    },
  },
  {
    id: 3,
    img: "",
    desc: "Скоро...",
    link: { target: "_self", url: "/projects" },
  },
];

export default function Projects() {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.projects}>
        <Heading className={styles.projects__title} level={1}>
          PORTFOLIO (include pet-projects)
        </Heading>
        <p className={styles.projects__desc}>
          Lorem ipsum dolor sit amet consectetur. Eget turpis nulla dignissim
          integer. Quis tempus est quis sapien. Odio neque lectus posuere orci.
          Turpis quis amet euismod vel scelerisque scelerisque.
        </p>
        <div className={styles.projects__blocks}>
          {blocks.map((block) => (
            <div key={block.id} className={styles.projects__block}>
              <Link
                target={block.link?.target}
                className={styles.projects__block_link}
                to={block.link?.url}
              >
                <img src={block.img} alt="" />
                <div className={styles.projects__block_desc}>{block.desc}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
