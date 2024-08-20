import React from 'react';
import './Modal.css'; // Import your modal styles

const PopoutModal = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
      <span className="close" onClick={onClose}>&times;</span>
      <img className="modal-content" src={imageSrc} alt="Enlarged view" />
    </div>
  );
};

export default PopoutModal;
