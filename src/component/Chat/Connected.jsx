import React, {useEffect, useState} from 'react'
import {login, userList} from '../../socket/userConnected'
import {NavLink} from "react-router-dom"

export const Connected = () => {
    //TODO Create a rom for each talk with another user
    const [users, setUsers] = useState([])
    const myPseudo = localStorage.getItem("pseudo")

    useEffect(() => {
        login()
        userList(setUsers)
    }, [])

    return (
        <>
            <h4>En ligne</h4>
            <ul>
                {users.map((e, i) => e.pseudo !== myPseudo ? (
                    <li key={i}>
                        <NavLink to={`/chat/${e.pseudo}`} activeStyle={{fontSize: "18px"}}>
                            <span className="badge bg-success">{e.pseudo}</span>
                        </NavLink>
                    </li>
                ): '')}
            </ul>
        </>
    )
}
