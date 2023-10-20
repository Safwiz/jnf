import React from 'react'
import './Styles/Slider.css'

function Slider({text}) {
    return (
      <div className="Slider">
        <div className="Slider-blurr">
            <h1 className="Slider-title">{text}</h1>
        </div>
      </div>
    );
  }
  
  export default Slider;