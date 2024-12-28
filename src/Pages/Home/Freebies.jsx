import React, { useState } from 'react';
import Card from '../../components/Card';
import PopoutModal from '../../components/PopoutModal/PopoutModal';
import data from '../../data/index.json';

function Freebies() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState('');

  const handleImageClick = (src) => {
    setModalImageSrc(src);
    setModalOpen(true);
  };

  return (
    <section className="freebies-section" id="freebies">
      <div className="freebies-container-box">
        <div className="freebies-container">
          <h2 className="freebies-section-heading">Freebies</h2>
          <p className="freebies-description">
            Explore our free goal-setting bingo cards and stickers! Click to preview or download your favorite design.
          </p>
        </div>
      </div>
      <div className="freebies-section-container">
        <div className="freebies-grid">
          {data.freebies.map((freebie) => (
            <Card
              key={freebie.id}
              project={freebie}
              onImageClick={handleImageClick}
            />
          ))}
        </div>
      </div>
      <PopoutModal isOpen={modalOpen} onClose={() => setModalOpen(false)} imageSrc={modalImageSrc} />
    </section>
  );
}

export default Freebies;
