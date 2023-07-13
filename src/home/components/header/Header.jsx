import React from 'react';
import './header.css';
import logo from '../../pictures/logo.jpg';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';


const Header = () => {
  return (
    <div className="header-container">

    <img src={logo} className="header-logo" width="100px"/>

    <div className="header-links">
        <ul>

            <li><Link to="/">Home</Link> </li>
            <li><Link to="/episodes">Episode</Link></li>
            <li><Link to="/about">About</Link></li>

        </ul>
    </div>

    <div className="header-search-social">

        <div className="search-box">
            <button className="btn-search"><i className="fas fa-search"></i></button>
            <div className="input-icon">
                <input type="text" className="input-search" placeholder="Type to Search..."/>
                <FaSearch className='icon'/>
            </div>
        </div>

    </div>

</div>
  )
}

export default Header;