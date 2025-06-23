import React from 'react';
import { Container, Image, Row, Col, Card } from 'react-bootstrap';
import PageTitle from '../components/PageTitle';
import Reit from '../components/Reit';

// Collaboration images
import dhaBodla from '../images/CollaborationWithDHA.png';
import bodlaLogo from '../images/footer-logo.png';

// Project gallery images
import oneD from '../images/oneD.jpg';
import bHomes from '../images/bHomes.jpg';
import oneDestin from '../images/oneDestin.jpg';

// Creations data images
import oneDes from '../images/oneDes.png';
import bhomes from '../images/bHomes.png';
import bhub from '../images/bhub.png';
import gvr from '../images/gvr.png';

// Expanded data images
import BBENGG from '../images/footstepsBBENGG&Construction.png';
import BBRD from '../images/footstepsBBRD.png';
import BodlaBuildersPVT from '../images/footstepsBodlaBuildersPVT.png';
import bRMCIC from '../images/footstepsBodlaRMCInvestmentConsortium.png';
import Mayamar from '../images/footstepsMayamar.png';
import Merkez from '../images/footstepsMerkez.png';
import TimelineSection from '../components/TimelineSection';

const creationsData = [
  { logo: bhub, title: 'Business Hub', year: '2021' },
  { logo: oneDes, title: 'One Destination', year: '2024' },
  { logo: gvr, title: 'Golf View Rumanza', year: '2022' },
  { logo: bhomes, title: 'Bodla Homes', year: '2021 & 2023' }
];

const expandedData = [
  { logo: BBENGG, title: 'Bodla Builders Engineers & Constructions' },
  { logo: BodlaBuildersPVT, title: 'Bodla Builders Pvt. Limited' },
  { logo: Mayamar, title: 'Maymar Construction Supplies' },
  { logo: Merkez, title: 'Merkez Pvt. Limited Project Marketing' },
  { logo: BBRD, title: 'Bodla Builders Realtors & Developers' },
  { logo: bRMCIC, title: 'Bodla RMC Investment Consortium' },
];

const About = () => {
  return (
    <>
      <div className='bodlaKahani' data-aos="fade-up" data-aos-duration="1300">
      <iframe src="https://www.youtube.com/embed/EGFIxjzM8nc?autoplay=1&mute=1&loop=1&playlist=EGFIxjzM8nc" title="Bodla Kahani" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <section className='bodlaSince py-5'>
        <Container>
          <Row className='justify-content-center'>
            <Col xs={12} md={12} data-aos="fade-up" data-aos-delay="100">
              <h2>The Story of Excellence and Prestige <span>Began in 2014</span></h2>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row className='justify-content-center'>
            <Col xs={12} sm={12} md={10}>
              <Row className='justify-content-center align-items-center g-4'>
                <Col xs={12} md={6} className='dhaBodla' data-aos="fade-right" data-aos-delay="300">
                <Image src={dhaBodla} alt='Bodla Builders collaboration with DHA' className='img-fluid' />
                </Col>
                <Col xs={12} md={6} data-aos="fade-right">
                <h2>In Strong Alliance with  <span>DHA Multan Passage</span></h2>
                <p className="text-justify">Bodla Group has significantly contributed to DHA Multan's growth by identifying the opportunity early on and stepping in as a dedicated construction partner for DHA Villas and Askari Villas. Beyond residential units, Bodla Group also developed the surrounding road infrastructure, ensuring hassle-free connectivity and adding long-term value to the area. Demonstrating a forward-thinking approach, the group pioneered the suggestion and sale of affordable Affidavit Files, addressing rising demand and enhancing property accessibility. With over 800 acres developed and a record volume of property transactions, Bodla Group has earned industry recognition and solidified its position as a trusted leader in DHA Multan's development. Today, with five iconic projects in DHA Multan, the Group stands with a strong and strategic footing in the region’s real estate landscape.</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='d-none'>
        <Container>
          <Row>
            <Col>
              <Card className='bodlaExcellence' data-aos="fade-up" data-aos-delay="300">
                <Card.Body>
                  <Row className='align-items-center g-4'>
                    <Col xs={12} md={6} data-aos="fade-right" data-aos-delay="400">
                      <div className='logoImage mb-3'>
                        <Image src={bodlaLogo} alt='Bodla Builders logo' className='img-fluid' />
                      </div>
                      <h6>Through sheer perseverance and demonstrated excellence, the company went on ahead in the world of construction industry beginning with DHA Villas, Askari Villas and Road Development. Our pioneering spirit infrastructure development came forward with the launch of the Business Hub, DHA Multan's first mega mall, marking a turning point in our journey from construction excellence to shaping the city's development.</h6>
                    </Col>
                    <Col xs={12} md={6} className='projectGallery' >
                      <Row className='g-3'>
                       <Col xs={12} md={6} className='oneD'>
                          <Image src={oneD} alt='One Destination project' />
                        </Col>
                         <Col xs={12} md={6}>
                          <Image className='mb-3 w-100' src={bHomes} alt='Bodla Homes project' />
                          <Image src={oneDestin} alt='One Destination project' className='w-100' />
                        </Col>
                      </Row>
                    </Col>
                  </Row> 
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <PageTitle title="Our portfolio of eminent projects that" highlight="redefines excellence" data-aos="fade-up" />
          <Row className='justify-content-center creationsJourney mt-4'>
            <Col xs={12} data-aos="fade-up" data-aos-delay="300">
              <Row className='g-4'>
                {creationsData.map((item, index) => (
                  <Col xs={12} md={6} lg={3} key={index}
                    data-aos="zoom-in"
                    data-aos-delay={100 * index}>
                    <Card className='h-100'>
                      <div className='image p-3'>
                        <Card.Img variant="top" src={item.logo} alt={`${item.title} logo`} className='img-fluid' />
                      </div>
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.year}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>


      <section className='py-5'>
        <Container className='text-center'>
          <Row className='justify-content-center mb-5'>
            <Col xs={12} md={9} data-aos="fade-up" data-aos-delay="200">
              <h2>Our Group of Companies </h2>
              <p>The Entrepreneurial Footsteps of Bodla Group</p>
            </Col>
          </Row>
          <Row className='expanded g-4'>
            {expandedData.map((item, index) => (
              <Col xs={6} md={4} lg={2} key={index}
                data-aos="fade-up"
                data-aos-delay={150 * index}>
                <Image src={item.logo} alt={`${item.title} logo`} className='img-fluid mb-3' />
                <p>{item.title}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className='deepSensitivity'>
        <Container>
          <Row>
            <Col>
              <Card body className='text-center' data-aos="zoom-in" data-aos-delay="300">
                <h2>Bodla Group: Reimagining the Idea of <span>Urban Living</span></h2>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <TimelineSection />
      </section>
      
      {/* <section className='reit'>
        <Reit/>
      </section> */}
    </>
  );
};

export default About;