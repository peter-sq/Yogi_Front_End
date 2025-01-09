import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/Home";

const Router = () => {
    const routes = [
     { path: '/', element: <Home /> },

    ];

    const router = createBrowserRouter(routes);

    return <RouterProvider router={router} />;

}

export default Router;

