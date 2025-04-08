import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Button.css';

const BodlaButton = ({ 
  text, 
  icon, 
  variant, 
  size, 
  disabled, 
  link, 
  onClick, 
  type = 'button' // Add type prop with default value
}) => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    if (onClick) {
      onClick(event); // Execute the provided function, passing the event
    } else if (link) {
      if (link.startsWith('http')) {
        window.location.href = link; // External links
      } else {
        navigate(link); // Internal routing with React Router
      }
    }
  };

  return (
    <Button 
      variant={variant} 
      size={size} 
      disabled={disabled} 
      onClick={handleClick}
      type={type} // Set the button type
    >
      {icon && <span className="icon">{icon}</span>} {/* Render the icon as JSX */}
      <span className="text">Book a Call</span>
    </Button>
  );
};

export default BodlaButton;
