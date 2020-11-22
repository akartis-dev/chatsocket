import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {receiveMessage, sendMessage, setUserPseudo} from "../../socket/userConnected";
import {useIsNeedToShow} from "../../Hooks/MessageService";

export const Message = () => {
    const {pseudo} = useParams()
    const [message, setMessage] = useState("")
    const [allMessage, setAllMessage] = useState([])
    const {newMessage} = useIsNeedToShow()
    const myPseudo = localStorage.getItem("pseudo")

    useEffect(() => {
        receiveMessage(setAllMessage, newMessage)
    }, [])

    useEffect(() => {
        setUserPseudo(pseudo)

        return () => {
            setAllMessage([])
        }
    }, [pseudo])

    function handleSubmit(e) {
        e.preventDefault()
        sendMessage(pseudo, message)
        setAllMessage(c => [...c, {pseudo: myPseudo, message}])
        setMessage("")
    }

    function handleChange(e) {
        setMessage(e.target.value)
    }

    return (
        <div className={"message-container"}>
            <div className={"message"}>
                <h4 className='bg-dark text-white p-1'>{pseudo}</h4>
                <ul id='all-message'>
                    {allMessage.map((e, i) => (
                        <li key={i} className={e.pseudo === myPseudo ? 'my-message' : 'other-message'}>{e.message}</li>
                    ))}
                </ul>
            </div>
            <form className={"message-input"} onSubmit={handleSubmit}>
                <div className={"form-group"}>
                    <input className="form-control" placeholder="Votre message" onChange={handleChange}
                           value={message}/>
                </div>
            </form>
        </div>
    )
}
