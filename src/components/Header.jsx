import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: 'black',
        color: 'white',
      }}
    >
      <div>
        <div style={{ paddingBottom: '20px' }}>
          <b
            style={{
              margin: '10px',
              padding: '20px 105px',
            }}
          >
            Sveikatos koteles Kuponai
          </b>
        </div>
        <nav style={{ textDecorationStyle: 'none' }}>
          <ul
            style={{
              listStyleType: 'none',
              display: 'flex',

              margin: '0px',
            }}
          >
            <li>
              <Link
                to='/'
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  margin: '75px',
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/all-discounts'
                style={{ color: 'white', textDecoration: 'none' }}
              >
                All discounts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
