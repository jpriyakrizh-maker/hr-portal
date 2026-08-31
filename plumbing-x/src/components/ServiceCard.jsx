import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFaucetDrip,
  FaBath,
  FaSink,
  FaWater,
  FaWrench,
  FaFireFlameCurved,
  FaArrowRight
} from 'react-icons/fa6';
import './ServiceCard.css';

const iconMap = {
  FaFaucetDrip: FaFaucetDrip,
  FaBath: FaBath,
  FaSink: FaSink,
  FaWater: FaWater,
  FaWrench: FaWrench,
  FaFireFlameCurved: FaFireFlameCurved
};

const ServiceCard = ({ service, index }) => {
  const IconComponent = iconMap[service.iconName] || FaWrench;

  return (
    <div
      className="service-card"
      data-aos={service.aosAnimation || 'fade-up'}
      data-aos-delay={(index % 3) * 150}
      data-aos-duration="800"
    >
      <div className="service-card-image-wrapper">
        <img
          src={service.image}
          alt={service.title}
          className="service-card-image"
          loading="lazy"
        />
        <div className="service-card-overlay"></div>
        <div className="service-card-icon-badge">
          <IconComponent />
        </div>
      </div>

      <div className="service-card-content">
        <h3 className="service-card-title">{service.title}</h3>
        <p className="service-card-description">{service.description}</p>
        
        <Link to="/contact" state={{ selectedService: service.title }} className="service-card-btn">
          <span>View Service</span>
          <FaArrowRight className="service-card-btn-icon" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
