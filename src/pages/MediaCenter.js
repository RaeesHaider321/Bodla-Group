import React, { useState } from 'react';
import { Tab, Tabs, Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/MediaCenter.css';

const MediaCenter = () => {
  const [activeTab, setActiveTab] = useState('images');
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Sample data
  const images = [
    { id: 1, src: 'https://source.unsplash.com/random/300x200?nature', alt: 'Nature' },
    { id: 2, src: 'https://source.unsplash.com/random/300x200?city', alt: 'City' },
    { id: 3, src: 'https://source.unsplash.com/random/300x200?animal', alt: 'Animal' },
    { id: 4, src: 'https://source.unsplash.com/random/300x200?architecture', alt: 'Architecture' },
    { id: 5, src: 'https://source.unsplash.com/random/300x200?food', alt: 'Food' },
    { id: 6, src: 'https://source.unsplash.com/random/300x200?technology', alt: 'Technology' },
  ];

  const videos = [
    { id: 1, src: 'https://www.w3schools.com/html/mov_bbb.mp4', title: 'Sample Video 1' },
    { id: 2, src: 'https://www.w3schools.com/html/mov_bbb.mp4', title: 'Sample Video 2' },
    { id: 3, src: 'https://www.w3schools.com/html/mov_bbb.mp4', title: 'Sample Video 3' },
  ];

  const openImageModal = (image) => {
    setSelectedImage(image);
    setSelectedVideo(null);
    setShowModal(true);
  };

  const openVideoModal = (video) => {
    setSelectedVideo(video);
    setSelectedImage(null);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
    setSelectedVideo(null);
  };

  return (
    <div className="media-center">
      {/* Hero Header */}
      <div className="hero-header text-white text-center py-5 mb-4">
        <div className="container">
          <h1 className="display-4">Media Center</h1>
          <p className="lead">Explore our collection of images and videos</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="container">
        <Tabs
          activeKey={activeTab}
          onSelect={(k) => setActiveTab(k)}
          id="media-tabs"
          className="mb-4"
        >
          <Tab eventKey="images" title="Images">
            <div className="row mt-3">
              {images.map((image) => (
                <div key={image.id} className="col-md-4 mb-4">
                  <div className="card h-100" onClick={() => openImageModal(image)}>
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="card-img-top img-fluid"
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <div className="card-body">
                      <p className="card-text">{image.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Tab>
          <Tab eventKey="videos" title="Videos">
            <div className="row mt-3">
              {videos.map((video) => (
                <div key={video.id} className="col-md-4 mb-4">
                  <div className="card h-100" onClick={() => openVideoModal(video)}>
                    <video 
                      muted 
                      className="card-img-top"
                      style={{ height: '200px', objectFit: 'cover' }}
                    >
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="card-body">
                      <p className="card-text">{video.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Tab>
        </Tabs>
      </div>

      {/* Modal */}
      <Modal 
        show={showModal} 
        onHide={handleCloseModal}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedImage ? selectedImage.alt : selectedVideo?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {selectedImage && (
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="img-fluid"
            />
          )}
          {selectedVideo && (
            <video controls autoPlay className="w-100">
              <source src={selectedVideo.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MediaCenter;