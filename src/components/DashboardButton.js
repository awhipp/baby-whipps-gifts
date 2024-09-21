import React from 'react';
import './DashboardButton.css';

const DashboardButton = ({ className, title, imageUrl, link }) => {
  return (
    <a class={className} href={link} target="_blank" rel="noopener noreferrer">
        <div className="dashboard-button" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="button-content">
            <p>{title}</p>
        </div>
        </div>
    </a>
  );
};

export default DashboardButton;
