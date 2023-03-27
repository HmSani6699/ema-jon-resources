import React from 'react';
import './Product.css';

const Product = (props) => {
    const { img, name, price, ratings, seller } = props.product;
    console.log(props.product)
    return (
        <div className='product'>
            <div className='product-body'>
                <img src={img} alt="" />
                <h6>{name}</h6>
                <p>Price: {price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>

            <p >Add to cart</p>
        </div>
    );
};

export default Product;