import React from 'react'


import Button from '@material-ui/core/Button';

import Home from "./Home"
import Error404 from "./Error404"


export default function Authorized ({ logOut }) {

    return (
        <Button   
            onClick={logOut}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
        >
            Log out
        </Button>
    )
    
}