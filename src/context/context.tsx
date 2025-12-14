import { createContext } from "react";

export type Theme = "dark" | "light";

interface IThemeContext {
  theme: Theme;
  toggleTheme: () => void;
}

export const Context = createContext<IThemeContext>({
  theme: "dark",
  toggleTheme: () => {},
});
