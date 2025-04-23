import React, { useEffect } from 'react';

const KuulaEmbed = () => {
  useEffect(() => {
    const container = document.getElementById('kuula-embed-container');
    
    // Create script element
    const script = document.createElement('script');
    script.src = 'https://static.kuula.io/embed.js';
    script.async = true;
    
    // Set data attributes
    script.setAttribute('data-kuula', 'https://kuula.co/share/collection/7b1BT?logo=1&info=1&fs=1&vr=0&sd=1&initload=0&autorotate=-0.02&thumbs=1&alpha=0.60&inst=0&keys=0');
    script.setAttribute('data-width', '100%');
    script.setAttribute('data-height', '640px');
    
    // Append script to container
    container.appendChild(script);
    
    return () => {
      // Cleanup
      container.removeChild(script);
    };
  }, []);

  return (
    <div id="kuula-embed-container" style={{ width: '100%', height: '640px' }} />
  );
};

export default KuulaEmbed;