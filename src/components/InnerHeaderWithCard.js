import React from 'react';
import './InnerHeader.css';
import PageTitle from '../components/PageTitle';

const InnerHeader = ({ heading, highlight, subtext, backgroundImage, children }) => {
  return (
    <div className="inner-header" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="inner-header-content">
        <PageTitle title={heading} highlight={highlight} />
        <p>{subtext}</p>
      </div>
      {children && <div className="inner-header-additional-content text-start">{children}</div>}
    </div>
  );
};

export default InnerHeader;