import React from 'react';
import './Header.css'
import Logo from "../../images/Logo.svg";

const Header = () => {
    return (
        <div className='header'>
            <img src={Logo} alt="" />
            <nav>
                <a href="/order">Order</a>
                <a href="">Order Review</a>
                <a href="">Mange inventory</a>
                <a href="">Login</a>
            </nav>
        </div>
    );
};

export default Header;