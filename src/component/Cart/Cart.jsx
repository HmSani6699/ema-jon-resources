import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    console.log(cart)

    let totalPrice = 0;
    let totalShipping = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    };

    let tex = totalPrice * 7 / 100;
    let grandTotal = totalPrice + totalShipping + tex;

    return (
        <div className='cart'>
            <h2 className='cart-title'>Order summary: {cart.length}</h2>
            <p>Total price: ${totalPrice}</p>
            <p>Total shipping charge: ${totalShipping}</p>
            <p>Tex: ${tex.toFixed(2)}</p>
            <h6 className='gand-total'>Grand total: ${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;