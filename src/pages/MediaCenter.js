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
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [galleryView, setGalleryView] = useState(false);
  const [currentGallery, setCurrentGallery] = useState([]);
  const [currentGalleryTitle, setCurrentGalleryTitle] = useState('');
  const [isVideo, setIsVideo] = useState(false);

  // Media data with YouTube videos
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
        title: 'Luxury Living at Bodla Homes: Explore Our 4-Bedroom Villas in DHA Multan!',
        videoLink: "https://www.youtube.com/embed/agUm10fzXDQ?si=8rh8psHk6XPFNdL8",
        thumbnail: `https://img.youtube.com/vi/agUm10fzXDQ/hqdefault.jpg`,
        alt: 'Company Overview Video'
      },
      {
        id: 2,
        title: 'A Night of Champions – Honoring Spirit, Sportsmanship & Success | Bodla Group',
        videoLink: "https://www.youtube.com/embed/zOaQpoPiaH4?si=7yLNg3q0aAtKfB99",
        thumbnail: `https://img.youtube.com/vi/zOaQpoPiaH4/hqdefault.jpg`,
        alt: 'Product Demo Video'
      },
      {
        id: 3,
        title: 'Bodla Group – The Only Developer with 5 Projects in DHA Multan',
        videoLink: "https://www.youtube.com/embed/TNa_ME_l4C4?si=jJt1aGZ2jw34Ck1w",
        thumbnail: `https://img.youtube.com/vi/TNa_ME_l4C4/hqdefault.jpg`,
        alt: 'Product Demo Video'
      },
      {
        id: 4,
        title: 'Launch of Sector V Community Park | Sector V DHA Multan',
        videoLink: "https://www.youtube.com/embed/jpC-AeDddeg?si=77elJc2UyCIV_Tdb",
        thumbnail: `https://img.youtube.com/vi/jpC-AeDddeg/hqdefault.jpg`,
        alt: 'Product Demo Video'
      },
      {
        id: 5,
        title: 'DHA Multan First Invitational Tournament Qualifier Round Highlights',
        videoLink: "https://www.youtube.com/embed/kCRyEUgKatc?si=VAcKUo8hWb8uOX5j",
        thumbnail: `https://img.youtube.com/vi/kCRyEUgKatc/hqdefault.jpg`,
        alt: 'Product Demo Video'
      },
      {
        id: 6,
        title: 'Where Will Your Business Grow Next? One Destination – DHA Multan',
        videoLink: "https://www.youtube.com/embed/t4UNA7RqoR8?si=ZF29Xo1kzOmZdHRA",
        thumbnail: `https://img.youtube.com/vi/t4UNA7RqoR8/hqdefault.jpg`,
        alt: 'Product Demo Video'
      }
    ]
  };

  const handleImageClick = (gallery) => {
    setCurrentGallery(gallery.items);
    setCurrentGalleryTitle(gallery.title);
    setGalleryView(true);
    setIsVideo(false);
  };

  const handleVideoClick = (video) => {
    setSelectedMedia(video);
    setIsVideo(true);
    setShowModal(true);
  };

  const handleGalleryImageClick = (image) => {
    setSelectedMedia(image);
    setIsVideo(false);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMedia(null);
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
                  <Card.Text>Click to view larger</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedMedia?.alt}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            {selectedMedia && !isVideo && (
              <Image src={selectedMedia.img} alt={selectedMedia.alt} fluid />
            )}
          </Modal.Body>
        </Modal>
      </Container>
    );
  }

  return (
    <section>
    <Container>
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
          <Row xs={1} md={2} lg={3} className="g-4 mt-3">
            {mediaData.videos.map((video) => (
              <Col key={video.id}>
                <Card className="h-100" onClick={() => handleVideoClick(video)} style={{ cursor: 'pointer' }}>
                  <Card.Img 
                    variant="top" 
                    src={video.thumbnail} 
                    alt={video.alt}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title>{video.title}</Card.Title>
                    <Card.Text>Click to play video</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Tab>
      </Tabs>

      {/* Video Modal */}
      <Modal show={showModal && isVideo} onHide={handleCloseModal} size="xl" centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedMedia?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {selectedMedia && isVideo && (
            <div className="ratio ratio-16x9">
              <iframe 
                src={selectedMedia.videoLink}
                title={selectedMedia.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen>
              </iframe>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </Container>
    </section>
  );
};

export default MediaCenter;