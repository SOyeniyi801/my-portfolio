import React, { useState } from 'react';
import Card from '../../components/Card';
import PopoutModal from '../../components/PopoutModal/PopoutModal';
import data from '../../data/index.json';

function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState('');

  const handleImageClick = (src) => {
    setModalImageSrc(src);
    setModalOpen(true);
  };

  return (
    <section className="projects-section" id="webdesign">
      <div className="projects-container-box">
        <div className="projects-container">
          <h2 className="projects-section-heading">Web Design</h2>
        </div>
      </div>
      <div className="projects-section-container">
        <div className="projects-grid">
          {data.projects.map(project => (
            <Card key={project.id} project={project} onImageClick={handleImageClick} />
          ))}
        </div>
      </div>
      <PopoutModal isOpen={modalOpen} onClose={() => setModalOpen(false)} imageSrc={modalImageSrc} />
    </section>
  );
}

export default Projects;