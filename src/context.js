import React, { Component } from 'react'
import API from './API'


const ProductContext = React.createContext()

class ProductProvider extends Component { 
    state = {
        products: [],
        detailsProduct: [],
        cart: [],
        popupOpen: false,
        popupProduct: [],
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    } 

    getItem = (id) => this.state.products.find(item => item.id === id)
    

    handleDetails = (id) => {
        const product = this.getItem(id)
        this.setState(() =>{
            return {
                detailsProduct: product,
                popupProduct: product
            }
        })
    }
    
    addToCart = (id) => {
        let tempProducts = [...this.state.products]
        const index = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index]
        product.inCart = true
        product.count = 1
        const price = product.price
        product.total = price

        this.setState(() => {
            return { products: tempProducts, cart:[...this.state.cart, product] }
        }, () => {
            this.addTotals()
        })
    }

    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const tempTax = subTotal * 0.2;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    }
    
    openPopup = (id) => {
        const product = this.getItem(id)
        this.setState(() => {
            return {popupProduct: product, popupOpen: true}
        })
    }

    closePopup = () => {
        this.setState(() => {
            return {popupOpen: false}
        })
    }

    componentDidMount() {
        API.getAllProduct()
        .then((products) => this.setState({
            products: products,
            detailsProduct: products[0],
            popupProduct: products[0],
            // cart: products
        }))
    }

    increment = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count + 1;
        product.total = product.count * product.price;

        this.setState(() =>{return{cart: [...tempCart]}}, ()=>{this.addTotals()})

    }
    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count - 1;
        if(product.count === 0 ){
            this.removeItem(id)
        } else {
            product.total = product.count * product.price;
            this.setState(() =>{return{cart: [...tempCart]}}, ()=>{this.addTotals()})
        }
    }

    removeItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart]

        tempCart = tempCart.filter(item => item.id !== id);

        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        this.setState(() => {
            return {
                cart: [...tempCart],
                products: [...tempProducts]
            };
        }, () => {
            this.addTotals();
        }
        );
    }

    clearCart = () => {
        this.setState(() => {
            return {cart: []}
        }, () => {
            API.getAllProduct()
            .then((products) => this.setState({
                products: products,
            }));
            this.addTotals()
        });
    }
    
    render() {
        
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetails: this.handleDetails,
                addToCart: this.addToCart,
                openPopup: this.openPopup,
                closePopup: this.closePopup,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer

export {ProductProvider, ProductConsumer}
