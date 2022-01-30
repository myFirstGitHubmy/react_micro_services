import React, {useContext, useState} from "react";
import {DatabaseContext} from "../../context/database/databaseContext";
import {Alert} from "../alert/Alert";
import {AlertContext} from "../../context/alert/AlertContext";
import {Link, Route, Routes} from "react-router-dom";
import {RegistrationPage} from "./RegistrationPage";


export const LoginPage = () => {
    const data = useContext(DatabaseContext)
    const {show, hide} = useContext(AlertContext)
    const [form, setForm] = useState({login: ''})
    const [visiblePass, setVisiblePass] = useState(false)

    const handleVisible = (event) => {
        setVisiblePass(event.target.checked)
    }

    const handleForm = (event) => {
        const authForm = {...form, [event.target.name]: event.target.value, name: form.login}
        setForm(authForm)
    }

    const onChecked = () => {
        setVisiblePass(!visiblePass)
    }

    const logIn = () => {
        if (form.login !== '' && form.password !== '' && form.email !== '')
            data.authorizationUser(form)
                .then(res => {
                        show('Successfully authorization user', 'success')
                })
                .catch(res => show('incorrected login or password','danger'))
        data.allUsers()
            .then(res => console.log("qwe"))
    }


    return (
        <div className="justify-content-center align-items-center flex-md-column login-form">
            <div className="align-content-lg-center col-sm-5 text-center align-items-center login-form-control">
                <form onSubmit={e => e.preventDefault()}>
                    <Alert/>
                    <div className="align-content-center">
                        <h2>Authorization user</h2>
                    </div>
                    <div className="form-group">
                        <div>
                            <div className="form-group row">
                                <label htmlFor="inputLogin" className="col-sm-2 col-form-label">Login</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" name="login" id="login" placeholder="Login"
                                           onChange={e => handleForm(e)}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10 form-group">
                                    {visiblePass ?
                                        <input type="text" className="form-control" name="password" id="password"
                                               placeholder="Password" onChange={e => handleForm(e)}/>
                                        :
                                        <input type="password" className="form-control" name="password" id="password"
                                               placeholder="Password" onChange={e => handleForm(e)}/>
                                    }
                                        <button className="show-pass-btn" onClick={onChecked}>
                                            <input type="checkbox" checked={visiblePass} onChange={e => handleVisible(e)}/>
                                            <label>Показать пароль</label>
                                        </button>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" name="email" id="email"
                                           placeholder="email@example.com" onChange={e => handleForm(e)}/>
                                </div>
                            </div>
                            <div>
                                <button className="btn btn-primary" type="submit" onClick={logIn}>Вход</button>
                                <button className="btn btn-primary m-3"
                                        onClick={null}
                                        >Регистрация пользователя
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}