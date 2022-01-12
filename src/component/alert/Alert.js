import React, { useContext } from "react";
import {AlertContext} from "../../context/alert/AlertContext";

export const Alert = () => {
    const {alert, hide} = useContext(AlertContext)

    if (alert.visible === false){
        return null
    }

    return (
        <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
            <strong>{alert.text}</strong>
            <button onClick={hide} type="button" className="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}