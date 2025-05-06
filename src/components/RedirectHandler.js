import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const RedirectHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname.toLowerCase();
    
    const redirects = {
      // Internal redirects (React Router navigation)
      '/contactus': '/Contact',
      '/jobs': '/Careers',
      '/aboutus': '/About',
      '/bodlahomes': '/Projects/bodla-homes',
      '/bhub': '/Projects/business-hub',
      '/rumanza': '/Projects/golf-view-rumanza',
      '/dha': '/DHAMultan',
      
      // External redirects (full URLs)
      'https://www.zameen.com/': 'https://www.bodlagroup.com/',
      'https://example.com/old-link': 'https://example.com/new-link',
    };

    // Check if the current path matches any redirect key
    const redirectTarget = redirects[path] || redirects[window.location.href];

    if (redirectTarget) {
      if (redirectTarget.startsWith('http')) {
        // External redirect (full URL)
        window.location.href = redirectTarget;
      } else {
        // Internal redirect (React Router navigation)
        navigate(redirectTarget, { replace: true });
      }
    }
  }, [location, navigate]);

  return null;
};

export default RedirectHandler;