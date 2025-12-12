import React, { useState } from "react";
import Heading from "../ui/Heading";
import styles from "../styles/layouts/About.module.scss";
import { bg_img, css, git, html, js, react } from "../utils/reExportImg";
import Button from "../ui/Button";
import Navbar from "../components/Navbar";

interface ISkills {
  alt: string;
  src: string;
}

const skills: ISkills[] = [
  { alt: "html", src: html },
  { alt: "css", src: css },
  { alt: "js", src: js },
  { alt: "react", src: react },
  { alt: "git", src: git },
];
export default function About() {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.about}>
        <div className={styles.container}>
          <Heading className={styles.about__title} level={1}>
            О себе
          </Heading>
          <p className={styles.about__desc}>
            Frontend-разработчик с более чем 2 годами опыта работы в компании
            Ascensio System (OnlyOffice). Специализируюсь на поддержке и
            развитии веб-сайта компании, создании интерфейсов и вёрстке страниц,
            а также вёрстке адаптивных email-писем. Работаю с существующей
            кодовой базой, обновляю контент и функционал, сливаю вливаю мёрджу
            :3 обеспечиваю корректную работу UI на разных устройствах и
            браузерах.
          </p>
          <div className={styles.about__wrapper}>
            <div className={styles.wrapper__left}>
              <img src={bg_img} alt="" />
            </div>
            <div className={styles.wrapper__right}>
              <h4 className={styles.wrapper__right_title}>Самир Керимов</h4>
              <p className={styles.wrapper__right_subtitle}>
                Frontend engineer
              </p>
              <p className={styles.wrapper__right_desc}>
                Frontend-разработчик с более чем 2-x летним опытом работы в
                компании Ascensio System (OnlyOffice). Специализируюсь на
                поддержке и развитии веб-сайта компании, интерфейсов
                маркетинговых и продуктовых страниц, а также вёрстке адаптивных
                email-писем.
              </p>
              <p className={styles.wrapper__right_desc}>
                Также занимаюсь вёрсткой адаптивных email-писем и регулярно
                работаю с макетами в Figma. В свободное время развиваюсь в
                JavaScript, React и создаю небольшие pet-проекты, которые
                выкладываю на GitHub.
              </p>
              <div className={styles.btn_wrapper}>
                <Button text="Скачать CV" btnColor="light"></Button>
                <Button text="Связаться" btnColor="dark"></Button>
              </div>
            </div>
          </div>
          <div className={styles.skills}>
            <Heading className={styles.skills__title} level={4}>
              Мой стек
            </Heading>
            <div className={styles.skills__block}>
              {skills.map((skill) => (
                <img key={skill.alt} src={skill.src} alt={skill.alt} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
