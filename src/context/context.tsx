import { createContext } from "react";

export type Theme = "dark" | "light";

interface ThemeProps {
  theme: Theme;
  setTheme: () => void;
}

export const Context = createContext<ThemeProps>({
  theme: "dark",
  setTheme: () => {},
});
