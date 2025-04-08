import React from 'react';
import { Container, Image, Row, Col, Card, CardBody } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import PageTitle from '../components/PageTitle';
import oneDestination from '../images/oneDestination.png'
import bodlaHomes from '../images/oneDestination.png'
import businessHub from '../images/oneDestination.png'
import multan from '../images/multan.jpg'
import dhaBodla from '../images/CollaborationWithDHA.png'
import cardImage from '../images/card-image.jpg'
import oneD from '../images/oneD.jpg'
import bHomes from '../images/bHomes.jpg'
import oneDestin from '../images/oneDestin.jpg'
import bodlaLogo from '../images/footer-logo.png'

import oneDes from '../images/oneDes.png'
import bhomes from '../images/bHomes.png'
import bhub from '../images/bhub.png'
import gvr from '../images/gvr.png'
import BBENGG from '../images/footstepsBBENGG&Construction.png'
import BBRD from '../images/footstepsBBRD.png'
import BodlaBuildersPVT from '../images/footstepsBodlaBuildersPVT.png'
import bD from '../images/footstepsBodlaDevelopers.png'
import bRMCIC from '../images/footstepsBodlaRMCInvestmentConsortium.png'
import Mayamar from '../images/footstepsMayamar.png'
import Merkez from '../images/footstepsMerkez.png'



