import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProductSlider.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import promotion1 from '../images/promotion-1.jpg';
import promotion2 from '../images/promotion-2.jpg';
import promotion3 from '../images/promotion-3.jpg';
import promotion4 from '../images/promotion-4.jpg';
import Icons from "../components/Icon";

// Custom Next Arrow Component
const NextArrow = ({ onClick }) => (
    <div className="arrow next" onClick={onClick} data-aos="fade-left" data-aos-delay="300">
        <Icons name="rightArrow" />
    </div>
);

// Custom Previous Arrow Component
const PrevArrow = ({ onClick }) => (
    <div className="arrow prev" onClick={onClick} data-aos="fade-right" data-aos-delay="300">
        <Icons name="leftArrow" />
    </div>
);

const ProductSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />, 
        prevArrow: <PrevArrow />, 
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true, dots: true },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2, slidesToScroll: 1, initialSlide: 2 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1, slidesToScroll: 1 },
            },
        ],
    };

    const products = [
        { id: 1, name: 'Luxury home with modern amenities, spacious interiors, and stunning views.', image: promotion1, link: '/product/1' },
        { id: 2, name: 'Dream home featuring elegant design, top amenities, and prime location.', image: promotion2, link: '/product/2' },
        { id: 3, name: 'High-ROI investment property in a thriving, well-connected neighborhood.', image: promotion3, link: '/product/3' },
        { id: 4, name: 'Affordable, stylish home with spacious rooms and excellent surroundings.', image: promotion4, link: '/product/4' },
        { id: 5, name: 'Move-in-ready home with modern fittings and a great location.', image: promotion3, link: '/product/5' },
        { id: 6, name: 'Exclusive property offering security, luxury, and world-class amenities.', image: promotion3, link: '/product/6' },
        { id: 7, name: 'Perfect family home with parks, schools, and friendly surroundings.', image: promotion3, link: '/product/7' },
        { id: 8, name: 'Elegant home combining comfort, style, and a peaceful environment.', image: promotion3, link: '/product/8' },
    ];

    return (
        <section data-aos="fade-up">
            <Container>
                <Row>
                    <Col data-aos="fade-up" data-aos-delay="200">
                        <h2>Current <br/><span>Promotions</span></h2>
                    </Col>
                </Row>
            </Container>
            <Slider {...settings}>
                {products.map((product, index) => (
                    <Link to={product.link} key={product.id} className="product-link"> 
                        <Card className="product-item" data-aos="zoom-in" data-aos-delay={`${index * 150 + 200}`}>
                            <Card.Img variant="top" src={product.image} alt={product.name} />
                            <Card.Body className='text-start'>
                                <Card.Text>{product.name}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                ))}
            </Slider>
        </section>
    );
};

export default ProductSlider;
