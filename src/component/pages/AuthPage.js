import React, { useContext } from "react";
import {Route, Routes} from "react-router-dom";
import {LoginPage} from "./LoginPage";
import {Navbar} from "../Navbar";
import MainPage from "./MainPage";
import AboutPage from "./AboutPage";
import {RegistrationPage} from "./RegistrationPage";
import {DatabaseContext} from "../../context/database/databaseContext";
import {AlertContext} from "../../context/alert/AlertContext";

export default function AuthPage(){
    const database = useContext(DatabaseContext)
    const {show} = useContext(AlertContext)
    const loggedIn = database.isAuth
    return (
        <div>
            <Navbar isAuth={loggedIn}/>
                <div>
                    <Routes>
                        <Route
                            exact
                            path="/main"
                            element={<MainPage/>}
                        />
                        <Route path="/about" element={<AboutPage/>} />
                        <Route path="/login" element={<LoginPage/>} />
                        <Route path="/" element={<LoginPage/>} />
                        <Route path="/new" element={<RegistrationPage/>}/>
                    </Routes>
                </div>
        </div>
    )
}