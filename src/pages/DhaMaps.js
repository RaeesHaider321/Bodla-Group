import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';

const ImageGallery = () => {
  const [images] = useState([
    { id: '1pmnV7kZGRQ5R9qt-Ou28Oo0U0yg-e1R3', title: 'Central Business Square', alt: 'Central Business Square' },
    { id: '1EDyUxFSFe8YgIpfdYvtLJa7Mp1lZltLa', title: 'Rumanza', alt: 'Rumanza DHA Multan' },
    { id: '1blPpHK3G-GIotSk_hSvmsbkrYfvAgX8-', title: 'Sector A', alt: 'Sector A description' },
    { id: '1BUCrED9ualOVvLqRjXM2dlXNF8_pb2q-', title: 'Sector B1', alt: 'Sector B 1 description' },
    { id: '1MzplZ2p-eG6vaX64EXQ3A8W-YclsqqLv', title: 'Sector D', alt: 'Sector D description' },
    { id: '1acO8OPZFaoJPpTU8eu4oOH4Z4Y3dXwjU', title: 'Sector E', alt: 'Sector E description' },
    { id: '1IPeD5pz3faD29hy58-3IecpFdbnV3ocT', title: 'Sector E1, E2', alt: 'Sector E1, E2 description' },
    { id: '16lpv1PKQff2HPcdp0bmiDytT9vxG7bnP', title: 'Sector F', alt: 'Sector F description' },
    { id: '1Nkudi5WE7tawgXH05RAIXsiBtvVSxeXX', title: 'Sector G', alt: 'Sector G description' },
    { id: '1JInu1-zHE_otXxhB0bRT-knO6zzMCdt9', title: 'Sector H', alt: 'Sector H description' },
    { id: '1TQxXcIwtz2-uIXrEU_wqnOUu7Ls1kNzP', title: 'Sector I', alt: 'Sector I description' },
    { id: '1SeYjH7SYf2OcmLq5Q5Mipxut0vhf6rpX', title: 'Sector K', alt: 'Sector K description' },
    { id: '1IskJTl2g3DS1GuCXAaf2HCqr9qASudNe', title: 'Sector L', alt: 'Sector L description' },
    { id: '1a5PW6qIcGCipkwjfjDmQ2kdHULD2QQS8', title: 'Sector M', alt: 'Sector M description' },
    { id: '1iLxyhB4jD6elgEaDXK5uXSPScaPiUKld', title: 'Sector N', alt: 'Sector N description' },
    { id: '1_uW_IgL39jUq8ruNaiYQCxA6Yz-jwlEP', title: 'Sector O', alt: 'Sector O description' },
    { id: '1po30_IBEwe6CIwfk0DtGhE1yGpz9D0hb', title: 'Sector P', alt: 'Sector P description' },
    { id: '1uKRxUMSaZTDE-ripvjDPBEbs2TTMJCvC', title: 'Sector Q', alt: 'Sector Q description' },
    { id: '1r9CqjAe2m4itY0RRozzg49CY7rNFmvz1', title: 'Sector R', alt: 'Sector R description' },
    { id: '1hVPJmPvpaD11vYtgKeFNPeRfpTIlI17i', title: 'Sector S', alt: 'Sector S description' },
    { id: '1EYvwN1gbpVo9Ns4n-d_H6eYiIvV1ySUh', title: 'Sector T', alt: 'Sector T description' },
    { id: '1JjUem-AJcQfnXlaoPKz1j2JeDby2i4VX', title: 'Sector U', alt: 'Sector U description' },
    { id: '1anW61nd1EHzzXNq41BPjrY6DZkIrzYhr', title: 'Sector V', alt: 'Sector V description' },
    { id: '14oAl7Qegu3dOu3cCPUmxIyNkkLya6D4d', title: 'Sector W 1', alt: 'Sector W description' },
    { id: '18sbDIxijbdKOGiCY9_1VRWPotdoXX94m', title: 'Sector W 2', alt: 'Sector W description' },
    { id: '1LMvHaoarsFkW5O5Zel0ust7OtiuGt1lb', title: 'Sector X', alt: 'Sector X description' },
    { id: '1IprHhBKPeWT5KR5ZY5C9TVOL3TsNpb1u', title: 'Sector Y', alt: 'Sector Y description' }
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
    setZoomLevel(prev => Math.min(prev + 0.5, 10)); // Max zoom 1000% (10x)
  };

  const zoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.5, 0.1)); // Min zoom 10% (0.1x)
  };

  const resetZoom = () => {
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const getImageUrl = (id) => {
    return `https://drive.google.com/uc?export=view&id=${id}&t=${Date.now()}`;
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
        <Modal.Footer className="d-flex justify-content-between align-items-center">
          <div className="text-muted">
            Zoom: {Math.round(zoomLevel * 100)}%
          </div>
          <div>
            <Button variant="outline-secondary" onClick={zoomOut} disabled={zoomLevel <= 0.1}>
              <i className="bi bi-zoom-out"></i> Zoom Out
            </Button>
            <Button variant="outline-secondary" onClick={resetZoom} disabled={zoomLevel === 1} className="mx-2">
              <i className="bi bi-fullscreen-exit"></i> Reset
            </Button>
            <Button variant="outline-secondary" onClick={zoomIn} disabled={zoomLevel >= 10}>
              <i className="bi bi-zoom-in"></i> Zoom In
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ImageGallery;