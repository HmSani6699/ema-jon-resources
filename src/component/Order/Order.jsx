import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'
import { removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const storedCart = useLoaderData();
    const [cart, setCart] = useState(storedCart)

    const deleteReviewItem = (id) => {
        const getProduct = cart.filter(product => product.id !== id);
        setCart(getProduct);
        removeFromDb(id)
    }
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        deleteReviewItem={deleteReviewItem}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;