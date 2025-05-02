import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import enegineering from '../images/4.webp';
import material from '../images/5.webp';
import quality from '../images/6.webp';
import PageTitle from './PageTitle';

export default function Reit() {
  return (
    <Container>
      <div className='text-center'>
        <PageTitle title='' highlight='' caption=''/>
      </div>
      <Row className='gy-3'>
        <Col xs={12} sm={12} md={3} className="sing-box-main" data-aos="fade-up">
          <div className="singature-box radius">
            <div className="signature-thumb">
              <Image 
                fluid 
                className="img-100 radium" 
                src={enegineering} 
                alt="Engineering" 
              />
            </div>
            <div className="sign-content-sec">
              <div className="sign-title">
                <h4 className="italic sign-title">Engineering</h4>
              </div>
              <div className="signature-box-content">
                <p>Every home that we make, comes with a stamp of Sobha. And to achieve this, we have dedicated an in-house team of highly skilled engineers and technicians. From laying the foundation and formwork to adding finesse at every step, everything we build holds true to our promise.</p>
              </div>
            </div>
          </div>
        </Col>

        <Col xs={12} sm={12} md={3} className="sing-box-main" data-aos="fade-up">
          <div className="singature-box radius">
            <div className="signature-thumb">
              <Image 
                fluid 
                className="img-100 radium" 
                src={material} 
                alt="Material Sourcing" 
              />
            </div>
            <div className="sign-content-sec">
              <div className="sign-title">
                <h4 className="italic sign-title">Material Sourcing</h4>
              </div>
              <div className="signature-box-content">
                <p>At Sobha, we strive to give you the best in the world. For that reason, we take account of bringing together the best materials from across the globe. In addition to this, our in-house manufacturing helps us achieve the highest quality standards at an optimal cost, ensuring accelerated turnover.</p>
              </div>
            </div>
          </div>
        </Col>

        <Col xs={12} sm={12} md={3} className="sing-box-main" data-aos="fade-up">
          <div className="singature-box radius">
            <div className="signature-thumb">
              <Image 
                fluid 
                className="img-100 radium" 
                src={quality} 
                alt="Quality Control" 
              />
            </div>
            <div className="sign-content-sec">
              <div className="sign-title">
                <h4 className="italic sign-title">Quality Control</h4>
              </div>
              <div className="signature-box-content">
                <p>'Quality' surpasses everything and anything for us at Sobha, to the extent that we have an autonomous quality control cell reporting directly the Group Chairman.</p>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={3} className="sing-box-main" data-aos="fade-up">
          <div className="singature-box radius">
            <div className="signature-thumb">
              <Image 
                fluid 
                className="img-100 radium" 
                src={quality} 
                alt="Quality Control" 
              />
            </div>
            <div className="sign-content-sec">
              <div className="sign-title">
                <h4 className="italic sign-title">Quality Control</h4>
              </div>
              <div className="signature-box-content">
                <p>'Quality' surpasses everything and anything for us at Sobha, to the extent that we have an autonomous quality control cell reporting directly the Group Chairman.</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}