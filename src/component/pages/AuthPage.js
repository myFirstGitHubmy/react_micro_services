import React, { useContext } from "react";
import {Route, Routes} from "react-router-dom";
import {LoginPage} from "./LoginPage";
import {Navbar} from "../Navbar";
import MainPage from "./MainPage";
import AboutPage from "./AboutPage";
import {RegistrationPage} from "./RegistrationPage";
import {DatabaseContext} from "../../context/database/databaseContext";

export default function AuthPage(){
    const database = useContext(DatabaseContext)
    const loggedIn = database.isAuth
    console.log(loggedIn)
    console.log(database.authUser)
    return (
        <div>
            {!loggedIn? <Routes>
                    <Route
                        exact
                        path="/"
                        element={<LoginPage/>}
                    />
                </Routes> :
                <div>
                    <Navbar/>
                    <Routes>
                        <Route
                            exact
                            path="/main"
                            element={<MainPage/>}
                        />
                        <Route path="/about" element={<AboutPage/>} />
                        <Route path="/login" element={<LoginPage/>} />
                        <Route path="/logout" element={<LoginPage/>} />
                        <Route path="/new" element={<RegistrationPage/>}/>
                    </Routes>
                </div>}
        </div>
    )
}