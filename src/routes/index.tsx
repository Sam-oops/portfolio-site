import { createBrowserRouter } from "react-router-dom";
import { paths } from "./paths";
import Home from "../pages/Home";
import About from "../pages/About";
import React from "react";
import Contacts from "../pages/Contacts";
import Projects from "../pages/Projects";

export const router = createBrowserRouter([
    {
        path: paths.home,
        element: <Home />
    },
    {
        path: paths.about,
        element: <About />
    },
    {
        path: paths.contacts,
        element: <Contacts />
    },
    {
        path: paths.projects,
        element: <Projects />
    },
])