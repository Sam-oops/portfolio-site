import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import clsx from "clsx";
import { github, linkedin, telegram } from "../utils/reExportImg";

interface INavbar {
  text: string;
  link: string;
}

export default function Navbar() {
  const navLink: INavbar[] = [
    { text: "Главная", link: "/" },
    { text: "Контакты", link: "/contacts" },
    { text: "Проекты", link: "/projects" },
    { text: "О себе", link: "/about" },
  ];

  return (
    <>
      <div className={styles.nav}>
        <div className={styles.nav__title}>Думаю...</div>
        <ul className={styles.nav__list}>
          {navLink.map((el) => (
            <NavLink
              className={({ isActive }) =>
                clsx(styles.nav__list_link, isActive && styles.active)
              }
              to={el.link}
            >
              {({ isActive }) => (isActive ? `<${el.text} />` : `${el.text}`)}
            </NavLink>
          ))}
        </ul>
        <div className={styles.nav__soc_block}>
          <a className={styles.nav__soc_block_link} href="/" target="_blank">
            <img src={linkedin} alt="" />
          </a>
          <a
            className={styles.nav__soc_block_link}
            href="https://github.com/Sam-oops"
            target="_blank"
          >
            <img src={github} alt="" />
          </a>
          <a
            className={styles.nav__soc_block_link}
            href="https://t.me/sam_oops"
            target="_blank"
          >
            <img src={telegram} alt="" />
          </a>
        </div>
      </div>
    </>
  );
}
