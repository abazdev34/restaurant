import React from 'react';
import { Link } from 'react-router-dom';
import "../../style.scss/App.scss"
import Logo from "../../assets//Без названия.jpeg"
const Header: React.FC = () => {
  return (
    <div className='header'>
      <nav>
        <img src={Logo} alt="logo" />
        <ul>
          <li><Link to="/">Башкы бет</Link></li>
          <li><Link to="/menu">Меню</Link></li>
          <li><Link to="/about">Биз жөнүндө</Link></li>
          <li><Link to="/contact">Байланыш</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;