import React , { lazy } from "react";
import { createBrowserRouter, RouterProvider, Route, Navigate } from "react-router-dom";
const Dashbaord = lazy(()=> import("../Dashbaord/Dashbaord"))

const Routes = () => {
    const router = createBrowserRouter([
        {
            path:"/",
            element: <Dashbaord/>,
            errorElement: "",
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Routes;