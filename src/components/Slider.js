import { Carousel } from 'react-bootstrap';
import BodlaButton from './Button';
import Icons from "../components/Icon"; 
import firstImage from '../images/oneDestination.png';
import secondImage from '../images/oneDestination.png';
import thirdImage from '../images/oneDestination.png';

function NoTransitionExample() {
  return (
    <Carousel slide={false} className="custom-carousel">
      <Carousel.Item>
        <img className="d-block w-100 custom-img" src={firstImage} alt="First slide" />
        <Carousel.Caption>
          <div>
            <h1 data-aos="zoom-in">Slide 1 From dreams to blueprints, we envision <span>the Extraordinary</span></h1>
            <BodlaButton text="Sign Up" icon={<Icons name="rightArrow" />} variant="primary" link="/Register"  />
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 custom-img" src={secondImage} alt="Second slide" />
        <Carousel.Caption>
          <div>
            <h1 data-aos="zoom-in">Slide 2 From dreams to blueprints, we envision <span>the Extraordinary</span></h1>
            <BodlaButton text="Sign Up" icon={<Icons name="rightArrow" />} variant="primary" link="/Register"  />
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 custom-img" src={thirdImage} alt="Third slide" />
        <Carousel.Caption>
          <div>
            <h1 data-aos="zoom-in">Slide 3 From dreams to blueprints, we envision <span>the Extraordinary</span></h1>
            <BodlaButton text="Sign Up" icon={<Icons name="rightArrow" />} variant="primary" link="/Register"  />
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default NoTransitionExample;
