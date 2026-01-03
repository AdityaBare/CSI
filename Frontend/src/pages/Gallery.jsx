import React, { useState } from 'react';
import './Gallery.css';

// Gallery images (using Unsplash URLs)
const galleryImages = [
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1080&q=80',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1080&q=80',
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1080&q=80',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1080&q=80',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1080&q=80',
  'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1080&q=80',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1080&q=80', // Duplicate
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1080&q=80', // Duplicate
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1080&q=80', // Duplicate
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseLightbox = () => {
    setSelectedImage(null);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseLightbox();
    }
  };

  return (
    <div className="gallery-page">
      {/* Page Header */}
      <section className="gallery-header">
        <div className="gallery-header-inner">
          <h1>Gallery</h1>
          <p className="gallery-subtitle">Moments from our events and activities</p>
          <div className="gallery-decorative-line"></div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-grid-section">
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="gallery-card"
              onClick={() => handleImageClick(image)}
            >
              <img src={image} alt={`Gallery image ${index + 1}`} />
              <div className="gallery-overlay"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={handleOverlayClick}>
          <div className="lightbox-content">
            <button
              className="lightbox-close"
              onClick={handleCloseLightbox}
              aria-label="Close lightbox"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="lightbox-image-container">
              <img src={selectedImage} alt="Selected image" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
