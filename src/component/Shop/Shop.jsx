import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    // useEffect(() => {
    //     const storedCart = getShoppingCart();
    //     let saveCart = [];
    //     //step:1 get id
    //     for (const id in storedCart) {
    //         // step:2 get the product by using id
    //         const addedProduct = products.find(product => product.id === id);
    //         //step:3 get and set the product quantity
    //         if (addedProduct) {
    //             const quantity = storedCart[id];
    //             addedProduct.quantity = quantity;
    //             // step 4: save to cart
    //             saveCart.push(addedProduct);
    //         }
    //     };
    //     // step 5: set cart
    //     setCart(saveCart)

    // }, [products]);

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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;