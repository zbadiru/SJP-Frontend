import React, { Component } from 'react'
import styled from 'styled-components'
import { ProductConsumer } from '../context'
import { ButtonContainer} from './Button'
import { Link } from 'react-router-dom'

export default class Popup extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {popupOpen, closePopup} = value;
                    const {img, name, price } = value.popupProduct;
                    
                    if(!popupOpen){
                        return null
                    } else {
                        return( <PopupContainer>
                            <div className="container">
                            <div className="row">
                            <div id="popup" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                <h5> item added to the cart</h5>
                                <img src={img} className="img-fluid" alt="product" />
                                <h5>{name}</h5>
                                <h5 className="text_muted"> price : £ {price} </h5>
                                <Link to='/' >
                                    <ButtonContainer onClick={() => closePopup()}>
                                        Continue Shopping
                                    </ButtonContainer>
                                </Link>
                                <Link to='/cart' >
                                    <ButtonContainer  cart onClick={() => closePopup()}>
                                        Go to Cart
                                    </ButtonContainer>
                                </Link>
                            </div>
                            </div>
                            </div>
                        </PopupContainer>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }
}
const PopupContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    #popup{
        background: var(--mainWhite);
    }

`
