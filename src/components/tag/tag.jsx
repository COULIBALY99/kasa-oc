import React from 'react'
import './tag.css';



function Tag({text}) {
  return (
    <h3 className='tag-container'>{text}</h3>
  )
}

export default Tag