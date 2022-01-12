import React, { useContext } from "react";
import {DatabaseContext} from "../../context/database/databaseContext";

export default function ListUsersPage() {
    const database = useContext(DatabaseContext)
    return (
        <div>
            <ul>
                {Object.keys(database.users).map(user => (
                    <li key={user.toString()}>{database.users[user].name}</li>)
                )}
            </ul>
        </div>
    )
}