import React from 'react';
import './header.css';
import logo from '../../pictures/logo.jpg';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';


const Header = () => {
  return (
    <div class="header-container">

    <img src={logo} class="header-logo" width="100px"/>

    <div class="header-links">
        <ul>

            <li><Link to="/">Home</Link> </li>
            <li><Link to="/episodes">Episode</Link></li>
            <li><Link to="/about">About</Link></li>

        </ul>
    </div>

    <div class="header-search-social">

        <div class="search-box">
            <button class="btn-search"><i class="fas fa-search"></i></button>
            <div className="input-icon">
                <input type="text" class="input-search" placeholder="Type to Search..."/>
                <FaSearch className='icon'/>
            </div>
        </div>

    </div>

</div>
  )
}

export default Header;