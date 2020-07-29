import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Buttons';


const Navbar = (props) => {
    const { signOut, username } = props
        return (
            <div>
                <NavWrapper className='navbar navbar-expand-sm navbar-dark  px-px-sm-5'>
                    <ul className='navbar-nav align-items-center'>
                    <li className='nav-item '>
                    <Link to='/' className='nav-link'> 
                    <ButtonContainer>
                        <span>
                            <i  className='fas fa-shopping-cart'/>
                            Home 
                        </span>
                    </ButtonContainer>
                    </Link>
                    </li>

                    <li className='nav-item'>
                    <Link to='/portfolio'>
                    <ButtonContainer>
                        <span>
                            <i  className='fas fa-shopping-cart'/>
                            Portfolio
                        </span>
                    </ButtonContainer>
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='/products'>
                    <ButtonContainer>
                        <span>
                            <i  className='fas fa-shopping-cart'/>
                            Products
                        </span>
                    </ButtonContainer>
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='/about'> 
                    <ButtonContainer>
                        <span>
                            <i  className='fas fa-shopping-cart'/>
                            About
                        </span>
                    </ButtonContainer>
                    
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='/contact'>
                    <ButtonContainer>
                        <span>
                            <i  className='fas fa-shopping-cart'/>
                            Contact
                        </span>
                    </ButtonContainer>
                    </Link>
                    </li>
                    { username ? 
                    <ButtonContainer onClick={signOut}>
                        <span>
                            <i  className='fas fa-shopping-cart'/>
                            Sign Out
                        </span>
                    </ButtonContainer> : 
                    <li className='nav-item'><Link to='/sign-in'>
                        <ButtonContainer>
                        <span>
                            <i  className='fas fa-shopping-cart'/>
                            Sign In
                        </span>
                    </ButtonContainer> 
                    </Link>
                    </li> 
                    }
                    </ul>
                    <Link to='/cart' className='ml-auto'>
                    <ButtonContainer>
                        <span>
                            <i  className='fas fa-shopping-cart'/>
                            My cart
                        </span>
                    </ButtonContainer>
                </Link>
                </NavWrapper>
            </div>
        )
}

const NavWrapper = styled.nav `
background: var(--mainBlue);
.nav-link{
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
}
ul{
    list-style-type: none;
}
`

export default Navbar