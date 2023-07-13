import React from 'react';
import './boxProduct.css';
import pic from '../../../pictures/cover.png';


const BoxProduct = ({picture,title,description}) => {
  return (
    <div className="recent-product-box-product">
    
    <img src={picture} className="recent-product-box-product-img"/>

    <div className="recent-product-box-about">

        <h3 className="recent-product-box-about-title">{title}</h3>

        <p className="recent-product-box-about-description">{description}</p>

        <p>play</p>

    </div>

    </div>
  )
}

export default BoxProduct