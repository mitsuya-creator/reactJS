import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactMe from "./components/test1/pages/Contact";
import Home from "./components/test1/pages/Home";
import NavBar from "./components/test1/pages/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NavBar />} >
                    <Route index element={<Home />} />
                    <Route path="/contact" element={<ContactMe />} />
                </Route>
            </Routes>
        </BrowserRouter>

    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);