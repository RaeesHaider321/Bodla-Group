import React, { useState } from 'react';
import { Tab, Tabs, Card, Modal, Image, Row, Col, Container, Button } from 'react-bootstrap';

// Import local images for galleries
import DHAAwards from '../images/mediaCenter/DHAAwards/DHAAwards.png';
import DHAAwards1 from '../images/mediaCenter/DHAAwards/DHAAwards1.jpg';
import DHAAwards2 from '../images/mediaCenter/DHAAwards/DHAAwards2.jpg';
import DHAAwards3 from '../images/mediaCenter/DHAAwards/DHAAwards3.jpg';
import DHAAwards4 from '../images/mediaCenter/DHAAwards/DHAAwards4.jpg';
import DHAAwards5 from '../images/mediaCenter/DHAAwards/DHAAwards5.jpg';
import DHAAwards6 from '../images/mediaCenter/DHAAwards/DHAAwards6.jpg';
import DHAAwards7 from '../images/mediaCenter/DHAAwards/DHAAwards7.jpg';
import DHAAwards8 from '../images/mediaCenter/DHAAwards/DHAAwards8.jpg';
import DHAAwards9 from '../images/mediaCenter/DHAAwards/DHAAwards9.jpg';
import DHAAwards10 from '../images/mediaCenter/DHAAwards/DHAAwards10.png';
import DHAAwards11 from '../images/mediaCenter/DHAAwards/DHAAwards11.png';
import DHAAwards12 from '../images/mediaCenter/DHAAwards/DHAAwards12.jpg';

// Bodla Homes
import BodlaHomes1 from '../images/mediaCenter/GroundBreakingBodlaHomes/Bhomes.jpg';
import BodlaHomes2 from '../images/mediaCenter/GroundBreakingBodlaHomes/Bhomes1.jpg';

// Bodla Business Hub
import BHub1 from '../images/mediaCenter/GroundBreakingBHub/BhubGB.jpg';
import BHub2 from '../images/mediaCenter/GroundBreakingBHub/BhubGB1.jpg';

// Zaitoon
import Zaitoon1 from '../images/mediaCenter/Zaitoon/zaitoon1.png';
import Zaitoon2 from '../images/mediaCenter/Zaitoon/zaitoon2.png';
import Zaitoon3 from '../images/mediaCenter/Zaitoon/zaitoon3.png';
import Zaitoon4 from '../images/mediaCenter/Zaitoon/zaitoon4.png';

// Sector V Park
import SectorVPark1 from '../images/mediaCenter/Sector-V park/1.png';
import SectorVPark2 from '../images/mediaCenter/Sector-V park/2.png';
import SectorVPark3 from '../images/mediaCenter/Sector-V park/3.png';
import SectorVPark4 from '../images/mediaCenter/Sector-V park/4.png';
import SectorVPark5 from '../images/mediaCenter/Sector-V park/5.png';
import SectorVPark6 from '../images/mediaCenter/Sector-V park/6.png';
import SectorVPark7 from '../images/mediaCenter/Sector-V park/7.png';
import SectorVPark8 from '../images/mediaCenter/Sector-V park/8.png';
import SectorVPark9 from '../images/mediaCenter/Sector-V park/9.png';

// EnergizationSectorV
import SectorV1 from '../images/mediaCenter/EnergizationSectorV/1.png';
import SectorV2 from '../images/mediaCenter/EnergizationSectorV/2.png';
import SectorV3 from '../images/mediaCenter/EnergizationSectorV/3.png';
import SectorV4 from '../images/mediaCenter/EnergizationSectorV/4.png';
import SectorV5 from '../images/mediaCenter/EnergizationSectorV/5.png';
import SectorV6 from '../images/mediaCenter/EnergizationSectorV/6.png';
import SectorV7 from '../images/mediaCenter/EnergizationSectorV/7.png';
import SectorV8 from '../images/mediaCenter/EnergizationSectorV/8.png';
import SectorV9 from '../images/mediaCenter/EnergizationSectorV/9.png';
import SectorV10 from '../images/mediaCenter/EnergizationSectorV/10.png';

