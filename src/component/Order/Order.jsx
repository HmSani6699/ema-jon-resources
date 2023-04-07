import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Order = () => {
    const cart = useLoaderData();
    console.log(cart)
    return (
        <div className='shop-container'>
            <div className='product-container'>
                <h2>cart body</h2>
            </div>
            <div className='cart-container'>
                <Cart cart={[]}></Cart>
            </div>
        </div>
    );
};

export default Order;