import React from "react";
import {Route, BrowserRouter } from "react-router-dom"

import {Login} from "./pages/login"
import App from "./App";
import { Signup } from "./pages/signup";

const Routes = () =>{
    return([
        {
            path:"/",
            element: <App></App>
        },
        {
            path:"login",
            element: <Login></Login>
        },
        {
            path:"signup",
            element: <Signup></Signup>
        }
    ])
}

export default Routes;