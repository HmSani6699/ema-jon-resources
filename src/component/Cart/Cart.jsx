import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ cart, clearCart }) => {
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        if (product.quantity === 0) {
            product.quantity = 1
        }
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    };

    let tex = totalPrice * 7 / 100;
    let grandTotal = totalPrice + totalShipping + tex;

    return (
        <div className='cart'>
            <h2 className='cart-title'>Order summary: {quantity}</h2>
            <p>Total price: ${totalPrice}</p>
            <p>Total shipping charge: ${totalShipping}</p>
            <p>Tex: ${tex.toFixed(2)}</p>
            <h6 className='gand-total'>Grand total: ${grandTotal.toFixed(2)}</h6>
            <button onClick={clearCart} className='clear-cart-btn'>
                <span>Clear cart</span>
                <FontAwesomeIcon icon={faTrashCan} />
            </button>
        </div>
    );
};

export default Cart;