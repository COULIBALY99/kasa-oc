import React from 'react'
import './avatar.css';

function Avatar({host}) {
    const fullname = host.name.split(' ');
  return (
    <div className='avatar__container'>
      <p className='avatar__name'>
        {fullname[0]}
        <br />
        {fullname[1]}
      </p>
      <p className='avatar__img'>
        <img src={host.picture} alt='avatar' />
      </p>
      
    </div>
  );
}

export default Avatar