import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {receiveMessage, sendMessage} from "../../socket/userConnected";

export const Message = () => {
    const {pseudo} = useParams()
    const [message, setMessage] = useState("")
    const [allMessage, setAllMessage] = useState({})

    useEffect(() => {
        receiveMessage(setAllMessage)
    }, [allMessage])

    function handleSubmit(e) {
        e.preventDefault()
        sendMessage(pseudo, message)
    }

    function handleChange(e){
        setMessage(e.target.value)
    }


    return (
        <div className={"message-container"}>
            {JSON.stringify(allMessage)}
            <div className={"message"}>
                <ul id='message'>
                    <li>asdasdsa</li>

                </ul>
            </div>
            <form className={"message-input"} onSubmit={handleSubmit}>
                <div className={"form-group"}>
                    <input className="form-control" placeholder="Votre message" onChange={handleChange} value={message}/>
                </div>
            </form>
        </div>
    )
}
