import React from 'react';
import './footer.css';


function Footer() {
  return (
    <footer>
      <div className='Container_footer'>
        <div className="logo_footer">
          <img src="/logo footer.png" alt="Kasa location appartements" />
        </div>
        <span className="text">© 2020 Kasa. All rights reserved</span>
      </div>
    </footer>
  );
}

export default Footer