import React from "react";
import {Route, BrowserRouter } from "react-router-dom"

import {Login} from "./pages/login"
import App from "./App";
import { Signup } from "./pages/signup";
import Mainpage from "./pages/mainpage";
import Artists from "./pages/artists";
import Likedmusics from "./pages/likedmusics";
import Account from "./pages/account";
import Artistmusics from "./pages/artistmusics";

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
        },
        {
            path:"artists",
            element: <Artists></Artists>
        },
        {
            path:"likedmusics",
            element: <Likedmusics></Likedmusics>
        },
        {
            path:"account",
            element: <Account></Account>
        },
        {
            path:"artists/:id",
            element: <Artistmusics></Artistmusics>
        }
    ])
}

export default Routes;