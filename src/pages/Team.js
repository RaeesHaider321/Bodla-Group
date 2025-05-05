import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
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
    idescription: "'Together with DHA Multan, we grow. From land to landmarks, from homes to high-rises — we're committed to shaping every step of Multan’s progress.'",
    description: "Driven by passion for our land and commitment to sustainability, we’re proud to lead the way in DHA Multan’s growth, rising above challenges to ensure a smooth journey for all our stakeholders—from investors to the Multan community. With a team of experts and our distinctive culture, we are dedicated to pioneering transformative projects that will shape the future of Multan for generations ahead.",
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
    idescription: "'We align our vision with the aspirations of our clients and investors and it is the actual synergy that drives our legacy of excellence'",
    description: "Bodla Group's journey, from its inception as Bodla Builders to a trusted industry name defines our commitment to delivering excellence and upholding our values. Focused on DHA Multan, we have built a reputation for quality and innovation, driven by the unshakable trust of our clients and investors. This trust inspires us to redefine real estate standards and create impactful opportunities.",
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
    name: "Huzaifa Ahmed Bodla",
    designation: "Project Director – One Destination",
    description: "This is the first director.",
    image: HuzaifaBodla
  },
  {
    id: 3,
    name: "Ali Ashraf Bodla",
    designation: "Director Construction – Bodla Group",
    description: "This is the third director.",
    image: AliAshrafBodla
  },
  {
    id: 4,
    name: "Hanzala Ahmed Bodla",
    designation: "Director Procurement – Bodla Group",
    description: "This is the third director.",
    image: Hanzala
  },
  {
    id: 5,
    name: "Aftab Bodla",
    designation: "Director Sales - BBRD",
    description: "This is the third director.",
    image: AftabBodla
  },
  {
    id: 6,
    name: "Hassan Bodla",
    designation: "Director Sales – BBRD",
    description: "This is the third director.",
    image: Hassan
  },
  {
    id: 7,
    name: "Asim Sabeeh Bodla",
    designation: "Director Admin – Bodla Group",
    description: "This is the third director.",
    image: AsimSabeeh
  },
  {
    id: 8,
    name: "Awais Bodla",
    designation: "Director IT – Bodla Group",
    description: "This is the third director.",
    image: AwaisBodla
  },
  {
    id: 9,
    name: "Waqar Zafar",
    designation: "Director Land Acquisition – Bodla Group",
    description: "This is the third director.",
    image: WaqarBodla
  }
];

const Team = () => {
  
  return (
    <>
      <PageTitle title="Meet your trusted team of " highlight="Passionate Professionals" />
    <section className='team'>
      <Container>
        <Card className='chairman-card' data-aos="fade-up">
          <Row className='justify-content-center align-items-center'>
            <Col xs={12} md={6}>
              <Card.Img src={chairman} />
            </Col>
            <Col xs={12} md={6}>
              <Card.Body>
                <h1 data-aos="fade-left">LT. COL TAHIR IQBAL BODLA</h1>
                <p className='designation' data-aos="fade-left">Chairman</p>
                <h5 data-aos="fade-left" data-aos-delay="150">CHAIRMAN'S MESSAGE</h5>
                <Card.Text data-aos="fade-up" >
                <i> ‘When we construct a building, it’s never just for today or tomorrow—we are building a legacy for at least 100 years. We thoughtfully design every element to ensure enduring comfort and convenience for generations to come.’</i>
                </Card.Text>
                <Card.Text data-aos="fade-up">
                Rooted in the belief ‘We grow as DHA grows,’ we aligned with DHA Multan, the most secure housing community, and our exceptional team of dealers, contractors & engineers. With future-focused designs, expert project management, and uncompromising quality, we deliver projects that are Tangible, Sustainable, & Real, always prioritizing the trust and investment of our valued customers.
                 </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
        <section data-aos="fade-up" >
          <Row>
            {bosses.map((boss, index) => (
              <Col key={boss.id} xs={12} md={6} className='mb-4'>
                <div data-aos="fade-up">
                  <Card>
                    <Card.Img variant="top" src={boss.image} data-aos="zoom-in" />
                    <Card.Body>
                      <Row>
                        <Col className='mb-2'>
                          <Card.Title>{boss.name}</Card.Title>
                          <Card.Text className='designation'>{boss.designation}</Card.Text>
                        </Col>
                        {/* <Col className='mb-2 d-flex justify-content-end'>
                          <div className="d-flex team-social social">
                            <a className='social-icon text-dark mx-1' href={boss.social.facebook} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                            <a className='social-icon text-dark mx-1' href={boss.social.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                            <a className='social-icon text-dark mx-1' href={boss.social.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                          </div>
                        </Col> */}
                      </Row>
                      <Card.Text><i>{boss.idescription}</i></Card.Text>
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
              <div data-aos="fade-up">
                <Card>
                  <Card.Img variant="top" src={director.image} />
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
    </>
  );
};

export default Team;