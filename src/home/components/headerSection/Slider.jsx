import React, { useEffect, useState } from 'react';
import './headerSection.css';
import './slider.css';
import pic from '../../pictures/cover.png';
import pic1 from '../../pictures/cover1.png';
import pic2 from '../../pictures/cover2.png';

const Slider = ({slides}) => {
  
    const [currentIndex,setCurrentIndex] = useState(0);

    useEffect(() => setSlider(),[])
  
    const styleslide = {
        width: "1000px",
        height: "650px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: "10px",
        backgroundImage: `url(${slides[currentIndex].url})`,
    };

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        setSlider(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        setSlider(newIndex);
    }

    const setSlider = (slideIndex) => {
        
        const sliderChilds = document.querySelector("#sliders").childNodes;

        const getSlid = document.querySelector(`#slide-${slideIndex}`);
        
        if(typeof(slideIndex) === "undefined") {
            return sliderChilds[0].classList.add('slide-active')
        }
        
        sliderChilds.forEach(e => e.classList.remove('slide-active'));

        getSlid.classList.add('slide-active');
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
        setSlider(slideIndex);
    }

    return (
    <>
    
    <div class="header-section-covers">

        <div className="container-pic">

            <div className="left-arrow-style" onClick={() => goToPrevious()}>Previous</div>
            <div className="right-arrow-style" onClick={() => goToNext()}>Next</div>

            <div style={styleslide}>
        </div>

        <div className='slider-numbers' id="sliders">
            {slides.map((slide,slideIndex) => (
                <div key={slideIndex} id={`slide-${slide.number}`} onClick={(slider) =>{

                                        
                    goToSlide(slideIndex)


                }}>{slideIndex + 1}</div>
            ))}
        </div>

        </div>

    </div>
    
    </>
  )
}

export default Slider;