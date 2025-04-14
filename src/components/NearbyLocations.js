import React, { useState } from 'react';
import { Carousel, Card, Container } from 'react-bootstrap';
import './NearbyLocations.css';

const NearbyLocations = ({ locations }) => {
  const [activeIndex, setActiveIndex] = useState(2); // Start with center item active

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  // Get 5 visible locations with active in center
  const getVisibleLocations = () => {
    const total = locations.length;
    return [-2, -1, 0, 1, 2].map(offset => {
      let index = activeIndex + offset;
      if (index < 0) index += total;
      if (index >= total) index -= total;
      return locations[index];
    });
  };

  const visibleLocations = getVisibleLocations();

  return (
    <Container className="nearby-locations-container">
      <h2 className="text-center mb-4">Nearby Locations</h2>
      
      <div className="carousel-wrapper">
        <Carousel 
          activeIndex={activeIndex}
          onSelect={handleSelect}
          indicators={false}
          interval={null}
          wrap={true}
          className="five-item-carousel"
          fade
        >
          {locations.map((_, index) => (
            <Carousel.Item key={index}>
              <div className="carousel-items-row">
                {visibleLocations.map((location, i) => {
                  const isActive = i === 2; // Center item is active
                  return (
                    <div 
                      key={`${index}-${location.id}`}
                      className={`carousel-item-col ${isActive ? 'active' : ''}`}
                      onClick={() => {
                        const newIndex = (activeIndex + (i - 2) + locations.length) % locations.length;
                        setActiveIndex(newIndex);
                      }}
                    >
                      <Card className="location-card">
                        <Card.Img variant="top" src={location.image} />
                        <Card.Body>
                          <Card.Title>{location.name}</Card.Title>
                          <Card.Text>{location.distance} miles away</Card.Text>
                          {isActive && (
                            <>
                              <Card.Text className="text-muted">{location.description}</Card.Text>
                              <button className="btn btn-primary">View Details</button>
                            </>
                          )}
                        </Card.Body>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </Container>
  );
};

export default NearbyLocations;