import React from 'react';
import './latestProduct.css';
import pic from '../../pictures/cover.png';
import pic1 from '../../pictures/cover1.png';
import pic2 from '../../pictures/cover2.png';

const LatestProduct = () => {
  return (
    <div class="latest-porducts">

        <h3 class="latest-porducts-h1">Latest Product</h3>

        <div class="latest-products-products">

            <div class="latest-products-products-product-top">
                <img src={pic} width="100%"/>
            </div>

            <div class="latest-products-products-product-bottom">

                <img src={pic} width="100%"/>
                <img src={pic1} width="100%"/>
                <img src={pic2} width="100%"/>
                <img src={pic} width="100%"/>

            </div>

        </div>

    </div>
  )
}

export default LatestProduct