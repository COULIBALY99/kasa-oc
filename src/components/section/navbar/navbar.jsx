import React from 'react';
import './navbar.css';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav className='navbar'>
      <ul className='navList'>
        <li>
          <Link
            className={location.pathname === '/' ? 'navLink active' : 'navLink'}
            to='/'
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            className={location.pathname === '/a-propos' ? 'navLink active' : 'navLink'}
            to='/a-propos'
          >
            A propos
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;


