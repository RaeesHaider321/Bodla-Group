import React from 'react';
import PropTypes from 'prop-types';
import './InnerHeader.css'; // Create this CSS file for styling

const InnerHeader = ({ title, subtitle, caption, bgImage }) => {
  const headerStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="inner-header" style={headerStyle}>
      <div className="inner-header-overlay">
        <div className="inner-header-content">
          {caption && <p className="inner-header-caption">{caption}</p>}
          <h1 className="inner-header-title">{title}</h1>
          {subtitle && <h2 className="inner-header-subtitle">{subtitle}</h2>}
        </div>
      </div>
    </div>
  );
};

InnerHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  caption: PropTypes.string,
  bgImage: PropTypes.string.isRequired,
};

export default InnerHeader;