// Shame Sufiana
import ShameSufiana1 from '../images/mediaCenter/ShameSufiana/1.png';
import ShameSufiana2 from '../images/mediaCenter/ShameSufiana/2.png';
import ShameSufiana3 from '../images/mediaCenter/ShameSufiana/3.png';
import ShameSufiana4 from '../images/mediaCenter/ShameSufiana/4.png';
import ShameSufiana5 from '../images/mediaCenter/ShameSufiana/5.png';
import ShameSufiana6 from '../images/mediaCenter/ShameSufiana/6.png';
import ShameSufiana7 from '../images/mediaCenter/ShameSufiana/7.png';
import ShameSufiana8 from '../images/mediaCenter/ShameSufiana/8.png';
import ShameSufiana9 from '../images/mediaCenter/ShameSufiana/9.png';
import ShameSufiana10 from '../images/mediaCenter/ShameSufiana/10.png';
import ShameSufiana11 from '../images/mediaCenter/ShameSufiana/11.png';
import ShameSufiana12 from '../images/mediaCenter/ShameSufiana/12.png';
import ShameSufiana13 from '../images/mediaCenter/ShameSufiana/13.png';
import ShameSufiana14 from '../images/mediaCenter/ShameSufiana/14.png';
import ShameSufiana15 from '../images/mediaCenter/ShameSufiana/15.png';
import ShameSufiana16 from '../images/mediaCenter/ShameSufiana/16.png';
import ShameSufiana17 from '../images/mediaCenter/ShameSufiana/17.png';
import ShameSufiana18 from '../images/mediaCenter/ShameSufiana/18.png';
import ShameSufiana19 from '../images/mediaCenter/ShameSufiana/19.png';
import ShameSufiana20 from '../images/mediaCenter/ShameSufiana/20.png';
import ShameSufiana21 from '../images/mediaCenter/ShameSufiana/21.png';
import ShameSufiana22 from '../images/mediaCenter/ShameSufiana/22.png';
import ShameSufiana23 from '../images/mediaCenter/ShameSufiana/23.png';
import ShameSufiana24 from '../images/mediaCenter/ShameSufiana/24.png';
import ShameSufiana25 from '../images/mediaCenter/ShameSufiana/25.png';
import ShameSufiana26 from '../images/mediaCenter/ShameSufiana/26.png';


// One Destination Launch
import oneD1 from '../images/mediaCenter/OneDLaunch/oneD1.png';
import oneD2 from '../images/mediaCenter/OneDLaunch/oneD2.png';
import oneD3 from '../images/mediaCenter/OneDLaunch/oneD3.png';
import oneD4 from '../images/mediaCenter/OneDLaunch/oneD4.png';
import oneD5 from '../images/mediaCenter/OneDLaunch/oneD5.png';
import oneD6 from '../images/mediaCenter/OneDLaunch/oneD6.png';
import oneD7 from '../images/mediaCenter/OneDLaunch/oneD7.png';
import oneD8 from '../images/mediaCenter/OneDLaunch/oneD8.png';
import oneD9 from '../images/mediaCenter/OneDLaunch/oneD9.png';
import oneD10 from '../images/mediaCenter/OneDLaunch/oneD10.png';
import oneD11 from '../images/mediaCenter/OneDLaunch/oneD11.png';
import oneD12 from '../images/mediaCenter/OneDLaunch/oneD12.png';



