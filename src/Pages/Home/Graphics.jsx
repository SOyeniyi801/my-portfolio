import React, { useState } from 'react';
import Card from '../../components/Card';
import PopoutModal from '../../components/PopoutModal/PopoutModal';
import data from '../../data/index.json';

function Graphics() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState('');

  const handleImageClick = (src) => {
    setModalImageSrc(src);
    setModalOpen(true);
  };

  return (
    <section className="graphics-section" id="graphics">
      <div className="graphics-container-box">
        <div className="graphics-container">
          <h2 className="graphics-section-heading">Social Media Graphics</h2>
        </div>
      </div>
      <div className="graphics-section-container">
        <div className="graphics-grid">
          {data.graphics.map(graphic => (
            <Card key={graphic.id} project={graphic} onImageClick={handleImageClick} />
          ))}
        </div>
      </div>
      <PopoutModal isOpen={modalOpen} onClose={() => setModalOpen(false)} imageSrc={modalImageSrc} />
    </section>
  );
}

export default Graphics;
