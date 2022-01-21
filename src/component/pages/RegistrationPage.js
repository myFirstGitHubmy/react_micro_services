import React, {useContext, useState} from "react";
import {DatabaseContext} from "../../context/database/databaseContext";


export const RegistrationPage = () => {
    const data = useContext(DatabaseContext)
    const [login, setLogin] = useState('')
    const [password, setPass] = useState('')
    const [email, setEmail] = useState('')
    const [visiblePass, setVisiblePass] = useState(false)

    const handleVisible = (event) => {
        setVisiblePass(event.target.checked)
    }

    const create_new_user = () => {
        if (login !== '' && password !== '' && email !== '')
            data.createUser(
                {
                    name: login,
                    login: login,
                    password: password,
                    email: email
                })
                .then(res => console.log(res))
                .catch(res => console.log(res))
    }

    return (
        <div className="justify-content-center align-items-center flex-md-column">
            <div className="align-content-lg-center col-sm-5 text-center align-items-center">
                <form>
                    <div className="align-content-center">
                        <h2>Регистрация пользователя</h2>
                    </div>
                    <div className="form-group">
                        <div>
                            <div className="form-group row">
                                <label htmlFor="inputLogin" className="col-sm-2 col-form-label">Login</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="inputLogin" placeholder="Login"
                                           onChange={e => setLogin(e.target.value)}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    {visiblePass ?
                                        <input type="text" className="form-control" id="inputPassword"
                                               placeholder="Password" onChange={e => setPass(e.target.value)}/>
                                        :
                                        <input type="password" className="form-control" id="inputPassword"
                                               placeholder="Password" onChange={e => setPass(e.target.value)}/>
                                    }

                                    <input type="checkbox" onChange={e => handleVisible(e)}/>
                                    <label htmlFor=""> Показать пароль</label>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="staticEmail"
                                           placeholder="email@example.com" onChange={e => setEmail(e.target.value)}/>
                                </div>
                            </div>
                            <button className="btn btn-primary" type="submit" onClick={create_new_user}>Создать</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}