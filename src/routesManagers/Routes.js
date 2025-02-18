import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/Home";
import AllCrypto from "../pages/AllCrypto";
import Coin from "../pages/Coin";

const Router = () => {
    const routes = [
     { path: '/', element: <Home /> },
     { path: '/all-crypto', element: <AllCrypto /> },
     { path: '/coin/:coinId', element: <Coin /> },

    ];

    const router = createBrowserRouter(routes);

    return <RouterProvider router={router} />;

}

export default Router;

