import React, { useState } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

const WhatsAppButton = ({ 
  phoneNumber, 
  message = '', 
  size = '60px', 
  color = '#25D366',
  popupMessage = 'Chat with us on WhatsApp!',
  popupDelay = 3000
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const formattedPhone = phoneNumber.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;

  const handleMouseEnter = () => {
    setShowPopup(true);
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
  };

  const handleClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: '80px',
        right: '20px',
        zIndex: 1000,
      }}
    >
      {showPopup && (
        <div 
          style={{
            position: 'absolute',
            bottom: `${parseInt(size) + 10}px`,
            right: '0',
            backgroundColor: 'white',
            color: '#333',
            padding: '10px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            width: '200px',
            fontSize: '14px',
          }}
        >
          <button 
            onClick={() => setShowPopup(false)}
            style={{
              position: 'absolute',
              top: '5px',
              right: '5px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#666',
            }}
          >
            <FaTimes size={12} />
          </button>
          {popupMessage}
        </div>
      )}
      
      <div 
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          backgroundColor: color,
          color: 'white',
          borderRadius: '50%',
          width: size,
          height: size,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '30px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          textDecoration: 'none',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
        }}
      >
        <FaWhatsapp />
      </div>
    </div>
  );
};

export default WhatsAppButton;