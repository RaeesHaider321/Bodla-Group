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
import promotionMaym3 from '../images/promotionMaym3.jpg';
import promotionQatar from '../images/promotionQatar.png';
import promotionWaiverCharges1 from '../images/promotionWaiverCharges1.png';
import promotionWaiverCharges2 from '../images/promotionWaiverCharges2.png';
import promotionNewsFlash17July from '../images/promotionNewsFlash17July.jpg';




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
        { id: 5, name: 'Your Home build by DHA Multan.', image: promotionMaym3, link: '/product/5' },
        // { id: 6, name: 'Bodla Group is coming to Qatar!', image: promotionQatar, link: '/product/6' },
        { id: 7, name: 'Big News for DHA Multan Holders!', image: promotionWaiverCharges1, link: '/product/7' },
        { id: 8, name: '50% Waiver – Occupy Your Home Now!', image: promotionWaiverCharges2, link: '/product/8' },
        { id: 8, name: 'DHA Multan Offers Big Savings!', image: promotionNewsFlash17July, link: '/product/8' },
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
