import React from 'react';
import './headerSection.css';
import Header from '../header/Header';
import pic from '../../pictures/cover.png';
import pic1 from '../../pictures/cover1.png';
import pic2 from '../../pictures/cover2.png';
import Slider from './Slider';

const HeaderSection = () => {

    const slides = [
        {url: pic,number: 0},
        {url: pic1,number: 1},
        {url: pic2,number: 2},
    ];

    return (
    <header>

    <Header />

    <div class="header-section">

        <h1 class="header-section-h1">A Podcast About <br/> <span class="header-section-h1-span">Design, Travel & Fashion</span></h1>

        <Slider slides={slides} />

        <div class="header-section-bottom">

            <div class="header-section-bottom-more">

                <p>VIEW MORE FEATURED EPISODE <i class="fa-regular fa-arrow-right"></i></p>

            </div>

        </div>

    </div>


</header>
  )
}

export default HeaderSection;