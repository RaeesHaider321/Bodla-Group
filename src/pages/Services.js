import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
const Services = () => {
  const navigate = useNavigate();

  // Sample project data
  const services = [
    { id: 1, title: 'Development and builders', description: 'This is the first services.' },
    { id: 2, title: 'Realtors 2', description: 'This is the second services.' },
    { id: 3, title: 'Abs 3', description: 'This is the third services.' },
    { id: 4, title: 'Services 4', description: 'This is the fourth services.' },
  ];

  // Function to convert title into a slug
  const slugify = (title) => title.toLowerCase().replace(/\s+/g, '-');

  const handleServicesClick = (title) => {
    const serviceSlug = slugify(title);
    navigate(`/services/${serviceSlug}`);
  };

  return (
    <Container>
      <h1>Services</h1>
      <ul>
        {services.map((service) => (
          <li
            key={service.id}
            onClick={() => handleServicesClick(service.title)}
            style={{ cursor: 'pointer', margin: '10px 0' }}
          >
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Services;
