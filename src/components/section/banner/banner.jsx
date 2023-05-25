import React from 'react'
import './banner.css';


function Banner() {
  return (
    <section className='banner-container'> 
      <h1 className= 'banner-text'>Chez vous, partout et ailleurs</h1>
      <div className='bannerImage'> 
        <img src="./IMG.png" alt= 'banner' />
        <p className='banner-overlay'></p>
      </div>

     
    </section>
  );
}

export default Banner