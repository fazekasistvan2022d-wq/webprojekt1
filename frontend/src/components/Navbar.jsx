import { NavLink } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/test">test</NavLink>
            <NavLink to="/register">Regisztráció</NavLink>
        </nav>
    );
}
