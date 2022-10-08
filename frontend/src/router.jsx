import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Login} from './pages/Login/index'
import {Dashboard} from './pages/Dashboard/index'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/" element={<Dashboard/>}/>
            </Routes>
        </BrowserRouter>
    );
}