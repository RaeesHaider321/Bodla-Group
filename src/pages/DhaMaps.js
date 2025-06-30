import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';

const ImageGallery = () => {
  const [images] = useState([
  { id: '1TtgHriJuANPdL_JvM9g8cqzuD72S4N0n', title: 'Central Business Square', alt: 'Central Business Square' },
  { id: '1Hen-bjgHSoR4raoAgJt3NpCjANUTVM2f', title: 'Rumanza', alt: 'Rumanza DHA Multan' },
  { id: '1tTz9rt8L8Mbj3mmXIRa94NHwinEfwLSW', title: 'Sector A', alt: 'Sector A description' },
  { id: '1GiaJ29Qi8LPfWUzb7mPWYTurfzR_oDQ8', title: 'Sector B1', alt: 'Sector B description' },
  // { id: '1tTz9rt8L8Mbj3mmXIRa94NHwinEfwLSW', title: 'Sector C', alt: 'Sector C description' },
  { id: '1TWw2vcHAoLatuW6TYN1R1RibZqKIxjFk', title: 'Sector D', alt: 'Sector D description' },
  { id: '1xKodWXzUeg38LJaXNSyRvWv4awhCahh8', title: 'Sector E', alt: 'Sector E description' },
  { id: '1okvkvhAw-3oi6JEXCgMzEl4wdPS3sMM5', title: 'Sector E1, E2', alt: 'Sector E1, E2 description' },
  { id: '1h60YYQUnvtlm0s62wO3Ktk6BZEDNT7Hw', title: 'Sector F', alt: 'Sector F description' },
  { id: '1kRmLX_vMR8eGDHq1ya3viMPHR9NDVocD', title: 'Sector G', alt: 'Sector G description' },
  { id: '1FGru6TyzqZn0IY_AaeJG5M59rJPNRs8w', title: 'Sector H', alt: 'Sector H description' },
  { id: '1N-zrqpKUGMoJlFoc-dzmuSycaoc-Cxid', title: 'Sector I', alt: 'Sector I description' },
  // { id: '1tTz9rt8L8Mbj3mmXIRa94NHwinEfwLSW', title: 'Sector J', alt: 'Sector J description' },
  { id: '1mDjtq0heBEGzYVStqeOrNw39RZ6ReOKz', title: 'Sector K', alt: 'Sector K description' },
  { id: '1uGpiHWcXrpNvtYOcQnxoBA1zlfIKweyR', title: 'Sector L', alt: 'Sector L description' },
  { id: '1JD8ca5HMiJvGpfkYG8k9_hj3U0jJBC6z', title: 'Sector M', alt: 'Sector M description' },
  { id: '1Qh8BYk387T8jtGbVRjxZOrQZz_japxpV', title: 'Sector N', alt: 'Sector N description' },
  { id: '1NM8vsPUiPHgxorGPmGMFrsRLcoSL-KIm', title: 'Sector O', alt: 'Sector O description' },
  { id: '1bqjB-7iHTmS9JxFcJyj4mKoybH37efkM', title: 'Sector P', alt: 'Sector P description' },
  { id: '1ck0zP84R6gt1Cr_gyhI9iTKyoYdiEUG6', title: 'Sector Q', alt: 'Sector Q description' },
  { id: '1tTz9rt8L8Mbj3mmXIRa94NHwinEfwLSW', title: 'Sector R', alt: 'Sector R description' },
  { id: '1tTz9rt8L8Mbj3mmXIRa94NHwinEfwLSW', title: 'Sector S', alt: 'Sector S description' },
  { id: '1tTz9rt8L8Mbj3mmXIRa94NHwinEfwLSW', title: 'Sector T', alt: 'Sector T description' },
  { id: '1tTz9rt8L8Mbj3mmXIRa94NHwinEfwLSW', title: 'Sector U', alt: 'Sector U description' },
  { id: '1tTz9rt8L8Mbj3mmXIRa94NHwinEfwLSW', title: 'Sector V', alt: 'Sector V description' },
  { id: '1tTz9rt8L8Mbj3mmXIRa94NHwinEfwLSW', title: 'Sector W', alt: 'Sector W description' },
  { id: '1tTz9rt8L8Mbj3mmXIRa94NHwinEfwLSW', title: 'Sector X', alt: 'Sector X description' },
  { id: '1tTz9rt8L8Mbj3mmXIRa94NHwinEfwLSW', title: 'Sector Y', alt: 'Sector Y description' },
  { id: '1tTz9rt8L8Mbj3mmXIRa94NHwinEfwLSW', title: 'Sector Z', alt: 'Sector Z description' }
]);

  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1); // 1 = 100%
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleClose = () => {
    setShowModal(false);
    setSelectedImage(null);
    setZoomLevel(1); // Reset zoom when closing
    setPosition({ x: 0, y: 0 }); // Reset position
  };

  const handleShow = (image) => {
    setSelectedImage(image);
    setShowModal(true);
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  const zoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 3)); // Limit max zoom to 300%
  };

  const zoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.5)); // Limit min zoom to 50%
  };

  const resetZoom = () => {
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  // Handle mouse down for dragging
  const handleMouseDown = (e) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  // Handle mouse move for dragging
  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  // Handle mouse up to stop dragging
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const getImageUrl = (id) => {
    const formats = [
      `https://drive.google.com/uc?export=view&id=${id}&t=${Date.now()}`,
      `https://docs.google.com/uc?id=${id}`,
      `https://lh3.googleusercontent.com/d/${id}=s0`,
    ];
    return formats[0];
  };

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">DHA Multan <span>Maps</span></h1>
      
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {images.map((image) => (
          <Col key={image.id}>
            <Card className="h-100" onClick={() => handleShow(image)} style={{ cursor: 'pointer' }}>
              <Card.Img 
                variant="top"
                src={getImageUrl(image.id)}
                alt={image.alt}
                onError={(e) => {
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

      {/* Modal for enlarged image view with zoom controls */}
      <Modal show={showModal} onHide={handleClose} size="xl" centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedImage?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body 
          className="text-center overflow-hidden" 
          style={{ 
            height: '70vh',
            cursor: zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {selectedImage && (
            <div 
              style={{ 
                transform: `translate(${position.x}px, ${position.y}px) scale(${zoomLevel})`,
                transition: isDragging ? 'none' : 'transform 0.2s ease',
                transformOrigin: 'center center',
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <img 
                src={getImageUrl(selectedImage.id)}
                alt={selectedImage.alt}
                style={{ 
                  maxWidth: '100%', 
                  maxHeight: '100%',
                  objectFit: 'contain'
                }}
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
            </div>
          )}
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-end">
            <Button variant="outline-secondary" onClick={zoomOut} disabled={zoomLevel <= 0.5}>
              <i className="bi bi-zoom-out"></i> Zoom Out
            </Button>
            <Button variant="outline-secondary" onClick={resetZoom} disabled={zoomLevel === 1} className="mx-2">
              <i className="bi bi-fullscreen-exit"></i> Reset
            </Button>
            <Button variant="outline-secondary" onClick={zoomIn} disabled={zoomLevel >= 3}>
              <i className="bi bi-zoom-in"></i> Zoom In
            </Button>
           {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ImageGallery;