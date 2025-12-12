import React from "react";
import styles from "../styles/layouts/Home.module.scss";
import { bg_img } from "../utils/reExportImg";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.home__block}>
        <img src={bg_img} alt="" className={styles.home__block_img} />
        <div className={styles.home__block_text}>
          <span>Привет ! Я</span>
          <h1>Самир</h1>
          <span>И я Frontend-разработчик</span>
        </div>
      </div>
    </div>
  );
}
