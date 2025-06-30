import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
const ImageGallery = () => {
  const [images] = useState([
    {
      id: '1tTz9rt8L8Mbj3mmXIRa94NHwinEfwLSW',
      title: 'Sample Image',
      alt: 'Description'
    },
    // Add more images here
    {
      id: '1GiaJ29Qi8LPfWUzb7mPWYTurfzR_oDQ8',
      title: 'Second Image',
      alt: 'Another description'
    },
    {
      id: '1TtgHriJuANPdL_JvM9g8cqzuD72S4N0n',
      title: 'Third Image',
      alt: 'More description'
    },
  ]);

  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  const handleShow = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  // Multiple URL formats to try as fallbacks
  const getImageUrl = (id) => {
    const formats = [
      `https://drive.google.com/uc?export=view&id=${id}&t=${Date.now()}`, // Current timestamp
      `https://docs.google.com/uc?id=${id}`, // Alternative endpoint
      `https://lh3.googleusercontent.com/d/${id}=s0`, // Google user content
    ];
    return formats[0]; // Try first format, others can be fallbacks
  };

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Google Drive Image Gallery</h1>
      
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {images.map((image) => (
          <Col key={image.id}>
            <Card className="h-100" onClick={() => handleShow(image)} style={{ cursor: 'pointer' }}>
              <Card.Img 
                variant="top"
                src={getImageUrl(image.id)}
                alt={image.alt}
                onError={(e) => {
                  // Try fallback URLs if first fails
                  const formats = [
                    `https://docs.google.com/uc?id=${image.id}`,
                    `https://lh3.googleusercontent.com/d/${image.id}=s0`,
                  ];
                  
                  for (let i = 0; i < formats.length; i++) {
                    const img = new Image();
                    img.src = formats[i];
                    img.onload = () => {
                      e.target.src = formats[i];
                    };
                  }
                }}
              />
              <Card.Body>
                <Card.Title>{image.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal for enlarged image view */}
      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedImage?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {selectedImage && (
            <img 
              src={getImageUrl(selectedImage.id)}
              alt={selectedImage.alt}
              style={{ maxWidth: '100%', maxHeight: '70vh' }}
              onError={(e) => {
                const formats = [
                  `https://docs.google.com/uc?id=${selectedImage.id}`,
                  `https://lh3.googleusercontent.com/d/${selectedImage.id}=s0`,
                ];
                
                for (let i = 0; i < formats.length; i++) {
                  const img = new Image();
                  img.src = formats[i];
                  img.onload = () => {
                    e.target.src = formats[i];
                  };
                }
              }}
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ImageGallery;