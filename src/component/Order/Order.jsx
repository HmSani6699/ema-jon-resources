import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Order = () => {
    const cart = useLoaderData();
    return (
        <div className='shop-container'>
            <div className='product-container'>
                <h2>cart body: {cart.length}</h2>
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;