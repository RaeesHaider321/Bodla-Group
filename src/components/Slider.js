import { Carousel, Row, Col } from 'react-bootstrap';
import BookACallButton from './BookACallButton';
import Icons from "../components/Icon"; 
import oneDestination from '../images/oneDestination.jpg';
import bodlaHomes8Marla from '../images/bodlaHomes8Marla.jpg';
import bodlaHomes5Marla from '../images/bodlaHomes5.2Marla.jpg';
import businessHub from '../images/businessHub.jpg';
import golfViewRumanza from '../images/golfViewRumanza.jpg';
const carouselItems = [
  {
    id: 1,
    image: oneDestination,
    alt: "One Destination",
    titlePart1: "From dreams to blueprints, we envision",
    titlePart2: "the Extraordinary"
  },
  {
    id: 2,
    image: bodlaHomes8Marla,
    alt: "Bodla Home 8 Marla",
    titlePart1: "Step Into the Future of Family Living with",
    titlePart2: "Bodla Home 8 Marla"
  },
  {
    id: 3,
    image: bodlaHomes5Marla,
    alt: "Bodla Home 5.2 Marla",
    titlePart1: "The Perfect Space for Your Next Chapter",
    titlePart2: "Bodla Home 5.2 Marla"
  },
  {
    id: 4,
    image: businessHub,
    alt: "Business Hub",
    titlePart1: "Discover Your Next Opportunity at Our",
    titlePart2: "Business Hub"
  },
  {
    id: 5,
    image: golfViewRumanza,
    alt: "Golf View Rumanza",
    titlePart1: "Experience the Best of Golf Course Living at",
    titlePart2: "Golf View Rumanza"
  }
];
function NoTransitionExample() {
  return (
    <Carousel fade  className="custom-carousel">
      {carouselItems.map((item) => (
        <Carousel.Item key={item.id}>
          <img 
            className="d-block w-100 custom-img" 
            src={item.image} 
            alt={item.alt} 
          />
          <Carousel.Caption>
            <Row className="justify-content-center align-items-center">
              <Col xs={11} md={6}>
              <h1 data-aos="zoom-in">
                {item.titlePart1} <span>{item.titlePart2}</span>
              </h1>
              <BookACallButton 
                text="Book a Call" 
                icon={<Icons name="rightArrow" />} 
                link="/Contact"
              />
              </Col>
            </Row>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default NoTransitionExample;
