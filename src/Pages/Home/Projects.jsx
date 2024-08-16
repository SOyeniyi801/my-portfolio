import React, { useState } from 'react';
import SliderControls from '../../components/Slider/SliderControls'; 
import SliderContent from '../../components/Slider/SliderContent'; 

function Projects({ data }) {
  const [selectedTab, setSelectedTab] = useState('designs');

  return (
    <section className="projects-section" id="MyProjects">
      <div className="projects-container-box">
        <div className="projects-container">
          <h2 className="projects-section-heading"> My Projects</h2>
        </div>
      </div>
      <div className="projects-section-container">
        <SliderControls onSelect={setSelectedTab} />
        <SliderContent selectedTab={selectedTab} data={data} />
      </div>
    </section>
  );
}

export default Projects;
