import React, {useEffect} from 'react'
import {Connected} from './Connected'
import {Message} from './Message'
import {Route, Switch} from "react-router-dom";
import {receiveMessageInAnotherComponent} from "../../socket/userConnected";
import {useIsNeedToShow} from "../../Hooks/MessageService";
import {AboutChat} from "./AboutChat";

export const Chat = () => {

    const {toastNewMessage} = useIsNeedToShow()

    useEffect(() => {
        receiveMessageInAnotherComponent(toastNewMessage)
    }, [])

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-sm-12 col-md-3">
                    <Connected/>
                </div>
                <div className="col-sm-12 col-md-9">
                    <Switch>
                        <Route path='/chat/:pseudo' component={Message}/>
                        <Route path='/chat/' component={AboutChat}/>
                    </Switch>
                </div>
            </div>
        </div>
    )
}
