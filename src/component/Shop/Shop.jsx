import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storedCart = getShoppingCart();
        const setProduct = [];
        // step 1: get id 
        for (const id in storedCart) {
            // step 2: get the product by using id
            const addedCart = products.find(product => product.id === id);
            if (addedCart) {
                //step 3: set and get quantity
                const quantity = storedCart[id];
                addedCart.quantity = quantity + addedCart.quantity;
                //step 4: set product in cart
                setProduct.push(addedCart);
            }
        };
        setCart(setProduct)
    }, [products])
    const handleAddToCart = (product) => {
        const newProduct = [...cart, product];
        setCart(newProduct);
        addToDb(product.id)
    }

    const clearCart = () => {
        setCart([])
        deleteShoppingCart()
    }

    return (
        <div className='shop-container'>

            <div className='product-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>

            <div className='cart-container'>
                <Cart
                    cart={cart}
                    clearCart={clearCart}
                >
                    <Link to="order">
                        <button className='proceed-button'>
                            <span>Review Order</span>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </Link>

                </Cart>
            </div>
        </div>
    );
};

export default Shop;