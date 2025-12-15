import React from "react";
import Navbar from "../components/Navbar";
import Heading from "../ui/Heading";
import styles from "../styles/layouts/Contacts.module.scss";
import Forms from "../ui/Forms";

export default function Contacts() {
  return (
    <>
      <div className={styles.wrapper}>
        <Navbar />
        <div className={styles.contacts}>
          <Heading className={styles.contacts__title} level={1}>
            PORTFOLIO (include pet-projects)
          </Heading>
          <p className={styles.contacts__desc}>
            Lorem ipsum dolor sit amet consectetur. Eget turpis nulla dignissim
            integer. Quis tempus est quis sapien. Odio neque lectus posuere
            orci. Turpis quis amet euismod vel scelerisque scelerisque.
          </p>
          <Heading className={styles.contacts__title} level={1}>
            GET IN TOUCH
          </Heading>
          <Forms />
        </div>
      </div>
    </>
  );
}
