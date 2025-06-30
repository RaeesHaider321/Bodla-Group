import React, { useState } from 'react';
import '../styles/DhaMaps.css';
import { Container, Col, Row, Card } from 'react-bootstrap';
import ReactImageZoom from 'react-image-zoom';
import PageTitle from '../components/PageTitle';

import centralBS from '../images/MapsDHAMultan/CENTRAL BUSINESS SQUARE.png';
import rumanza from '../images/MapsDHAMultan/RUMANZA.png';
import sectorA from '../images/MapsDHAMultan/SECTOR A.png';
import sectorB1 from '../images/MapsDHAMultan/SECTOR B-1.png';
// import sectorC from '../images/MapsDHAMultan/SECTOR C.png';
import sectorD from '../images/MapsDHAMultan/SECTOR D.png';
import sectorE from '../images/MapsDHAMultan/SECTOR E.png';
import sectorE1n2 from '../images/MapsDHAMultan/SECTOR E1, E2.png';
import sectorF from '../images/MapsDHAMultan/SECTOR F.png';
import sectorG from '../images/MapsDHAMultan/SECTOR G.png';
import sectorH from '../images/MapsDHAMultan/SECTOR H.png';
import sectorI from '../images/MapsDHAMultan/SECTOR I.png';
// import sectorJ from '../images/MapsDHAMultan/SECTOR J.png';
import sectorK from '../images/MapsDHAMultan/SECTOR K.png';
import sectorL from '../images/MapsDHAMultan/SECTOR L.png';
import sectorM from '../images/MapsDHAMultan/SECTOR M.png';
import sectorN from '../images/MapsDHAMultan/SECTOR N.png';
import sectorO from '../images/MapsDHAMultan/SECTOR O.png';
import sectorP from '../images/MapsDHAMultan/SECTOR P.png';
import sectorQ from '../images/MapsDHAMultan/SECTOR Q.png';
// import sectorR from '../images/MapsDHAMultan/SECTOR R.png';
import sectorS from '../images/MapsDHAMultan/SECTOR S.png';
import sectorT from '../images/MapsDHAMultan/SECTOR T.png';
import sectorU from '../images/MapsDHAMultan/SECTOR U.png';
import sectorV from '../images/MapsDHAMultan/SECTOR V.png';
// import sectorW from '../images/MapsDHAMultan/SECTOR W.png';
import sectorW1 from '../images/MapsDHAMultan/SECTOR W1.png';
import sectorW2 from '../images/MapsDHAMultan/SECTOR W2.png';
import sectorX from '../images/MapsDHAMultan/SECTOR X.png';
import sectorY from '../images/MapsDHAMultan/SECTOR Y.png';
// import sectorZ from '../images/MapsDHAMultan/SECTOR Z.png';

