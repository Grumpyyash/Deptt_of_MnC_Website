import React from 'react';
import './style.css';
import not_found_img from '../../assets/404_img.webp';

const NotFound = () => {
    return (
        <div className='img-container'>
            <img src={not_found_img} className='center-fit' alt="Not Found Image" />
        </div>
    );
};

export default NotFound;