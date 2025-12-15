import { BaseFileds } from "../../interfaces";

export const getRegitsterConfigForm = (): BaseFileds[] => [
  {
    title: "Имя",
    type: "text",
    placeHolder: "Имя",
  },
  {
    title: "Почта",
    type: "email",
    placeHolder: "Почта",
  },
  {
    title: "Тема",
    type: "text",
    placeHolder: "Тема",
  },
  {
    title: "Сообщение",
    type: "text",
    placeHolder: "Сообщение",
  },
];
