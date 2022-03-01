import React from "react";
import {MenuTypes} from "./MenuTypes";

export default function MenuUserPage() {
    return (
        <div className="dropdown-menu nav-show " aria-expanded="false" aria-labelledby="dropdownMenuButton">
            {
                MenuTypes.map(item => (
                    <a className="dropdown-item" key={item.id} href="#">{item.name}</a>
                ))
            }
        </div>
    )
}