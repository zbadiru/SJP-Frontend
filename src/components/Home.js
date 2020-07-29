import React, { Component } from 'react'
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook} from '@fortawesome/free-brands-svg-icons'


export default class Home extends Component {
    render() {
        return (
            <ProductWrapper>
            <div style={{background: 'url(https://i.postimg.cc/ZnHTP71s/aircraft-airplane-boat-1575833.jpg)'}} className="page-holder bg-cover">
            <div className="container py-5">
                <header className="text-center text-white py-5">
                <h1 className="display-4 font-weight-bold mb-4">Welcome to SJP Creative</h1>
                </header>
                <div className="text-white">
                <p className="lead"> Here we Believe<code className="bg-white px-2 py-1 rounded">Quality Not Quantity</code> So, lets create something wonderful.</p>
                </div>
            </div>
            <div className='social-container'>
                <h3 className='text-white'> stonyworld@outlook.com </h3>
                <a 
                href="https://www.instagram.com/sjp_p"
                target="_blank"
                className="instagram social"
                >
                    <FontAwesomeIcon icon={faInstagram} size='2x' />
                </a>
                <a 
                href="https://www.facebook.com/sjpcreative"
                target="_blank"
                className="facebook social"
                >
                    <FontAwesomeIcon icon={faFacebook} size='2x' />
                </a>
            </div>
            </div>
            </ProductWrapper>
        )
    }
}

const ProductWrapper = styled.div`
.text-white{
    color: white !important;
    margin: 100px;
}
`