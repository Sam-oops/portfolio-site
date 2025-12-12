import React, { HTMLAttributes } from "react";
import styles from "./ui.module.scss";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  level: number;
  className?: string;
  color?: string;
}

const tag = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
  color: "#fff",
} as const;

export default function Heading({
  level,
  children,
  className,
  color,
}: HeadingProps) {
  const Tag = tag[level] || "h1";

  return (
    <Tag color={color} className={className}>
      {children}
    </Tag>
  );
}
