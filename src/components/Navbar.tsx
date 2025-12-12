import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import clsx from "clsx";
import { github, linkedin, telegram } from "../utils/reExportImg";

export default function Navbar() {
  const navLink = [
    { text: "Home", link: "/" },
    { text: "Contacts", link: "/contacts" },
    { text: "About", link: "/about" },
    { text: "Projects", link: "/projects" },
  ];

  return (
    <>
      <div className={styles.nav}>
        <div className={styles.nav__title}>лого</div>
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
          <a className={styles.nav__soc_block_link} href="">
            <img src={linkedin} alt="" />
          </a>
          <a className={styles.nav__soc_block_link} href="/">
            <img src={github} alt="" />
          </a>
          <a className={styles.nav__soc_block_link} href="#">
            <img src={telegram} alt="" />
          </a>
        </div>
      </div>
    </>
  );
}
