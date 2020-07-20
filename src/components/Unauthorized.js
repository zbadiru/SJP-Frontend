import React from 'react'
import { Switch, Route } from "react-router-dom";

import SignIn from "./SignIn"
import Error404 from "./Error404"


export default function Unauthorized () {
    
    return (
        <div>
        <Switch>
            <Route exact path="/">
                <SignIn/>
            </Route>
            <Route path="*">
                <Error404 />
            </Route>
        </Switch>        
        </div>
    )
}
