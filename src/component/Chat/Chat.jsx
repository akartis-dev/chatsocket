import React from 'react'
import {Connected} from './Connected'
import {Message} from './Message'
import {Route, Switch} from "react-router-dom";

export const Chat = () => {
    return (
        <div className="container">
            <div className="row">
                <h1>Chat page</h1>
                <div className="col-sm-9">
                    <Route path='/chat/:pseudo' component={Message}/>
                </div>
                <div className="col-sm-3">
                    <Connected/>
                </div>
            </div>
        </div>
    )
}
