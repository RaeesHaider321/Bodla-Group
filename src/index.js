import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const PhoneNumberPopup = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the phone number to the email
    const subject = "User Phone Number Submission";
    const body = `User's phone number: ${phoneNumber}`;
    window.location.href = `mailto:info@bodlagroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    setIsSubmitted(true);
    setTimeout(() => setShowPopup(false), 2000); // Close popup after 2 seconds
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={handleClose}>×</button>
        
        {!isSubmitted ? (
          <>
            <h4>Welcome to Bodla Group</h4>
            <p>Please enter your phone number to get quick information:</p>
            <form onSubmit={handleSubmit}>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your phone number"
                required
              />
              <button type="submit">Submit</button>
            </form>
          </>
        ) : (
          <div className="success-message">
            <p>Thank you for submitting your phone number!</p>
          </div>
        )}
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PhoneNumberPopup />
    <App />
  </React.StrictMode>
);

reportWebVitals();