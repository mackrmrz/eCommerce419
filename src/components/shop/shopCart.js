import React, { Component } from 'react';


const CartButton = ({className, icon}) => {
    return (
        <div className={`${className} cart-button`}>
            <i className={icon}/>        
        </div>
    )
}

const CartContent = ({className, products}) => {
    let count = products.length;
    let productsJSX = products.map(product => <h1 key={product}>{product}</h1>);
    return(
        <div className={`${className} cart-content`}>
            <div className='cart-content__title'>
                Cart ({count})
            </div>
            <div className='cart-content__product'>
                {productsJSX}
            </div>
            <CartFooter className='cart-content__footer' products={products}/>
        </div>
    )
}

const CartFooter = ({className, products}) => {
    const price = 7.96;
    return(
        <div className={`${className} clart-footer`}>
            <a className='cart-footer__checkout'>
                checkout
            </a>
            <div className='cart-footer__subtotal'>
                Subtotal
            </div>
            <div className='cart-footer__price'>
                ${price}
            </div>
        </div>
    )
}

class ShopCart extends Component {
    render() {
        const { className } = this.props;
        return(
            <div className={`${className} shop-cart`}>
                <CartButton className='shop-cart__toggle' icon='fas fas-times'/>
                <CartContent className='shop-cart__content' products={[234, 23232, 23232]}/>
            </div>
        )
    }
}

export default ShopCart;