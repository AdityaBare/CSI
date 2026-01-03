import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Instagram, Linkedin } from 'lucide-react';
import './Team.css';

// Carousel images data
const carouselImages = [
  'https://images.unsplash.com/photo-1758691737387-a89bb8adf768?w=1080&q=80',
  'https://images.unsplash.com/photo-1655472355485-d949925e67bb?w=1080&q=80',
  'https://images.unsplash.com/photo-1580982333389-cca46f167381?w=1080&q=80',
  'https://images.unsplash.com/photo-1759884247144-53d52c31f859?w=1080&q=80',
  'https://images.unsplash.com/photo-1627560985113-ab67e8031f40?w=1080&q=80',
];

// Leadership data
const leadershipMembers = [
  {
    name: 'Aarav Sharma',
    role: 'President',
    imageUrl: 'https://images.unsplash.com/photo-1589458223095-03eee50f0054?w=800&q=80',
  },
  {
    name: 'Priya Patel',
    role: 'Committee Coordinator',
    imageUrl: 'https://images.unsplash.com/photo-1573497491306-c8a68afac6f2?w=800&q=80',
  },
];

// Core Committee data
const coreMembers = [
  {
    name: 'Rohan Verma',
    role: 'Vice President',
    imageUrl: 'https://images.unsplash.com/photo-1576558656222-ba66febe3dec?w=800&q=80',
  },
  {
    name: 'Sneha Reddy',
    role: 'Joint Secretary',
    imageUrl: 'https://images.unsplash.com/photo-1573497491306-c8a68afac6f2?w=800&q=80',
  },
  {
    name: 'Arjun Gupta',
    role: 'Treasurer',
    imageUrl: 'https://images.unsplash.com/photo-1589458223095-03eee50f0054?w=800&q=80',
  },
];

// Executive Members data
const executiveMembers = [
  { name: 'Kavya Singh', role: 'Technical Lead' },
  { name: 'Vikram Joshi', role: 'Events Head' },
  { name: 'Ananya Rao', role: 'Design Lead' },
  { name: 'Aditya Kumar', role: 'Marketing Head' },
  { name: 'Ishita Desai', role: 'PR Manager' },
  { name: 'Rahul Iyer', role: 'Content Head' },
  { name: 'Diya Kapoor', role: 'Social Media Manager' },
  { name: 'Karan Malhotra', role: 'Logistics Head' },
  { name: 'Nisha Agarwal', role: 'Documentation Lead' },
];

// Generate social URLs from name
const generateInstagramUrl = (name) => {
  return `https://instagram.com/${name.toLowerCase().replace(/\s+/g, '')}`;
};

const generateLinkedInUrl = (name) => {
  return `https://linkedin.com/in/${name.toLowerCase().replace(/\s+/g, '-')}`;
};

// FlipCard Component
const FlipCard = ({ member }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const imageUrl = 'https://images.unsplash.com/photo-1573497491306-c8a68afac6f2?w=800&q=80';
  const instagramUrl = generateInstagramUrl(member.name);
  const linkedinUrl = generateLinkedInUrl(member.name);

  return (
    <div
      className="flipcard-container"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`flipcard-inner ${isFlipped ? 'flipped' : ''}`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Side */}
        <div
          className="flipcard-front"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="flipcard-image-container">
            <img src={imageUrl} alt={member.name} />
          </div>
          <div className="flipcard-info">
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="flipcard-back"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <h3>{member.name}</h3>
          <div className="social-icons-container">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-button"
              onClick={(e) => e.stopPropagation()}
            >
              <Instagram size={32} />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-button"
              onClick={(e) => e.stopPropagation()}
            >
              <Linkedin size={32} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Team() {
  const [activeSlide, setActiveSlide] = useState(2); // Start at middle slide

  const handlePrevious = () => {
    setActiveSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  const handleSlideClick = (index) => {
    setActiveSlide(index);
  };

  // Calculate slide transform based on position relative to active
  const getSlideTransform = (index) => {
    const offset = index - activeSlide;
    const absOffset = Math.abs(offset);

    if (offset === 0) {
      // Active slide (center)
      return {
        translateX: '0%',
        translateZ: '0px',
        scale: 1.2,
        rotateY: '0deg',
        opacity: 1,
        zIndex: 10,
      };
    } else if (absOffset === 1) {
      // One slide away
      return {
        translateX: offset > 0 ? '60%' : '-60%',
        translateZ: '-300px',
        scale: 0.85,
        rotateY: offset > 0 ? '-35deg' : '35deg',
        opacity: 0.5,
        zIndex: 9,
      };
    } else if (absOffset === 2) {
      // Two slides away
      return {
        translateX: offset > 0 ? '100%' : '-100%',
        translateZ: '-500px',
        scale: 0.7,
        rotateY: offset > 0 ? '-45deg' : '45deg',
        opacity: 0.25,
        zIndex: 8,
      };
    } else {
      // Beyond 2 slides
      return {
        translateX: offset > 0 ? '150%' : '-150%',
        translateZ: '-700px',
        scale: 0.5,
        rotateY: offset > 0 ? '-50deg' : '50deg',
        opacity: 0,
        zIndex: 5,
      };
    }
  };

  return (
    <div className="team-page">
      {/* Hero Section with 3D Carousel */}
      <section className="team-hero">
        <div className="hero-title-area">
          <h1>Our Team</h1>
          <div className="hero-decorative-line"></div>
        </div>

        <div className="carousel-outer-wrapper" style={{ perspective: '2000px' }}>
          <div className="carousel-inner-wrapper">
            <div className="carousel-container">
              {carouselImages.map((image, index) => {
                const transform = getSlideTransform(index);
                return (
                  <div
                    key={index}
                    className="carousel-slide"
                    onClick={() => handleSlideClick(index)}
                    style={{
                      transform: `translateX(${transform.translateX}) translateZ(${transform.translateZ}) scale(${transform.scale}) rotateY(${transform.rotateY})`,
                      opacity: transform.opacity,
                      zIndex: transform.zIndex,
                    }}
                  >
                    <img src={image} alt={`Team photo ${index + 1}`} />
                  </div>
                );
              })}
            </div>

            {/* Navigation Arrows */}
            <button
              className="carousel-arrow carousel-arrow-left"
              onClick={handlePrevious}
              aria-label="Previous slide"
            >
              <ChevronLeft className="arrow-icon" />
            </button>
            <button
              className="carousel-arrow carousel-arrow-right"
              onClick={handleNext}
              aria-label="Next slide"
            >
              <ChevronRight className="arrow-icon" />
            </button>

            {/* Pagination Dots */}
            <div className="carousel-dots">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === activeSlide ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="team-section leadership-section">
        <div className="section-container">
          <h2>Leadership</h2>
          <div className="leadership-grid">
            {leadershipMembers.map((member, index) => (
              <div key={index} className="leadership-card">
                <div className="leadership-image-container">
                  <img src={member.imageUrl} alt={member.name} />
                </div>
                <div className="leadership-info">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Committee Section */}
      <section className="team-section core-section">
        <div className="section-container">
          <h2>Core Committee</h2>
          <div className="core-grid">
            {coreMembers.map((member, index) => (
              <div key={index} className="core-card">
                <div className="core-image-container">
                  <img src={member.imageUrl} alt={member.name} />
                </div>
                <div className="core-info">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Members Section */}
      <section className="team-section executive-section">
        <div className="section-container">
          <h2>Executive Members</h2>
          <div className="executive-grid">
            {executiveMembers.map((member, index) => (
              <FlipCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
