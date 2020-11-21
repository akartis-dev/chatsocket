import {Switch, Route} from 'react-router-dom'
import { Index } from './component/index/Index'
import {Chat} from './component/Chat/Chat'
import React from "react";

function App() {
  return (
    <div>
        <Switch>
            <Route path='/chat' component={Chat} />
            <Route path='/' component={Index} />
        </Switch>
    </div>
  );
}

export default App;
