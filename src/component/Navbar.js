import React from "react";
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (<nav className="navbar navbar-dark bg-primary">
        <div className="navbar-brand">
            App
        </div>

        <ul className="navbar-nav container-lg row-block-start">
            <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        to="/main"
                    >
                        Главная
                    </NavLink>
            </li>
            <li>
                    <NavLink
                        className="nav-link"
                        to="/about"
                    >
                        Инфо
                    </NavLink>
            </li>
        </ul>
        <ul className="navbar-nav container-lg row-block-end m-1">
            <li className="nav-item">
                <NavLink
                    className="nav-link"
                    to="/login"
                >
                    <h5><span className="badge badge-secondary">Log in</span></h5>
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                    className="nav-link"
                    to="/logout"
                >
                    <h5><span className="badge badge-secondary">Log out</span></h5>
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                    className="nav-link"
                    to="/new"
                >
                    <h5><span className="badge badge-secondary">Reg</span></h5>
                </NavLink>
            </li>
        </ul>
    </nav>)
}