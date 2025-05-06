import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProductSlider.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import promotion1dPlan from '../images/promotion-1dPlan.webp';
import promotion1d2 from '../images/promotion-1d2.webp';
import promotion8marla2 from '../images/promotion-8marla2.webp';
import promotion8marla1 from '../images/promotion-8marla1.webp';




import Icons from "../components/Icon";

// Custom Next Arrow Component
const NextArrow = ({ onClick }) => (
    <div className="arrow next" onClick={onClick}>
        <Icons name="rightArrow" />
    </div>
);

// Custom Previous Arrow Component
const PrevArrow = ({ onClick }) => (
    <div className="arrow prev" onClick={onClick}>
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
        { id: 1, name: 'Instalment plan of your own choice.', image: promotion1dPlan, link: '/product/1' },
        { id: 2, name: 'Invest Smart with your Salary Cheque.', image: promotion1d2, link: '/product/2' },
        { id: 3, name: 'Unparalleled Living Experience.', image: promotion8marla2, link: '/product/3' },
        { id: 4, name: 'The Payment Plan of your choice.', image: promotion8marla1, link: '/product/4' },
        // { id: 5, name: 'Move-in-ready home with modern fittings and a great location.', image: promotion3, link: '/product/5' },
        // { id: 6, name: 'Exclusive property offering security, luxury, and world-class amenities.', image: promotion3, link: '/product/6' },
        // { id: 7, name: 'Perfect family home with parks, schools, and friendly surroundings.', image: promotion3, link: '/product/7' },
        // { id: 8, name: 'Elegant home combining comfort, style, and a peaceful environment.', image: promotion3, link: '/product/8' },
    ];

    return (
        <section data-aos="fade-up">
            <Container>
                <Row>
                    <Col>
                        <h2>Current <br/><span>Promotions</span></h2>
                        <p>Grab our premium offers first!</p>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
            <Slider {...settings}>
                {products.map((product, index) => (
                    <Link key={product.id} className="product-link"> 
                        <Card className="product-item h-100">
                            <Card.Img variant="top" src={product.image} alt={product.name} />
                            <Card.Body className='text-start'>
                                <Card.Text>{product.name}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                ))}
            </Slider>
            </Container>
        </section>
    );
};

export default ProductSlider;
