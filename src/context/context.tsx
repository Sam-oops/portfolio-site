import { createContext } from "react";

export type Theme = "dark" | "light";

interface ThemeProps {
  theme?: string;
  toggleTheme: () => void;
}

export const Context = createContext<ThemeProps>({
  theme: "dark",
  toggleTheme: () => {},
});
