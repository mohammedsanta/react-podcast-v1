import React from 'react'
import './weekly.css';
import pic from '../../pictures/cover.png';
import pic1 from '../../pictures/cover1.png';
import pic2 from '../../pictures/cover2.png';

const Weekly = () => {
  return (
    <div className="weekly">

        <h1 className="weekly-podcast-h1">Weekly top podcast</h1>

        <div className="weekly-container">

            <div className="weekly-left">

                <img src={pic} width="100%"/>

                <div className="weekly-left-about">

                    <div className="weekly-left-about-left">

                        <p className="weekly-left-duration">40 Min</p>
            
                        <p className="weekly-left-title">Embeding privacy with tim kariotis</p>

                    </div>


                    <p>play</p>

                </div>


            </div>

            <div className="weekly-right">

                <div className="weekly-right-item">

                    <img src={pic} width="100%"/>

                    <div className="weekly-right-about">
        
                        <div className="weekly-right-about-right">
        
                            <p className="weekly-right-duration">40 Min</p>
                
                            <p className="weekly-right-title">Embeding privacy with tim kariotis</p>
        
                        </div>
        
        
                        <p>play</p>
        
                    </div>

                </div>

                <div className="weekly-right-item">

                    <img src={pic} width="100%"/>

                    <div className="weekly-right-about">
        
                        <div className="weekly-right-about-right">
        
                            <p className="weekly-right-duration">40 Min</p>
                
                            <p className="weekly-right-title">Embeding privacy with tim kariotis</p>
        
                        </div>
        
        
                        <p>play</p>
        
                    </div>
                    
                </div>

                <div className="weekly-right-item">

                    <img src={pic} width="100%"/>

                    <div className="weekly-right-about">
        
                        <div className="weekly-right-about-right">
        
                            <p className="weekly-right-duration">40 Min</p>
                
                            <p className="weekly-right-title">Embeding privacy with tim kariotis</p>
        
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