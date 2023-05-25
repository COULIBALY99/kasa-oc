import React from 'react'
import './carousel.css';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";



function Carrousel({slides}) {
  
  const [index, setIndex] = React.useState(0);
   const length = slides.length;

   const handlePrevious = () => {
     const newIndex = index - 1;
     setIndex(newIndex < 0 ? length - 1 : newIndex);
   };

   const handleNext = () => {
     const newIndex = index + 1;
     setIndex(newIndex >= length ? 0 : newIndex);
   };

   const disableArrows = length <= 1;

   return (
    <section className="carousel-container">
      <div className="carousel-button-container">
        <div className="carousel-button-left" onClick={handlePrevious} style={{display: disableArrows ? "none" : "block"}} >
          <BsChevronLeft />
        </div>
        <div className="carousel-button-right" onClick={handleNext} style={{display: disableArrows ? "none" : "block"}} >
          <BsChevronRight />
        </div>
      </div>
      {slides.map((slide, i) => (
        <div className="carousel-slide" key={slide} hidden={index !== i}>
          <img src={slide} alt={`Slide ${i + 1}`} />
          <p className='slide-items'>{index + 1} / {length}</p>
        </div>
      ))}
    </section>
  );
}

export default Carrousel
