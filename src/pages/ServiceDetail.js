import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NotFound from "./NotFound";
const ServiceDetail = () => {
  const { id } = useParams();

  // Sample service data (same as in Services.js)
  const services = [
    { id: 1, title: 'Service 1', description: 'This is the first service.' },
    { id: 2, title: 'Service 2', description: 'This is the second service.' },
    { id: 3, title: 'Service 3', description: 'This is the third service.' },
    { id: 4, title: 'Service 4', description: 'This is the fourth service.' },
  ];

  // Find the project by id
  const service = services.find((serv) => serv.id === parseInt(id));

  if (!service) {
    return <NotFound />;
  }

  return (
    <Container>
      <h1>{service.title}</h1>
      <p>{service.description}</p>
      <p>Service ID: {service.id}</p>
    </Container>
  );
};

export default ServiceDetail;