// src/components/RedirectHandler.js
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const RedirectHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname.toLowerCase();
    
    const redirects = {
      '/contactus': '/Contact',
      '/jobs': '/Careers',
      '/aboutus': '/About',
      '/bodlahomes':'/Projects/bodla-homes',
      '/bhub':'/Projects/business-hub',
      '/rumanza':'/Projects/golf-view-rumanza',
      '/dha':'/DHAMultan',
    };

    if (redirects[path]) {
      navigate(redirects[path], { replace: true });
    }
  }, [location, navigate]);

  return null;
};

export default RedirectHandler; // Make sure to include this line