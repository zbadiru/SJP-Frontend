import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Buttons'

class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                const {id, img, price, name, inCart} = value.detailsProduct
                // const {popupOpen, closePopup} = value;
                return (
                    <div className="container py-5"> { /* name */ } 
                    <div className="row">
                    <div className="col-10 mx-auto text-centre text-slanted text-blue my-5">
                    <h1>{}</h1>
                    </div>
                    </div>
                    {/* end name */}
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-4">
                            <img src={img} className="img-fluid" alt="product" />
                        </div>
                        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                            <h2> Name : {name}</h2>
                            <h4 className="text-blue">
                                <strong>
                                    price : <span>£</span>
                                    {price}
                                </strong>
                            </h4>
                            {/* buttons */}
                            <div>
                                <Link to='/products'>
                                    <ButtonContainer>
                                        Back to Products
                                    </ButtonContainer>
                                </Link>
                                <ButtonContainer 
                                    cart
                                    disabled={inCart ? true : false}
                                    onClick={() => {
                                        value.addToCart(id);
                                        value.openPopup(id);
                                }}>
                                    {inCart ? 'inCart' : 'add to cart'}
                                </ButtonContainer>
                            </div>
                        </div>
                    </div>
                    </div>
                )
                }}
            </ProductConsumer>
        )
    }
}

export default Details