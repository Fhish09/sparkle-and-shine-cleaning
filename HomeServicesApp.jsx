import React, { useState } from 'react';
import {
  Search, Settings, MessageCircle, Calendar, Sparkles, Zap, Wrench, Wind,
  ChevronRight, Star
} from 'lucide-react';
import './HomeServicesApp.css';

const HomeServicesApp = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const services = [
    { id: 1, icon: Wind, label: 'Cleaning', color: '#4CAF50' },
    { id: 2, icon: Sparkles, label: 'Ironing', color: '#3CB043' },
    { id: 3, icon: Zap, label: 'Electrical', color: '#4CAF50' },
    { id: 4, icon: Wrench, label: 'Plumber', color: '#3CB043' },
  ];

  const featuredServices = [
    {
      id: 1, name: 'Professional Home Cleaning', location: 'LaSalle, Montréal',
      rating: 4.8, reviews: 324, discount: '40%', image: 'https://picsum.photos/id/1015/400/280'
    },
    {
      id: 2, name: 'Deep Cleaning Service', location: 'Verdun, Montréal',
      rating: 4.9, reviews: 512, discount: '35%', image: 'https://picsum.photos/id/106/400/280'
    },
    {
      id: 3, name: 'Premium Ironing & Laundry', location: '2.1 km away',
      rating: 4.7, reviews: 198, discount: '25%', image: 'https://picsum.photos/id/201/400/280'
    },
    {
      id: 4, name: 'Electrical Repairs', location: '3.4 km away',
      rating: 4.9, reviews: 287, discount: '30%', image: 'https://picsum.photos/id/251/400/280'
    },
  ];

  const StarRating = ({ rating, reviews }) => (
    <div className="star-rating">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} fill={i < Math.floor(rating) ? "#FFB800" : "none"} color="#FFB800" />
      ))}
      <span className="rating-text">{rating}</span>
      <span className="review-count">({reviews})</span>
    </div>
  );

  return (
    <div className="home-services-app">
      {/* HEADER */}
      <header className="app-header">
        <div className="header-content">
          <div className="user-avatar">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
          </div>
          <div className="search-container">
            <Search size={20} color="#666" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="icon-btn"><Settings size={24} color="#4CAF50" /></button>
        </div>
      </header>

      {/* HERO BANNER */}
      <section className="hero-banner">
        <div className="banner-content">
          <div className="banner-text">
            <div className="discount-badge">40% OFF</div>
            <h1>Spring Cleaning Special</h1>
            <p>Book professional cleaners today and save big!</p>
            <button className="banner-cta">Book Now →</button>
          </div>
          <div className="banner-illustration">🧹😊</div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="services-section">
        <h2 className="section-title">Services</h2>
        <div className="services-grid">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="service-item">
                <div className="service-icon-container">
                  <IconComponent size={32} color={service.color} />
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
          <a href="#" className="see-all">See All <ChevronRight size={18} /></a>
        </div>

        <div className="cards-grid">
          {featuredServices.map((service) => (
            <div key={service.id} className="service-card">
              <div className="card-image" style={{ backgroundImage: `url(${service.image})` }}>
                <div className="discount-tag">-{service.discount}</div>
              </div>
              <div className="card-content">
                <h3>{service.name}</h3>
                <p className="location">{service.location}</p>
                <StarRating rating={service.rating} reviews={service.reviews} />
                <div className="card-actions">
                  <button className="action-btn"><MessageCircle size={20} /></button>
                  <button className="action-btn"><Calendar size={20} /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="bottom-padding" />
    </div>
  );
};

export default HomeServicesApp;
