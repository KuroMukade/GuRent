import React from "react";
import Logo from "../Logo";
import { Link } from "react-router-dom";


const Header = () => {
    return (
      <header className="header">
        <Logo />
        <div className='header-navigation'>
          <Link className="link" to={"/"}>Арендные дома</Link>
          <Link className="link" to={'/'}>Карты</Link>
        </div>
        <a href='/' className='header-phone'>
          <img className='header-phone__icon' src="phone-icon.png" alt="phone" />
          <p className="header-phone__text">+7 (917) 911-33-83</p>
        </a>
        <div className='header-account'>
          <a href="/" className="header-account__link">
            <img className='header-account__icon' src="user.png" alt="user icon" />
          </a>
        </div>
      </header>
    );
}

export default Header;