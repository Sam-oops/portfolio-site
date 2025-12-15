import React from "react";
import styles from "./ui.module.scss";
import { BaseFileds } from "../interfaces";

export default function CustomInput({ title, type, placeHolder }: BaseFileds) {
  return (
    <>
      <label className={styles.forms__label}>
        <span className={styles.forms__span}>{title}</span>
        {type === "textarea" ? (
          <textarea className={styles.forms__field} placeholder={placeHolder} />
        ) : (
          <input
            type={type}
            placeholder={placeHolder}
            className={styles.forms__field}
          />
        )}
      </label>
    </>
  );
}
