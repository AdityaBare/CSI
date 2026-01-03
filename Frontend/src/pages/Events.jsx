import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Events.css';

// Event poster images (using Unsplash URLs)
const eventPosters = [
  'https://images.unsplash.com/photo-1540575467063-178a50c2e87c?w=1080&q=80',
  'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1080&q=80',
  'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1080&q=80',
  'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1080&q=80',
  'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1080&q=80',
];

// Upcoming events data
const upcomingEvents = [
  {
    id: 1,
    title: 'Tech Talk: AI & Machine Learning',
    date: 'January 15, 2025',
    time: '2:00 PM - 4:00 PM',
    venue: 'Seminar Hall A',
    description: 'Explore the latest trends in artificial intelligence and machine learning with industry experts.',
  },
  {
    id: 2,
    title: 'Hackathon 2025',
    date: 'February 10-11, 2025',
    time: '9:00 AM onwards',
    venue: 'Computer Lab',
    description: '24-hour coding challenge to build innovative solutions for real-world problems.',
  },
  {
    id: 3,
    title: 'Web Development Workshop',
    date: 'February 25, 2025',
    time: '10:00 AM - 5:00 PM',
    venue: 'Lab 301',
    description: 'Hands-on workshop covering modern web development frameworks and best practices.',
  },
];

// Past events data
const pastEvents = [
  {
    id: 1,
    title: 'Cybersecurity Awareness Session',
    date: 'December 5, 2024',
    time: '3:00 PM - 5:00 PM',
    venue: 'Auditorium',
    description: 'Interactive session on cybersecurity fundamentals and online safety practices.',
  },
  {
    id: 2,
    title: 'Code Sprint Competition',
    date: 'November 20, 2024',
    time: '11:00 AM - 4:00 PM',
    venue: 'Computer Lab',
    description: 'Fast-paced coding competition testing problem-solving skills and algorithms.',
  },
  {
    id: 3,
    title: 'Tech Fest Orientation',
    date: 'October 15, 2024',
    time: '1:00 PM - 3:00 PM',
    venue: 'Seminar Hall B',
    description: 'Introduction to the annual tech fest and participation guidelines.',
  },
];

export default function Events() {
  const [activeSlide, setActiveSlide] = useState(2); // Start at middle slide

  const handlePrevious = () => {
    setActiveSlide((prev) => (prev === 0 ? eventPosters.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === eventPosters.length - 1 ? 0 : prev + 1));
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
        scale: 1.3,
        rotateY: '0deg',
        opacity: 1,
        zIndex: 10,
      };
    } else if (absOffset === 1) {
      // One slide away
      return {
        translateX: offset > 0 ? '65%' : '-65%',
        translateZ: '-350px',
        scale: 0.8,
        rotateY: offset > 0 ? '-40deg' : '40deg',
        opacity: 0.5,
        zIndex: 9,
      };
    } else if (absOffset === 2) {
      // Two slides away
      return {
        translateX: offset > 0 ? '110%' : '-110%',
        translateZ: '-550px',
        scale: 0.65,
        rotateY: offset > 0 ? '-50deg' : '50deg',
        opacity: 0.25,
        zIndex: 8,
      };
    } else {
      // Beyond 2 slides
      return {
        translateX: offset > 0 ? '160%' : '-160%',
        translateZ: '-750px',
        scale: 0.4,
        rotateY: offset > 0 ? '-60deg' : '60deg',
        opacity: 0,
        zIndex: 5 - absOffset,
      };
    }
  };

  return (
    <div className="events-page">
      {/* Hero Section with 3D Carousel */}
      <section className="events-hero">
        <div className="hero-title-area">
          <h1>Our Events</h1>
          <p className="hero-subtitle">Workshops | Hackathons | Tech Talks</p>
          <div className="hero-decorative-line"></div>
        </div>

        <div className="carousel-outer-wrapper" style={{ perspective: '2000px' }}>
          <div className="carousel-inner-wrapper">
            <div className="carousel-container">
              {eventPosters.map((poster, index) => {
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
                    <div className="poster-frame">
                      <img src={poster} alt={`Event poster ${index + 1}`} />
                    </div>
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
              {eventPosters.map((_, index) => (
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

      {/* Upcoming Events Section */}
      <section className="events-section">
        <h2>Upcoming Events</h2>
        <div className="events-grid">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="event-card event-card-upcoming">
              <h3>{event.title}</h3>
              <div className="event-details">
                <p>📅 {event.date}</p>
                <p>🕐 {event.time}</p>
                <p>📍 {event.venue}</p>
              </div>
              <div className="event-divider"></div>
              <p className="event-description">{event.description}</p>
              <button className="event-cta">View Details</button>
            </div>
          ))}
        </div>
      </section>

      {/* Past Events Section */}
      <section className="events-section">
        <h2>Past Events</h2>
        <div className="events-grid">
          {pastEvents.map((event) => (
            <div key={event.id} className="event-card event-card-past">
              <h3>{event.title}</h3>
              <div className="event-details">
                <p>📅 {event.date}</p>
                <p>🕐 {event.time}</p>
                <p>📍 {event.venue}</p>
              </div>
              <div className="event-divider"></div>
              <p className="event-description">{event.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
