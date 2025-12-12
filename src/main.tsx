import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./styles/layouts/main.scss";
import "./styles/layouts/Home.module.scss";
import React from "react";
import { router } from "./routes";

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
