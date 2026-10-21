import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import TermekLista from "./components/TermekLista";
import LoginForm from "./components/loginForm.jsx";
import RegForm from "./components/regForm.jsx";
import UserForm from "./components/UserForm.jsx";
import "./App.css";

function App() {
    return (
        <div>
            <UserForm />
        </div>
    );
}

export default App;
