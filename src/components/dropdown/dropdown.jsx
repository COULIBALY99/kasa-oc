import React, { useState } from 'react';
import './dropdown.css';


function Dropdown({data, title }) {
  const [showData, setShowData] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const toggleShowData = () => {
   return( setShowData(!showData),
          setShowTitle(false)
  )};
    

  const toggleShowTitle = () => {
   return( setShowTitle(!showTitle),
    setShowData(false)
  )};
  return (
    <div className="dropdown-container">
      <h3 className={`dropdown-title ${showTitle ? 'active' : ''}`} onClick={toggleShowTitle}>
        {title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`dropdown-icon ${showTitle ? 'active' : ''}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </h3>
      {showTitle && (
        <h4 className={`dropdown-data ${showData ? 'active' : ''}`} onClick={toggleShowData}>
            {Array.isArray(data) ? data.map((item, index) => {
                        return (
                            <p key={index}>{item} </p>
                        )
                    }) : data
                    }
         
        </h4>
      )}
      
      
      
    </div>
  );
}
export default Dropdown;

