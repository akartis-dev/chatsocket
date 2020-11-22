import React, {useEffect, useState} from 'react'
import {login, userList} from '../../socket/userConnected'
import {NavLink} from "react-router-dom"

export const Connected = () => {

    const [users, setUsers] = useState([])
    const myPseudo = localStorage.getItem("pseudo")

    useEffect(() => {
        login()
        userList(setUsers)
    }, [])

    return (
        <>
            <div>
                <h5>My profil</h5>
                <h6><i className="fa fa-user" /> {localStorage.getItem('pseudo')}</h6>
            </div>
            <hr/>
            <h4><i className="fa fa-list"/> En ligne</h4>
            <ul className="list-connected">
                {users.map((e, i) => e.pseudo !== myPseudo ? (
                    <li key={i}>
                        <NavLink to={`/chat/${e.pseudo}`} activeClassName="activePseudo">
                            <i className="fa fa-user-circle text-dark mr-2"/>
                            <div className="one-pseudo">
                                <div>{e.pseudo}</div>
                                <i className="fa fa-circle"/>
                            </div>
                        </NavLink>
                    </li>
                ) : '')}
            </ul>
        </>
    )
}
