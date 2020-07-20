import React, { Component } from 'react'
import {Link} from 'react-router-dom';


const Navbar = (props) => {
    const { signOut, username } = props
        return (
            <div>
                <nav>
                    <Link to='/'> Home </Link>
                    -
                    <Link to='/portfolio'>Portfolio</Link>
                    -
                    <Link to='/merchandise'>Merchandise</Link>
                    -
                    <Link to='/about'> About</Link>
                    -
                    <Link to='/contact'>Contact </Link>
                    -
                    { username ? <button onClick={signOut}>Sign Out</button> : 
                    <Link to='/sign-in'> Sign In</Link> }
                </nav>
            </div>
        )
}

export default Navbar