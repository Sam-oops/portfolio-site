import React, { useEffect, useState } from "react";
import { Context, Theme } from "./context";

interface ProviderContextType {
  children: React.ReactNode;
}

export default function ThemeContextProvider({
  children,
}: ProviderContextType) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <Context.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </Context.Provider>
  );
}
