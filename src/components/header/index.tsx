import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Биздин Ресторан</h1>
      <nav>
        <ul>
          <li><Link to="/">Башкы бет</Link></li>
          <li><Link to="/menu">Меню</Link></li>
          <li><Link to="/about">Биз жөнүндө</Link></li>
          <li><Link to="/contact">Байланыш</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;