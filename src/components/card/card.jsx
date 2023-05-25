import React from 'react'
import { Link } from 'react-router-dom';
import './card.css';


function Card({title,id,url}) { 
  return (
    <Link to={`/logement/${id}`} className= 'band_card'>
      <div className='card' style={{backgroundImage: `url(${url})`}}>
        <div className='card-overlay'></div>
        <div className='card-title'>{title}</div>
      </div>
    </Link>
  );
}

export default Card;