const DhaMaps = () => {
  const [selectedMap, setSelectedMap] = useState(null);
  const [zoomEnabled, setZoomEnabled] = useState(false);
  const zoomScale = 1.5;

  // Simplified map data using just one image reference
  const dhaMaps = [
    { id: 1, title: 'Central Business Square', image: centralBS },
    { id: 1, title: 'RUMANZA', image: rumanza },
    { id: 2, title: 'Sector A', image: 'https://bzca-my.sharepoint.com/personal/datasource_fincountant_com/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fdatasource%5Ffincountant%5Fcom%2FDocuments%2FWebsite%20Revamp%20work%2FMAPS%20DHA%20MULTAN%2FSECTOR%20A%2Epng&parent=%2Fpersonal%2Fdatasource%5Ffincountant%5Fcom%2FDocuments%2FWebsite%20Revamp%20work%2FMAPS%20DHA%20MULTAN&ga=1' },
    { id: 3, title: 'Sector B-1', image: sectorB1 },
    // { id: 4, title:  'Sector C', image: sectorC},
    { id: 5, title:  'Sector D', image: sectorD},
    { id: 6, title:  'Sector E', image: sectorE},
    { id: 6, title:  'Sector E1 & E2', image: sectorE1n2},
    { id: 7, title:  'Sector F', image: sectorF},
    { id: 8, title:  'Sector G', image: sectorG},
    { id: 9, title:  'Sector H', image: sectorH},
    { id: 10, title: 'Sector I', image:sectorI },
    // { id: 11, title: 'Sector J', image:sectorJ },
    { id: 12, title: 'Sector K', image:sectorK },
    { id: 13, title: 'Sector L', image:sectorL },
    { id: 14, title: 'Sector M', image:sectorM },
    { id: 15, title: 'Sector N', image:sectorN },
    { id: 16, title: 'Sector O', image:sectorO },
    { id: 17, title: 'Sector P', image:sectorP },
    { id: 18, title: 'Sector Q', image:sectorQ },
    // { id: 19, title: 'Sector R', image:sectorR },
    { id: 20, title: 'Sector S', image:sectorS },
    { id: 21, title: 'Sector T', image:sectorT },
    { id: 22, title: 'Sector U', image:sectorU },
    { id: 23, title: 'Sector V', image:sectorV },
    // { id: 24, title: 'Sector W', image:sectorW },
    { id: 24, title: 'Sector W1', image:sectorW1 },
    { id: 24, title: 'Sector W2', image:sectorW2 },
    { id: 25, title: 'Sector X', image:sectorX },
    { id: 26, title: 'Sector Y', image:sectorY },
    // { id: 27, title: 'Sector Z ', image:sectorZ }
  ];

  const handleMapClick = (map) => {
    setSelectedMap(map);
    setZoomEnabled(false);
  };

  const closeModal = () => {
    setSelectedMap(null);
  };

  const toggleZoom = () => {
    setZoomEnabled(!zoomEnabled);
  };

  const getModalDimensions = () => {
    const width = Math.min(window.innerWidth * 0.9, 1200);
    const height = Math.min(window.innerHeight * 0.8, 800);
    return { width, height };
  };

  const modalDimensions = getModalDimensions();

  const zoomProps = {
    width: modalDimensions.width - 40,
    height: modalDimensions.height - 100,
    img: selectedMap?.image,
    zoomWidth: modalDimensions.width - 40,
    scale: zoomScale,
    zoomStyle: 'opacity: 1; z-index: 1000;',
    zoomLensStyle: 'opacity: 0.5;',
    zoomPosition: 'original',
  };

  return (
    <section>
      <PageTitle title="DHA Multan" highlight="Maps" />
      <Container className="dha-maps-container mt-4">
        <Row>
          {dhaMaps.map((map) => (
            <Col xs={12} md={4} className='mb-4' key={map.id} onClick={() => handleMapClick(map)} data-aos="fade-up" data-aos-delay="200">
              <Card>
                <Card.Img variant="top" src={map.image} alt={map.title} />
                <Card.Body>
                  <Card.Title>{map.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        {selectedMap && (
          <div className="map-modal" onClick={closeModal}>
            <div 
              className="modal-content" 
              onClick={(e) => e.stopPropagation()}
              style={{
                width: `${modalDimensions.width}px`,
                height: `${modalDimensions.height}px`
              }}
            >
              <span className="close-button" onClick={closeModal}>&times;</span>
              <div className="zoom-controls">
                <button onClick={toggleZoom} className="zoom-toggle">
                  {zoomEnabled ? 'Disable Zoom' : 'Enable Zoom'}
                </button>
              </div>
              <div className="image-container">
                {zoomEnabled ? (
                  <div className="zoom-wrapper">
                    <ReactImageZoom {...zoomProps} />
                  </div>
                ) : (
                  <img 
                    src={selectedMap.image} 
                    alt={selectedMap.title} 
                    style={{
                      maxWidth: '100%',
                      maxHeight: 'calc(100% - 60px)',
                      objectFit: 'contain'
                    }}
                  />
                )}
              </div>
              <h2>{selectedMap.title}</h2>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default DhaMaps;