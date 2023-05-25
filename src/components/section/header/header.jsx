import React from 'react';
import Navbar from '../navbar/navbar';
import './header.css'


function Header() { 
  return (
    <header className='header'>
      <a href="./">
      <img src="/logo.png" alt='kasa' /> 
      </a>
      <Navbar />
    </header>
  );
}

export default Header


