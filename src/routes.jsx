import React from "react";
import {Route, BrowserRouter } from "react-router-dom"

import {Login} from "./pages/login"
import App from "./App";
import { Signup } from "./pages/signup";
import Mainpage from "./pages/mainpage";

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
        },
        {
            path:"mainpage",
            element: <Mainpage></Mainpage>
        }
    ])
}

export default Routes;