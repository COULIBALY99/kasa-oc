import React from 'react'
import './404.css';
import { Link } from 'react-router-dom';

function Error404() {
  return (
    <main className='code-container'>
        <div className='code-error'>404</div>
        <br />
        <div className='code-message'>Oups! La page que vous demandez n'existe pas.</div>
        <br />
        <br />
        <span><Link to={"/"}>Retourner sur la page d’accueil</Link></span>
    </main>
  );
}

export default Error404