import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {

    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }
    return (
        <div className='cart'>
            <h2 className='cart-title'>Order summary: {cart.length}</h2>
            <p>Total price: {total}</p>
            <p>Total shipping charge: { }</p>
            <p>Tex: ${ }</p>
            <h6>Grand total: ${ }</h6>
        </div>
    );
};

export default Cart;