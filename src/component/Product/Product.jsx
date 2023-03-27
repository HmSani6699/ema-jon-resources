import React from 'react';
import './Product.css';

const Product = (props) => {
    const { img, name, price, ratings, seller } = props.product;
    console.log(props.product)
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='cart-info'>
                <h6 className='cart-title'>{name}</h6>
                <p className='cart-price'>Price: ${price}</p>
                <div className='cart-author-info'>
                    <p>Manufacturer: {seller}</p>
                    <p>Rating: {ratings}</p>
                </div>
            </div>
            <button>Add to cart</button>
        </div>
    );
};

export default Product;