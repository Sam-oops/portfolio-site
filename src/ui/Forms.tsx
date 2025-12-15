import React from "react";
import styles from "./ui.module.scss";
import { getRegitsterConfigForm } from "../config/Forms/authForms";
import CustomInput from "./CustomInput";
import Button from "./Button";
import clsx from "clsx";

export default function Forms() {
  const registerField = getRegitsterConfigForm();

  return (
    <div className={styles.forms}>
      <div className={styles.forms__labels}>
        {registerField.map((field) => (
          <CustomInput key={field.title} {...field} />
        ))}
      </div>
      <Button text="Отправить" btnColor="light"></Button>
    </div>
  );
}
