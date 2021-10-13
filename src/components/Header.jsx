import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div>
        <div>Sveikatos Apzvalga</div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/all-discounts'>All discounts</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
