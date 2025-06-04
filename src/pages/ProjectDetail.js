import React, { useState } from 'react';
import { Tab, Tabs, Card, Modal, Image, Row, Col, Container } from 'react-bootstrap';

// Import local images for galleries
import Event1 from '../images/mediaCenter/Event1.jpg';
import Event2 from '../images/mediaCenter/Event2.jpg';
import Event3 from '../images/mediaCenter/Event3.jpg';
import Event4 from '../images/mediaCenter/Event4.jpg';
import Event5 from '../images/mediaCenter/Event5.jpg';
import Event6 from '../images/mediaCenter/Event6.jpg';

const MediaCenter = () => {
  const [key, setKey] = useState('images');
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [galleryView, setGalleryView] = useState(false);
  const [currentGallery, setCurrentGallery] = useState([]);
  const [currentGalleryTitle, setCurrentGalleryTitle] = useState('');

  // Media data with YouTube videos in your requested format
  const mediaData = {
    images: [
      {
        id: 1,
        title: 'Corporate Events',
        items: [
          { id: 1, img: Event1, alt: 'Corporate Event 1' },
          { id: 2, img: Event2, alt: 'Corporate Event 2' },
          { id: 3, img: Event3, alt: 'Corporate Event 3' },
        ]
      },
      {
        id: 2,
        title: 'Product Launches',
        items: [
          { id: 1, img: Event4, alt: 'Product Launch 1' },
          { id: 2, img: Event5, alt: 'Product Launch 2' },
        ]
      },
      {
        id: 3,
        title: 'Team Building',
        items: [
          { id: 1, img: Event6, alt: 'Team Building Activity' },
        ]
      }
    ],
    videos: [
      {
        id: 1,
        title: '𝑾𝒉𝒆𝒓𝒆 𝑾𝒊𝒍𝒍 𝒀𝒐𝒖𝒓 𝑩𝒖𝒔𝒊𝒏𝒆𝒔𝒔 𝑮𝒓𝒐𝒘 𝑵𝒆𝒙𝒕',
        videoLink: 'https://www.youtube.com/embed/t4UNA7RqoR8?si=2MeOhsUXFoeMkfS9',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg'
      },
      {
        id: 2,
        title: 'DHA Multan First Invitational Tournament Qualifier Round Highlights',
        videoLink: 'https://www.youtube.com/embed/kCRyEUgKatc?si=ekxo-8lFRnPgA_TN',
        thumbnail: 'https://img.youtube.com/vi/9bZkp7q19f0/hqdefault.jpg'
      }
    ]
  };

  const handleImageClick = (gallery) => {
    setCurrentGallery(gallery.items);
    setCurrentGalleryTitle(gallery.title);
    setGalleryView(true);
  };

  const handleGalleryImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  const handleBackToGallery = () => {
    setGalleryView(false);
    setCurrentGallery([]);
    setCurrentGalleryTitle('');
  };

  if (galleryView) {
    return (
      <Container className="mt-4">
        <h2 className="mb-4">{currentGalleryTitle}</h2>
        <button className="btn btn-secondary mb-4" onClick={handleBackToGallery}>
          Back to Media Center
        </button>
        <Row xs={1} md={2} lg={3} className="g-4">
          {currentGallery.map((item) => (
            <Col key={item.id}>
              <Card className="h-100" onClick={() => handleGalleryImageClick(item)} style={{ cursor: 'pointer' }}>
                <Card.Img variant="top" src={item.img} alt={item.alt} />
                <Card.Body>
                  <Card.Title>{item.alt}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedImage?.alt}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            {selectedImage && (
              <Image src={selectedImage.img} alt={selectedImage.alt} fluid />
            )}
          </Modal.Body>
        </Modal>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h1 className="mb-4">Media Center</h1>
      
      <Tabs
        id="media-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-4"
      >
        <Tab eventKey="images" title="Images">
          <Row xs={1} md={2} lg={3} className="g-4 mt-3">
            {mediaData.images.map((gallery) => (
              <Col key={gallery.id}>
                <Card className="h-100" onClick={() => handleImageClick(gallery)} style={{ cursor: 'pointer' }}>
                  <Card.Img variant="top" src={gallery.items[0].img} alt={gallery.title} />
                  <Card.Body>
                    <Card.Title>{gallery.title}</Card.Title>
                    <Card.Text>{gallery.items.length} images</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Tab>
        <Tab eventKey="videos" title="Videos">
          <Row xs={1} md={3} className="g-4 mt-3">
            {mediaData.videos.map((video) => (
              <Col key={video.id}>
                <Card className="h-100">
                  {/* <Card.Img 
                    variant="top" 
                    src={video.thumbnail} 
                    alt={video.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  /> */}
                  <Card.Body>
                    <div className="ratio ratio-16x9 mt-2">
                      <iframe 
                        src={video.videoLink}
                        title="YouTube video player" 
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen>
                      </iframe>
                    </div>
                    <Card.Title>{video.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default MediaCenter;