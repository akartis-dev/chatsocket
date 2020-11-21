import React from 'react'
import { Connected } from './Connected'
import { Message } from './Message'

export const Chat = () => {
    return(
        <div className="container">
            <div className="row">
                <h1>Chat page</h1>
                <div className="col-sm-9">
                    <Message />
                </div>
                <div className="col-sm-3">
                    <Connected />
                </div>
            </div>
        </div>
    )
}