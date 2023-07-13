import React from 'react'
import './weekly.css';
import pic from '../../pictures/cover.png';
import pic1 from '../../pictures/cover1.png';
import pic2 from '../../pictures/cover2.png';

const Weekly = () => {
  return (
    <div class="weekly">

        <h1 class="weekly-podcast-h1">Weekly top podcast</h1>

        <div class="weekly-container">

            <div class="weekly-left">

                <img src={pic} width="100%"/>

                <div class="weekly-left-about">

                    <div class="weekly-left-about-left">

                        <p class="weekly-left-duration">40 Min</p>
            
                        <p class="weekly-left-title">Embeding privacy with tim kariotis</p>

                    </div>


                    <p>play</p>

                </div>


            </div>

            <div class="weekly-right">

                <div class="weekly-right-item">

                    <img src={pic} width="100%"/>

                    <div class="weekly-right-about">
        
                        <div class="weekly-right-about-right">
        
                            <p class="weekly-right-duration">40 Min</p>
                
                            <p class="weekly-right-title">Embeding privacy with tim kariotis</p>
        
                        </div>
        
        
                        <p>play</p>
        
                    </div>

                </div>

                <div class="weekly-right-item">

                    <img src={pic} width="100%"/>

                    <div class="weekly-right-about">
        
                        <div class="weekly-right-about-right">
        
                            <p class="weekly-right-duration">40 Min</p>
                
                            <p class="weekly-right-title">Embeding privacy with tim kariotis</p>
        
                        </div>
        
        
                        <p>play</p>
        
                    </div>
                    
                </div>

                <div class="weekly-right-item">

                    <img src={pic} width="100%"/>

                    <div class="weekly-right-about">
        
                        <div class="weekly-right-about-right">
        
                            <p class="weekly-right-duration">40 Min</p>
                
                            <p class="weekly-right-title">Embeding privacy with tim kariotis</p>
        
                        </div>
        
        
                        <p>play</p>
        
                    </div>
                    
                </div>

            </div>

        </div>


    </div>
  )
}

export default Weekly;