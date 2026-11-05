import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import TermekLista from "./components/TermekLista";
import LoginForm from "./components/loginForm.jsx";
import RegForm from "./components/regForm.jsx";
import UserForm from "./components/UserForm.jsx";
import Home from "./components/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import MultiForm from "./components/MultiForm.jsx";
import "./App.css";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<UserForm />} />
                <Route path="/multiform" element={<MultiForm />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
