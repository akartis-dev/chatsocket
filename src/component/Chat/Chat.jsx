import React from 'react'
import {Connected} from './Connected'
import {Message} from './Message'
import {Route, Switch} from "react-router-dom";

export const Chat = () => {
    return (
        <div className="container">
            <div className="row">
                <h1>Welcome {localStorage.getItem('pseudo')}</h1>
                <div className="col-sm-9">
                    <Switch>
                        <Route path='/chat/:pseudo' component={Message}/>
                    </Switch>
                </div>
                <div className="col-sm-3">
                    <Connected/>
                </div>
            </div>
        </div>
    )
}
