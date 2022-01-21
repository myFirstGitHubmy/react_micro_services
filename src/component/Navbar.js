import React, { useContext } from "react";
import {NavLink} from "react-router-dom";
import {DatabaseContext} from "../context/database/databaseContext";

export const Navbar = (props) => {
    const data = useContext(DatabaseContext)
    console.log(props.isAuth)
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
            {!props.isAuth ?
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        to="/login"
                    >
                        <h5><span className="badge badge-secondary">Log in</span></h5>
                    </NavLink>
                </li>
                :
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        to="/"
                    >
                        <h5><span className="badge badge-secondary" onClick={data.logoutUser}>Log out</span></h5>
                    </NavLink>
                </li>
            }


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