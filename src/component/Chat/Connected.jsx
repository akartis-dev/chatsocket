import React, {useEffect, useState} from 'react'
import {login, userList} from '../../socket/userConnected'

export const Connected = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        login()
        userList(setUsers)
    }, [])

    return (
        <>
            <h4>En ligne</h4>
            <ul>
                {users.map((e, i) => (
                    <li key={i}><span className="badge bg-success">{e}</span></li>
                ))}
            </ul>
        </>
    )
}
