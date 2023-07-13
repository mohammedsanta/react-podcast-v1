import React from 'react';
import './footer.css';
import logo  from'../pictures/logo.jpg';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>

        <div className="footer-top">

            <div className="footer-logo">

                <img src={logo} alt="" />

            </div>

            <div className="footer-words">

                <div className="footer-words-group">

                    <p>Services</p>
                    <p>About Us</p>
                    <p>Contact Us</p>

                </div>

                <div className="footer-words-group">

                    <p>ShowCast</p>

                </div>

                <div className="footer-words-group">

                    <p>Resources</p>
                    <p>Themes Tweak</p>


                </div>

                <div className="footer-words-group">

                    <p>Affilates</p>
                    <p>Support</p>
                    <p>Pre-Sale FAQS</p>

                </div>

            </div>

        </div>

        <hr className="footer-hr" />
        
        <div className="footer-bottom">

            <div className="footer-bottom-buttons">

                <button><FaFacebookF /></button>
                <button><FaInstagram /></button>
                <button><FaGoogle /></button>
                <button><FaTwitter /></button>

            </div>

            <p className='footer-bottom-copyright'>©Copyright All rights reserved.</p>

        </div>


    </div>
  )
}

export default Footer