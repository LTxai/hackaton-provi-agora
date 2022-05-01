import React from "react";
import {Routes, Route} from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import LoginPage from "../pages/LoginPage/LoginPage";

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<LoginPage/>}/>
            <Route exact path="/home" element={<Dashboard/>}/>
        </Routes>
    )
}

export default Router