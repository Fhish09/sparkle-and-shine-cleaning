import React, { useState } from 'react';
import {
  Search,
  Settings,
  MessageCircle,
  Calendar,
  Sparkles,
  Zap,
  Wrench,
  Wind,
  ChevronRight,
  Star,
} from 'lucide-react';
import './HomeServicesApp.css';

const HomeServicesApp = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const services = [
    { id: 1, icon: Wind, label: 'Cleaning' },
    { id: 2, icon: Sparkles, label: 'Ironing' },
    { id: 3, icon: Zap, label: 'Electrical' },
    { id: 4, icon: Wrench, label: 'Plumber' },
  ];

  const featuredServices = [
    {
      id: 1,
      name: 'Professional Home Cleaning',
      location: '2.5 km away',
      rating: 4.8,
      reviews: 324,
      discount: '30%',
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      id: 2,
      name: 'Deep Cleaning Service',
      location: '1.2 km away',
      rating: 4.9,
      reviews: 512,
      discount: '25%',
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      id: 3,
      name: 'Ironing & Laundry',
      location: '3.1 km away',
      rating: 4.7,
      reviews: 198,
      discount: '20%',
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
    {
      id: 4,
      name: 'Electrical Repairs',
      location: '2.8 km away',
      rating: 4.9,
      reviews: 287,
      discount: '35%',
      image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    },
  ];

  const StarRating = ({ rating, reviews }) => (
    <div className="star-rating">
      <div className="stars">
        <Star size={14} fill="#FFB800" color="#FFB800" />
        <span className="rating-text">{rating}</span>
      </div>
      <span className="review-count">({reviews})</span>
    </div>
  );

  return (
    <div className="home-services-app">
      {/* HEADER */}
      <header className="app-header">
        <div className="header-top">
          <div className="user-avatar">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
              alt="User"
            />
          </div>
          <div className="search-container">
            <Search size={18} color="#999" />
            <input type="text" placeholder="Search services..." />
          </div>
          <button className="settings-btn">
            <Settings size={20} color="#4CAF50" />
          </button>
        </div>
      </header>

      {/* HERO BANNER */}
      <section className="hero-banner">
        <div className="banner-content">
          <div className="banner-text">
            <div className="discount-badge">
              <span className="badge-text">40% OFF</span>
            </div>
            <h1 className="banner-title">Spring Cleaning Special</h1>
            <p className="banner-subtitle">Get professional home cleaning at unbeatable prices</p>
            <button className="banner-cta">Book Now</button>
          </div>
          <div className="banner-illustration">
            <div className="cleaner-character">
              <div className="cleaner-head">😊</div>
              <div className="cleaner-body">🧹</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="services-section">
        <div className="services-grid">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="service-item">
                <div className="service-icon-container">
                  <IconComponent size={28} color="#4CAF50" />
                </div>
                <p className="service-label">{service.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="featured-services">
        <div className="featured-header">
          <h2>Featured Services</h2>
          <a href="#" className="see-all-link">
            See All <ChevronRight size={16} />
          </a>
        </div>

        <div className="cards-grid">
          {featuredServices.map((service) => (
            <div key={service.id} className="service-card">
              <div
                className="card-image"
                style={{ background: service.image }}
              >
                <div className="discount-tag">{service.discount}</div>
              </div>

              <div className="card-content">
                <h3 className="service-name">{service.name}</h3>
                <p className="service-location">{service.location}</p>

                <StarRating rating={service.rating} reviews={service.reviews} />

                <div className="card-actions">
                  <button className="action-btn">
                    <MessageCircle size={18} color="#4CAF50" />
                  </button>
                  <button className="action-btn">
                    <Calendar size={18} color="#4CAF50" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM SPACING */}
      <div className="bottom-spacing"></div>
    </div>
  );
};

export default HomeServicesApp;
