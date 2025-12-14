import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./styles/layouts/main.scss";
import "./styles/layouts/Home.module.scss";
import React from "react";
import { router } from "./routes";
import ThemeContextProvider from "./context/themeContext";

createRoot(document.getElementById("root")!).render(
  <ThemeContextProvider>
    <RouterProvider router={router} />
  </ThemeContextProvider>
);
