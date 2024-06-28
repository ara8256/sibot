import React from 'react';
import "./card.css"
const CardComponent = ({ title, description, imageUrl, websiteUrl, index }) => {
  return (


    <div className="col-md-4 mb-4 card-wrapper" style={{ animationDelay: `${index * 0.3}s` }}>
      <div className="card h-100">
        <img
          src={imageUrl}
          className="card-img-top img-fluid"
          alt={title}
          style={{ objectFit: 'cover', height: '250px' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="btn btn-dark mt-auto">
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
