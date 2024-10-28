import React from "react";
import { BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import BriefingSites from "./pages/BriefingSites"
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([

    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "briefing-sites",
                element: <BriefingSites/>
            }
        ]
    }

]);

export default router;