import React from "react";
import {Routes, Route} from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import LoginPage from "../pages/LoginPage/LoginPage";
import PaginaIncompleta from "../pages/ErrorPages/IncompletePage";
import PaginaNaoEncontrada from "../pages/ErrorPages/PageNotFound";

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<LoginPage/>}/>
            <Route exact path="/home" element={<Dashboard/>}/>
            <Route exact path="/profile" element={<PaginaIncompleta/>}/>
            <Route exact path="/help" element={<PaginaIncompleta/>}/>
            <Route exact path="/config" element={<PaginaIncompleta/>}/>
            <Route exact path="/*" element={<PaginaNaoEncontrada/>}/>
        </Routes>
    )
}

export default Router