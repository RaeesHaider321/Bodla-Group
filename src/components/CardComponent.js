import React from "react";
import { Card } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const CardComponent = ({ image, title, description, serviceIcon, link }) => {
  return (
    
    <div className="card-container h-100">
      <Link to={link} style={{ textDecoration: 'none' }}>
        <Card className="h-100">
          {image && <Card.Img variant="top" src={image} alt={title} />}
          <Card.Body className="d-flex flex-column flex-grow-1">
            {serviceIcon && (
              <div className="service-icon mb-4">
                {typeof serviceIcon === "string" ? (
                  <img src={serviceIcon} alt="Service Icon" className="service-icon-img" />
                ) : (
                  serviceIcon
                )}
              </div>
            )}
            <Card.Title>{title}</Card.Title>
            <Card.Text className="flex-grow-1">{description}</Card.Text>
          </Card.Body>
        </Card>
        <div className="icon">
          <FaArrowRight color="white" size={24} />
        </div>
      </Link>
    </div>
  );
};

export default CardComponent;