// import IftarEvent1 from '../images/mediaCenter/IftarEvent/';
import IftarEvent1 from '../images/mediaCenter/IftarEvent/1.png';
import IftarEvent2 from '../images/mediaCenter/IftarEvent/2.png';
import IftarEvent3 from '../images/mediaCenter/IftarEvent/3.png';
import IftarEvent4 from '../images/mediaCenter/IftarEvent/4.png';
import IftarEvent5 from '../images/mediaCenter/IftarEvent/5.png';
import IftarEvent6 from '../images/mediaCenter/IftarEvent/6.png';
import IftarEvent7 from '../images/mediaCenter/IftarEvent/7.png';

const MediaCenter = () => {
  const [key, setKey] = useState('images');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [galleryView, setGalleryView] = useState(false);
  const [currentGallery, setCurrentGallery] = useState([]);
  const [currentGalleryTitle, setCurrentGalleryTitle] = useState('');
  const [isVideo, setIsVideo] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Media data with YouTube videos
  const mediaData = {
    images: [
      {
        id: 1,
        title: 'Iftar Event',
        items: [
          { id: 1, img: IftarEvent1, alt: 'Iftar Party' },
          { id: 2, img: IftarEvent2, alt: 'Iftar Party' },
          { id: 3, img: IftarEvent3, alt: 'Iftar Party' },
          { id: 4, img: IftarEvent4, alt: 'Iftar Party' },
          { id: 5, img: IftarEvent5, alt: 'Iftar Party' },
          { id: 6, img: IftarEvent6, alt: 'Iftar Party' },
          { id: 7, img: IftarEvent7, alt: 'Iftar Party' },
        ]
      },
      {
        id: 2,
        title: 'DHA Awards',
        items: [
          { id: 13, img: DHAAwards, alt: 'First Position' },
          { id: 1, img: DHAAwards1, alt: 'First Position' },
          { id: 2, img: DHAAwards2, alt: 'First Position' },
          { id: 3, img: DHAAwards3, alt: 'First Position' },
          { id: 4, img: DHAAwards4, alt: 'First Position' },
          { id: 5, img: DHAAwards5, alt: 'First Position' },
          { id: 6, img: DHAAwards6, alt: 'First Position' },
          { id: 7, img: DHAAwards7, alt: 'Seventh Position' },
          { id: 8, img: DHAAwards8, alt: 'Eighth Position' },
          { id: 9, img: DHAAwards9, alt: 'Ninth Position' },
          { id: 10, img: DHAAwards10, alt: 'Tenth Position' },
          { id: 11, img: DHAAwards11, alt: 'Eleventh Position' },
          { id: 12, img: DHAAwards12, alt: 'Twelfth Position' }
        ]
      },
      {
        id: 3,
        title: 'Energization of Sector V',
        items: [
          { id: 1, img: SectorV1, alt: 'Energization of Sector V' },
          { id: 2, img: SectorV2, alt: 'Energization of Sector V' },
          { id: 3, img: SectorV3, alt: 'Energization of Sector V' },
          { id: 4, img: SectorV4, alt: 'Energization of Sector V' },
          { id: 5, img: SectorV5, alt: 'Energization of Sector V' },
          { id: 6, img: SectorV6, alt: 'Energization of Sector V' },
          { id: 7, img: SectorV7, alt: 'Energization of Sector V' },
          { id: 8, img: SectorV8, alt: 'Energization of Sector V' },
          { id: 9, img: SectorV9, alt: 'Energization of Sector V' },
          { id: 10, img: SectorV10, alt: 'Energization of Sector V' },
        ]
      },
      {
        id: 4,
        title: 'Ground Breaking of Bodla Homes',
        items: [
          { id: 1, img: BodlaHomes1, alt: 'Ground Breaking of Bodla Homes' },
          { id: 2, img: BodlaHomes2, alt: 'Ground Breaking of Bodla Homes' },
        ]
      },
      {
        id: 5,
        title: 'Ground Breaking of Business Hub',
        items: [
          { id: 1, img: BHub1, alt: 'Ground Breaking of Business Hub' },
          { id: 1, img: BHub2, alt: 'Ground Breaking of Business Hub' },
        ]
      },
      {
        id: 6,
        title: 'ONE D Launch',
        items: [
          { id: 1, img: oneD1, alt: 'One Destination Launch Event' },
          { id: 2, img: oneD2, alt: 'One Destination Launch Event' },
          { id: 3, img: oneD3, alt: 'One Destination Launch Event' },
          { id: 4, img: oneD4, alt: 'One Destination Launch Event' },
          { id: 5, img: oneD5, alt: 'One Destination Launch Event' },
          { id: 6, img: oneD6, alt: 'One Destination Launch Event' },
          { id: 7, img: oneD7, alt: 'One Destination Launch Event' },
          { id: 8, img: oneD8, alt: 'One Destination Launch Event' },
          { id: 9, img: oneD9, alt: 'One Destination Launch Event' },
          { id: 10, img: oneD10, alt: 'One Destination Launch Event' },
          { id: 11, img: oneD11, alt: 'One Destination Launch Event' },
          { id: 12, img: oneD12, alt: 'One Destination Launch Event' },
        ]
      },
      {
        id: 7,
        title: 'Sector-V park',
        items: [
          { id: 1, img: SectorVPark1, alt: 'Sector V Park' },
          { id: 2, img: SectorVPark2, alt: 'Sector V Park' },
          { id: 3, img: SectorVPark3, alt: 'Sector V Park' },
          { id: 4, img: SectorVPark4, alt: 'Sector V Park' },
          { id: 5, img: SectorVPark5, alt: 'Sector V Park' },
          { id: 6, img: SectorVPark6, alt: 'Sector V Park' },
          { id: 7, img: SectorVPark7, alt: 'Sector V Park' },
          { id: 8, img: SectorVPark8, alt: 'Sector V Park' },
          { id: 9, img: SectorVPark9, alt: 'Sector V Park' },
        ]
      },
      {
        id: 8,
        title: 'Shame Sufiana',
        items: [
          { id: 1, img: ShameSufiana1, alt: 'Sham E Sufiana' },
          { id: 2, img: ShameSufiana2, alt: 'Sham E Sufiana' },
          { id: 3, img: ShameSufiana3, alt: 'Sham E Sufiana' },
          { id: 4, img: ShameSufiana4, alt: 'Sham E Sufiana' },
          { id: 5, img: ShameSufiana5, alt: 'Sham E Sufiana' },
          { id: 6, img: ShameSufiana6, alt: 'Sham E Sufiana' },
          { id: 7, img: ShameSufiana7, alt: 'Sham E Sufiana' },
          { id: 8, img: ShameSufiana8, alt: 'Sham E Sufiana' },
          { id: 9, img: ShameSufiana9, alt: 'Sham E Sufiana' },
          { id: 10, img: ShameSufiana10, alt: 'Sham E Sufiana' },
          { id: 11, img: ShameSufiana11, alt: 'Sham E Sufiana' },
          { id: 12, img: ShameSufiana12, alt: 'Sham E Sufiana' },
          { id: 13, img: ShameSufiana13, alt: 'Sham E Sufiana' },
          { id: 14, img: ShameSufiana14, alt: 'Sham E Sufiana' },
          { id: 15, img: ShameSufiana15, alt: 'Sham E Sufiana' },
          { id: 16, img: ShameSufiana16, alt: 'Sham E Sufiana' },
          { id: 17, img: ShameSufiana17, alt: 'Sham E Sufiana' },
          { id: 18, img: ShameSufiana18, alt: 'Sham E Sufiana' },
          { id: 19, img: ShameSufiana19, alt: 'Sham E Sufiana' },
          { id: 20, img: ShameSufiana20, alt: 'Sham E Sufiana' },
          { id: 21, img: ShameSufiana21, alt: 'Sham E Sufiana' },
          { id: 22, img: ShameSufiana22, alt: 'Sham E Sufiana' },
          { id: 23, img: ShameSufiana23, alt: 'Sham E Sufiana' },
          { id: 24, img: ShameSufiana24, alt: 'Sham E Sufiana' },
          { id: 25, img: ShameSufiana25, alt: 'Sham E Sufiana' },
          { id: 26, img: ShameSufiana26, alt: 'Sham E Sufiana' },
        ]
      },
      {
        id: 9,
        title: 'Zaitoon',
        items: [
          { id: 1, img: Zaitoon1, alt: 'Zaitoon Event' },
          { id: 2, img: Zaitoon2, alt: 'Zaitoon Event' },
          { id: 3, img: Zaitoon3, alt: 'Zaitoon Event' },
          { id: 4, img: Zaitoon4, alt: 'Zaitoon Event' },
        ]
      },
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

  const handleVideoClick = (video, index) => {
    setSelectedMedia(video);
    setCurrentIndex(index);
    setIsVideo(true);
    setShowModal(true);
  };

  const handleGalleryImageClick = (image, index) => {
    setSelectedMedia(image);
    setCurrentIndex(index);
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

  const handleNext = () => {
    if (isVideo) {
      const nextIndex = (currentIndex + 1) % mediaData.videos.length;
      setCurrentIndex(nextIndex);
      setSelectedMedia(mediaData.videos[nextIndex]);
    } else {
      const nextIndex = (currentIndex + 1) % currentGallery.length;
      setCurrentIndex(nextIndex);
      setSelectedMedia(currentGallery[nextIndex]);
    }
  };

  const handlePrevious = () => {
    if (isVideo) {
      const prevIndex = (currentIndex - 1 + mediaData.videos.length) % mediaData.videos.length;
      setCurrentIndex(prevIndex);
      setSelectedMedia(mediaData.videos[prevIndex]);
    } else {
      const prevIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
      setCurrentIndex(prevIndex);
      setSelectedMedia(currentGallery[prevIndex]);
    }
  };

  if (galleryView) {
    return (
      <section>
      <Container>
        <h2 className="mb-4">{currentGalleryTitle}</h2>
        <button className="btn btn-secondary mb-4" onClick={handleBackToGallery}>
          Back to Media Center
        </button>
        <Row xs={1} md={2} lg={3} className="g-4">
          {currentGallery.map((item, index) => (
            <Col key={item.id}>
              <Card className="h-100" onClick={() => handleGalleryImageClick(item, index)} style={{ cursor: 'pointer' }}>
                <Card.Img variant="top" src={item.img} alt={item.alt} />
                {/* <Card.Body>
                  <Card.Title>{item.alt}</Card.Title>
                  <Card.Text>Click to view larger</Card.Text>
                </Card.Body> */}
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
          <Modal.Footer className="justify-content-between">
            <Button variant="primary" onClick={handlePrevious} disabled={currentIndex === 0}>
              Previous
            </Button>
            <span>{currentIndex + 1} of {currentGallery.length}</span>
            <Button variant="primary" onClick={handleNext} disabled={currentIndex === currentGallery.length - 1}>
              Next
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
      </section>
    );
  }

  return (
    <section className='mediaCenter'>
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
                      {/* <Card.Text>{gallery.items.length} images</Card.Text> */}
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Tab>
          <Tab eventKey="videos" title="Videos">
            <Row xs={1} md={2} lg={3} className="g-4 mt-3">
              {mediaData.videos.map((video, index) => (
                <Col key={video.id}>
                  <Card className="h-100" onClick={() => handleVideoClick(video, index)} style={{ cursor: 'pointer' }}>
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
          <Modal.Footer className="justify-content-between">
            <Button variant="primary" onClick={handlePrevious} disabled={currentIndex === 0}>
              Previous
            </Button>
            <span>{currentIndex + 1} of {mediaData.videos.length}</span>
            <Button variant="primary" onClick={handleNext} disabled={currentIndex === mediaData.videos.length - 1}>
              Next
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </section>
  );
};

export default MediaCenter;