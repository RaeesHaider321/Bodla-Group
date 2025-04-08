import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import NewsSubscription from '../components/NewsSubscription';
import chairman from '../images/team/TahirIqbalBodla-Chairman.jpg';
import ceo from '../images/team/sohaibTariqBodla-CEO.jpg';
import md from '../images/team/junaidTariqBodla-MD.jpg';
import AftabBodla from '../images/team/AftabBodla.jpg';
import AliAshrafBodla from '../images/team/AliAshrafBodla.jpg';
import Hanzala from '../images/team/HanzalaAhmedBodla.jpg';
import HuzaifaBodla from '../images/team/HuzaifaBodla.jpg';
import Hassan from '../images/team/HassanBodla.jpg';
import AsimSabeeh from '../images/team/AsimBodla.jpg';
import AwaisBodla from '../images/team/AwaisBodla.jpg';
import WaqarBodla from '../images/team/WaqarBodla.jpg';
import PageTitle from '../components/PageTitle';

const bosses = [
  {
    id: 1,
    name: "Sohaib Tariq Bodla",
    designation: "Chief Executive Officer",
    description: "Our organization is built on a foundation of integrity, transparency, and professionalism. We believe in going above and beyond to ensure that our customers are satisfied with their investment. From the initial consultation to the final handover, we work closely with our customers to understand their needs.",
    image: ceo,
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    id: 2,
    name: "Junaid Tariq Bodla",
    designation: "Managing Director",
    description: "Our organization is built on a foundation of integrity, transparency, and professionalism. We believe in going above and beyond to ensure that our customers are satisfied with their investment. From the initial consultation to the final handover, we work closely with our customers to understand their needs.",
    image: md,
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
];

const directors = [
  {
    id: 1,
    name: "Huzaifa Ahmed",
    designation: "Director Construction",
    description: "This is the first director.",
    image: HuzaifaBodla
  },
  {
    id: 3,
    name: "Ali Ashraf Bodla",
    designation: "Director Construction",
    description: "This is the third director.",
    image: AliAshrafBodla
  },
  {
    id: 4,
    name: "Hanzala Ahmed",
    designation: "Interior Works Controller",
    description: "This is the third director.",
    image: Hanzala
  },
  {
    id: 5,
    name: "Aftab Bodla",
    designation: "Realtor",
    description: "This is the third director.",
    image: AftabBodla
  },
  {
    id: 6,
    name: "Hassan Bodla",
    designation: "Realtor",
    description: "This is the third director.",
    image: Hassan
  },
  {
    id: 7,
    name: "Asim Sabeeh Bodla",
    designation: "Director Admin",
    description: "This is the third director.",
    image: AsimSabeeh
  },
  {
    id: 8,
    name: "Awais Bodla",
    designation: "Director IT",
    description: "This is the third director.",
    image: AwaisBodla
  },
  {
    id: 9,
    name: "Waqar Zafar",
    designation: "Land Acquisition Manager",
    description: "This is the third director.",
    image: WaqarBodla
  }
];

const Team = () => {
  
  return (
    <section className='team'>
      <Container>
        <div data-aos="fade-up">
          <PageTitle title="Your Trusted Team of" highlight="Real Estate Professionals" />
        </div>
        
        <Card className='chairman-card' data-aos="fade-up" data-aos-delay="100">
          <Row className='justify-content-center align-items-center'>
            <Col xs={12} md={6}>
              <Card.Img src={chairman} />
            </Col>
            <Col xs={12} md={6}>
              <Card.Body>
                <h1 data-aos="fade-left">TAHIR IQBAL BODLA</h1>
                <p className='designation' data-aos="fade-left" data-aos-delay="100">Chairman</p>
                <h5 data-aos="fade-left" data-aos-delay="150">CHAIRMAN'S MESSAGE</h5>
                <Card.Text data-aos="fade-up" data-aos-delay="200">
                  Our commitment to quality, innovation, and sustainability has been the cornerstone of our success, and we remain dedicated to these values. We have always believed in creating a lasting legacy by delivering exceptional projects that stand the test of time. Our team of experts works tirelessly to ensure that we meet and exceed our clients' expectations, and we strive to remain at the forefront of the latest technologies and techniques.
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
        
        <section data-aos="fade-up" >
          <Row>
            {bosses.map((boss, index) => (
              <Col key={boss.id} xs={12} md={6} className='mb-4'>
                <div data-aos="fade-up" data-aos-delay={index * 100}>
                  <Card>
                    <Card.Img variant="top" src={boss.image} data-aos="zoom-in" />
                    <Card.Body>
                      <Row>
                        <Col className='mb-2'>
                          <Card.Title>{boss.name}</Card.Title>
                          <Card.Text className='designation'>{boss.designation}</Card.Text>
                        </Col>
                        <Col className='mb-2 d-flex justify-content-end'>
                          <div className="d-flex team-social social">
                            <a className='social-icon text-dark mx-1' href={boss.social.facebook} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                            <a className='social-icon text-dark mx-1' href={boss.social.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                            {/* <a className='social-icon text-dark mx-1' href={boss.social.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a> */}
                            <a className='social-icon text-dark mx-1' href={boss.social.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                          </div>
                        </Col>
                      </Row>
                      <Card.Text>{boss.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </section>
        
        <Row className='justify-content-center'>
          {directors.map((director, index) => (
            <Col key={director.id} xs={12} md={4} className='mb-4'>
              <div data-aos="fade-up" data-aos-delay={(index % 3) * 100}>
                <Card>
                  <Card.Img variant="top" src={director.image} data-aos="zoom-in" />
                  <Card.Body className='text-center'>
                    <Card.Title>{director.name}</Card.Title>
                    <Card.Text className='designation'>{director.designation}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
        
        <div data-aos="fade-up">
          <NewsSubscription />
        </div>
      </Container>
    </section>
  );
};

export default Team;