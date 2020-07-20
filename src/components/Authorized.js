import React from 'react'
import { Switch, Route } from "react-router-dom";
import Navbar from './Navbar';


import Button from '@material-ui/core/Button';

import Home from "./Home"
import Error404 from "./Error404"


export default function Authorized ({ logOut }) {
    return (
        <Switch>
            <Route exact path="/">
            <Navbar />
                <Home/>
                <Button   
                    onClick={logOut}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Log out
                </Button>
            </Route>
            <Route path="*">
                <Error404 />
            </Route>
        </Switch>        
    )
    
}