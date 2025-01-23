import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/Home";
import AllCrypto from "../pages/AllCrypto";

const Router = () => {
    const routes = [
     { path: '/', element: <Home /> },
     { path: '/all-crypto', element: <AllCrypto /> },

    ];

    const router = createBrowserRouter(routes);

    return <RouterProvider router={router} />;

}

export default Router;

