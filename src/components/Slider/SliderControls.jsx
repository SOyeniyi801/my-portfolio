import React from 'react';

function SliderControls({ onSelect }) {
  return (
    <div className="projects-slider-container">
      <input type="radio" name="slider" id="designs" defaultChecked />
      <input type="radio" name="slider" id="development" />
      <nav>
        <label htmlFor="designs" className="designs" onClick={() => onSelect('designs')}>
          Designs
        </label>
        <label htmlFor="development" className="development" onClick={() => onSelect('development')}>
          Development
        </label>
        <div className="slider"></div>
      </nav>
    </div>
  );
}

export default SliderControls;
