import clsx from "clsx";
import React from "react";

interface ButtonProps {
  text: string;
  btnColor: "light" | "dark";
}

export default function Button({ text, btnColor }: ButtonProps) {
  const btnClass = clsx("btn", {
    light: btnColor === "light",
    dark: btnColor === "dark",
  });

  return (
    <button className={btnClass}>
      <span>{text}</span>
    </button>
  );
}