const creationsData = [
  { logo: bhub, title: 'Business Hub', year: '2020' },
  { logo: oneDes, title: 'One Destination', year: '2021' },
  { logo: gvr, title: 'Golf View Rumanza', year: '2022' },
  { logo: bhomes, title: 'Bodla Homes', year: '2023' }
];
const expandedData = [
  { logo: BBENGG, title: 'Bodla Builders Engineers & Constructions' },
  { logo: BBRD, title: 'Bodla Builders Realtors & Developers' },
  { logo: BodlaBuildersPVT, title: 'Bodla Builders Pvt. Limited' },
  { logo: Mayamar, title: 'Maymar Construction Supplies' },
  { logo: Merkez, title: 'Merkez Pvt. Limited Project Marketing' },
  { logo: bRMCIC, title: 'Bodla RMC Investment Consortium' },
];
const About = () => {
  const carouselItems = [
    {
      image: multan,
      title: "Rooted in Multan's heritage, Bodla’s hard work and time collaborated to build lasting value",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      image: oneDestination,
      title: "One Destination – The Ultimate Business & Lifestyle Hub in DHA Multan.",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      image: bodlaHomes,
      title: "Bodla Homes – Trust, Quality, and Timeless Living Spaces.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      image: businessHub,
      title: "Where Deals Flow and Businesses Grow - Bodla Business Hub, DHA's Power Address",
      description: "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
    }
  ];


  return (
    <>
      <Carousel fade className='aboutCarousel' indicators={false} controls={false} interval={3000} pause={true}>
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index}>
            <Image src={item.image} />
            <Carousel.Caption>
              <h1 data-aos="fade-up" data-aos-delay="300">{item.title}</h1>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <section className='bodlaSince'>
        <Container>
          <Row className='justify-content-center'>
            <Col xs={12} md={9} data-aos="fade-up" data-aos-delay="200">
              <h4>With humble beginnings in Multan, Bodla Group’s long-standing journey commenced with a vision to be a driving force in the growth of Multan’s Real Estate in 2014. Filled with passion and commitment to upscale the investment and construction domain, Bodla Group steadily established itself as a trusted name in Multan's Real Estate Industry. </h4>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row className='justify-content-center'>
            <Col xs={12} md={10}>
              <Row className='justify-content-center align-items-center'>
                <Col xs={12} md={6} className='dhaBodla' data-aos="fade-right" data-aos-delay="300">
                  <Image src={dhaBodla} alt='Bodla Builders' />
                </Col>
                <Col xs={6} md={6} data-aos="fade-left" data-aos-delay="400">
                  <h1>Collaboration with <span>DHA Multan</span></h1>
                  <p className="text-justify">While redefining the living standards, the Bodla Group has consistently strived to push boundaries and successfully collaborated with DHA Multan right from the beginning. From our groundbreaking projects of 10-Marla cash files to the provision of over 800 acres of land to DHA Multan, Bodla Group stood as a testament of its spirit through every step of the way.</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col>
              <Card className='p-4' data-aos="fade-up" data-aos-delay="300">
                <CardBody>
                  <Row className='align-items-center'>
                    <Col data-aos="fade-right" data-aos-delay="400">
                      <div className='logoImage mb-3'>
                        <Image src={bodlaLogo} alt='Bodla Builders' />
                      </div>
                      <p>Through sheer perseverance and demonstrated excellence, the company went on ahead in the world of construction industry beginning with DHA Villas, Askari Villas and Road Development. Our pioneering spirit infrastructure development came forward with the launch of the Business Hub, DHA Multan's first mega mall, marking a turning point in our journey from construction excellence to shaping the city's development.</p>
                    </Col>
                    <Col className='projectGallery' data-aos="fade-left" data-aos-delay="400">
                      <Row>
                        <Col className='oneD'>
                          <Image src={oneD} alt='' />
                        </Col>
                        <Col>
                          <Image className='mb-3' src={bHomes} alt='' />
                          <Image src={oneDestin} alt='' />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <PageTitle title="Journey Through Our Creations, Where Every Detail" highlight="Matters" data-aos="fade-up" />
          <Row className='justify-content-center creationsJourney'>
            <Col xs={12} md={12}>
              <Row>
                {creationsData.map((item, index) => (
                  <Col xs={12} md={3} key={index} 
                    data-aos="zoom-in" 
                    data-aos-delay={100 * index}>
                    <Card>
                      <div className='image'><Card.Img variant="top" src={item.logo} /></div>
                      <Card.Body>
                        <Card.Text>{item.title}</Card.Text>
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

      <section className='reit'>
        <Container className='text-center'>
          <h3 data-aos="flip-up" data-aos-delay="300">REIT</h3>
        </Container>
      </section>

      <section>
        <Container className='text-center'>
          <Row className='justify-content-center'>
            <Col xs={12} md={9} data-aos="fade-up" data-aos-delay="200">
              <h1>Bodla Group expanded <br />its <span>entrepreneurial</span> footsteps</h1>
              <p>To capitalise its business strengths...</p>
            </Col>
          </Row>
          <Row className='expanded py-3'>
            {expandedData.map((item, index) => (
              <Col xs={12} md={2} key={index} 
                data-aos="fade-up" 
                data-aos-delay={150 * index}>
                <Image src={item.logo} />
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
              <Card body className='p-5 text-center' data-aos="zoom-in" data-aos-delay="300">
                <h1>With our deep sensitivity and passion for what is possible in <span>Multan's Real Estate Industry</span>, we ensure that every project, every land, and every investment yields lasting value</h1>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row className='justify-content-center cardImage'>
            <Col xs={6} md={10}>
              <Row className='align-items-center mb-4'>
                <Col xs={6} md={6} data-aos="fade-right" data-aos-delay="300">
                  <Image src={cardImage} alt='' />
                </Col>
                <Col xs={6} md={6} data-aos="fade-left" data-aos-delay="400">
                  <p>While redefining the living standards, the Bodla Group has consistently strived to push boundaries and successfully collaborated with DHA Multan right from the beginning. From our groundbreaking projects of 10-Marla cash files to the provision of over 800 acres of land to DHA Multan, Bodla Group stood as a testament of its spirit through every step of the way.</p>
                </Col>
              </Row>
              <Row className='align-items-center'>
                <Col xs={6} md={6} data-aos="fade-right" data-aos-delay="300">
                  <p>While redefining the living standards, the Bodla Group has consistently strived to push boundaries and successfully collaborated with DHA Multan right from the beginning. From our groundbreaking projects of 10-Marla cash files to the provision of over 800 acres of land to DHA Multan, Bodla Group stood as a testament of its spirit through every step of the way.</p>
                </Col>
                <Col xs={6} md={6} data-aos="fade-left" data-aos-delay="400">
                  <Image src={cardImage} alt='' />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;