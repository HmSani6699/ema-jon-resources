import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = ({ product, deleteReviewItem }) => {
    const { id, name, img, price, quantity } = product;
    return (
        <div className='review-item'>
            <div className='review-info'>
                <img src={img} alt="" />
                <div>
                    <h2>{name}</h2>
                    <p>Price : <span className='price'>${price}</span></p>
                    <p>quantity : <span className='shipping'>{quantity}</span></p>
                </div>
            </div>
            <button onClick={() => deleteReviewItem(id)} className='delete-button'><FontAwesomeIcon icon={faTrashCan} /></button >
        </div>
    );
};

export default ReviewItem;