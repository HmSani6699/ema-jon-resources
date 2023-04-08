import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = ({ product }) => {
    console.log(product)
    const { id, name, img, price, shipping } = product;
    return (
        <div className='review-item'>
            <div className='review-info'>
                <img src={img} alt="" />
                <div>
                    <h2>{name}</h2>
                    <p>Price : <span className='price'>${price}</span></p>
                    <p>Shipping : <span className='shipping'>${shipping}</span></p>
                </div>
            </div>
            <span className='delete-button'><FontAwesomeIcon icon={faTrashCan} /></span>
        </div>
    );
};

export default ReviewItem;