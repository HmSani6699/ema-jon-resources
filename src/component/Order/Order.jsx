import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

const Order = () => {
    const storedCart = useLoaderData();
    const [cart, setCart] = useState(storedCart)

    const deleteReviewItem = (id) => {
        const getProduct = cart.filter(product => product.id !== id);
        setCart(getProduct);
        removeFromDb(id)
    }

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart()
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
                <Cart
                    cart={cart}
                    clearCart={clearCart}
                >
                    <Link to="/proceed">
                        <button className='proceed-button'>
                            <span>Proceed Checkout</span>
                            <FontAwesomeIcon icon={faCreditCard} />
                        </button>
                    </Link>

                </Cart>
            </div>
        </div>
    );
};

export default Order;