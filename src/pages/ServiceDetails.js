import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, Card, ListGroup, Accordion } from 'react-bootstrap';
import Icons from "../components/Icon";
import BodlaButton from '../components/Button';
import NotFound from '../pages/NotFound'

import service1 from '../images/businessHub.jpg';
import service2 from '../images/businessHub.jpg';
import service3 from '../images/businessHub.jpg';
import service4 from '../images/businessHub.jpg';
import serviceDetail1 from '../images/businessHub.jpg';
import serviceDetail2 from '../images/businessHub.jpg';
import serviceDetail3 from '../images/businessHub.jpg';

// Sample service details data
const serviceDetails = {
  'property-development': {
    id: 1,
    title: 'Property Development',
    description: 'Our comprehensive property development services cover every aspect from land acquisition to project completion. We combine innovative design with practical solutions to create properties that stand the test of time.',
    longDescription: 'At Bodla Group, we take pride in our end-to-end property development services that transform visions into reality. Our team of experts handles everything from initial feasibility studies and land acquisition to architectural design, planning permissions, and construction management. We work closely with clients to understand their needs and deliver developments that exceed expectations while maintaining strict quality standards and timelines.',
    image: service1,
    secondaryImages: [serviceDetail1, serviceDetail2, serviceDetail3],
    features: [
      'Land acquisition and feasibility analysis',
      'Architectural design and master planning',
      'Project management and coordination',
      'Regulatory compliance and approvals',
      'Quality control and assurance',
      'Handover and aftercare services'
    ],
    process: [
      { title: 'Consultation', description: 'Understanding client requirements and project scope' },
      { title: 'Feasibility Study', description: 'Market research and financial analysis' },
      { title: 'Design Phase', description: 'Architectural and engineering designs' },
      { title: 'Approvals', description: 'Securing necessary permits and approvals' },
      { title: 'Construction', description: 'Quality construction with regular progress updates' },
      { title: 'Handover', description: 'Final inspection and property delivery' }
    ],
    benefits: [
      'End-to-end solution from a single provider',
      'Expertise in local regulations and market conditions',
      'Proven track record of successful developments',
      'Transparent processes and regular communication',
      'Commitment to sustainable development practices'
    ]
  },
  'construction-services': {
    id: 2,
    title: 'Construction Services',
    description: 'High-quality construction services with a focus on durability, aesthetics, and timely project delivery. We build structures that last.',
    longDescription: 'Our construction services division brings together skilled professionals, quality materials, and modern techniques to deliver exceptional results. Whether residential, commercial, or mixed-use projects, we approach each construction with meticulous planning and attention to detail. Our construction methodology emphasizes quality control at every stage, ensuring that the final product meets both our high standards and client expectations.',
    image: service2,
    secondaryImages: [serviceDetail2, serviceDetail3, serviceDetail1],
    features: [
      'Residential and commercial construction',
      'Structural engineering solutions',
      'Quality material procurement',
      'Skilled workforce management',
      'Safety compliance',
      'Project timeline management'
    ],
    process: [
      { title: 'Site Preparation', description: 'Clearing and preparing the construction site' },
      { title: 'Foundation Work', description: 'Laying strong and durable foundations' },
      { title: 'Structural Framework', description: 'Building the structural skeleton' },
      { title: 'Enclosure', description: 'Walls, roof, and weatherproofing' },
      { title: 'Interior Work', description: 'Electrical, plumbing, and finishes' },
      { title: 'Final Inspection', description: 'Quality checks and handover' }
    ],
    benefits: [
      'Timely project completion',
      'Transparent pricing',
      'Regular progress reports',
      'Quality materials from trusted suppliers',
      'Comprehensive warranty'
    ]
  },
  'interior-design': {
    id: 3,
    title: 'Interior Design',
    description: 'Transform your spaces with our innovative interior design solutions that combine functionality with aesthetic appeal.',
    longDescription: 'Our interior design services create spaces that are not just beautiful but also functional and reflective of your personality or brand identity. We work with a careful selection of materials, colors, textures, and lighting to craft interiors that inspire. From conceptualization to final installation, our team guides you through every decision, ensuring the end result is a space you\'ll love.',
    image: service3,
    secondaryImages: [serviceDetail3, serviceDetail1, serviceDetail2],
    features: [
      'Residential and commercial interior design',
      'Space planning and optimization',
      'Custom furniture design',
      'Material and finish selection',
      'Lighting design',
      'Project management'
    ],
    process: [
      { title: 'Initial Consultation', description: 'Understanding your style and needs' },
      { title: 'Concept Development', description: 'Creating mood boards and concepts' },
      { title: 'Design Development', description: 'Detailed drawings and specifications' },
      { title: 'Material Selection', description: 'Choosing finishes, fixtures, and furnishings' },
      { title: 'Implementation', description: 'Overseeing the execution of the design' },
      { title: 'Final Styling', description: 'Adding the finishing touches' }
    ],
    benefits: [
      'Personalized design solutions',
      'Access to premium materials and furnishings',
      'Professional space planning',
      'Cohesive design language throughout your space',
      'Attention to detail in every element'
    ]
  },
  'property-management': {
    id: 4,
    title: 'Property Management',
    description: 'Professional property management services to maintain and enhance the value of your real estate investments.',
    longDescription: 'Our property management services take the hassle out of owning investment properties. We handle all aspects of property management, from tenant screening and lease administration to maintenance coordination and financial reporting. Our proactive approach ensures your property remains in excellent condition, tenants are satisfied, and your investment performs optimally.',
    image: service4,
    secondaryImages: [serviceDetail1, serviceDetail3, serviceDetail2],
    features: [
      'Tenant screening and placement',
      'Lease administration',
      'Rent collection',
      'Maintenance coordination',
      'Financial reporting',
      'Legal compliance'
    ],
    process: [
      { title: 'Property Assessment', description: 'Evaluating the property condition' },
      { title: 'Marketing', description: 'Advertising vacancies effectively' },
      { title: 'Tenant Placement', description: 'Screening and selecting qualified tenants' },
      { title: 'Lease Management', description: 'Handling all lease-related matters' },
      { title: 'Maintenance', description: 'Coordinating repairs and upkeep' },
      { title: 'Reporting', description: 'Providing regular financial statements' }
    ],
    benefits: [
      'Higher occupancy rates',
      'Timely rent collection',
      'Reduced maintenance costs',
      'Professional handling of tenant issues',
      'Regular property inspections',
      'Detailed financial records'
    ]
  }
};

const ServiceDetails = () => {
  const { serviceSlug } = useParams();
  const service = serviceDetails[serviceSlug];

  if (!service) {
    return <Container><NotFound/></Container>;
  }

  return (
    <>
      {/* Hero Section */}
      <div className="bg-dark text-white" style={{ padding: '100px 0', position: 'relative' }}>
        <Image
          src={service.image}
          alt={service.title}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.4
          }}
        />
        <Container style={{ position: 'relative', zIndex: 1 }}>
          <Row className="justify-content-center text-center">
            <Col xs={12} md={10} lg={8}>
              <h1 className="display-4 mb-4">{service.title}</h1>
              <p className="lead">{service.description}</p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Service Details Section */}
      <section className="py-5">
        <Container>
          <Row className="g-4">
            <Col xs={12} lg={8}>
              <h2 className="mb-4">About Our {service.title} Service</h2>
              <p className="mb-4">{service.longDescription}</p>
              
              <div className="mb-5">
                <h3 className="mb-4">Key Features</h3>
                <Row>
                  {service.features.map((feature, index) => (
                    <Col xs={12} md={6} key={index} className="mb-3">
                      <div className="d-flex align-items-start">
                        <Icons name="checkCircle" className="me-2 mt-1 text-primary" />
                        <span>{feature}</span>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>

              <div className="mb-5">
                <h3 className="mb-4">Our Process</h3>
                <Accordion defaultActiveKey="0" flush>
                  {service.process.map((step, index) => (
                    <Accordion.Item eventKey={index.toString()} key={index}>
                      <Accordion.Header>
                        <span className="me-2">{index + 1}.</span> {step.title}
                      </Accordion.Header>
                      <Accordion.Body>
                        {step.description}
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </div>
            </Col>

            <Col xs={12} lg={4}>
              <Card className="shadow-sm sticky-top" style={{ top: '20px' }}>
                <Card.Body>
                  <h4 className="mb-4">Service Benefits</h4>
                  <ListGroup variant="flush">
                    {service.benefits.map((benefit, index) => (
                      <ListGroup.Item key={index} className="d-flex align-items-start">
                        <Icons name="benefit" className="me-2 mt-1 text-primary" />
                        {benefit}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                  
                  <div className="mt-4">
                    <h5 className="mb-3">Get Started</h5>
                    <p className="small text-muted mb-3">
                      Ready to benefit from our {service.title} service? Contact us today to discuss your requirements.
                    </p>
                    <div className="d-grid gap-2">
                      <BodlaButton 
                        text="Request Consultation" 
                        icon={<Icons name="phone" />} 
                        variant="primary" 
                        link="/contact" 
                      />
                      <BodlaButton 
                        text="Download Brochure" 
                        icon={<Icons name="download" />} 
                        variant="outline-primary" 
                        link="#" 
                      />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Gallery Section */}
          <Row className="mt-5">
            <Col xs={12}>
              <h3 className="mb-4">Project Gallery</h3>
              <Row className="g-3">
                {service.secondaryImages.map((image, index) => (
                  <Col xs={12} md={6} lg={4} key={index}>
                    <Image 
                      src={image} 
                      alt={`${service.title} example ${index + 1}`} 
                      fluid 
                      className="rounded shadow-sm"
                      style={{ height: '250px', width: '100%', objectFit: 'cover' }}
                    />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>

          {/* Related Services */}
          <Row className="mt-5">
            <Col xs={12}>
              <h3 className="mb-4">Related Services</h3>
              <Row className="g-3">
                {Object.values(serviceDetails)
                  .filter(s => s.id !== service.id)
                  .slice(0, 3)
                  .map((relatedService) => (
                    <Col xs={12} md={4} key={relatedService.id}>
                      <Card className="h-100 shadow-sm">
                        <Card.Img 
                          variant="top" 
                          src={relatedService.image} 
                          alt={relatedService.title}
                          style={{ height: '180px', objectFit: 'cover' }}
                        />
                        <Card.Body>
                          <Card.Title>{relatedService.title}</Card.Title>
                          <Card.Text className="text-muted">
                            {relatedService.description.substring(0, 100)}...
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer className="bg-transparent border-0">
                          <BodlaButton 
                            text="Learn More" 
                            variant="outline-primary" 
                            size="sm" 
                            link={`/services/${relatedService.title.toLowerCase().replace(/\s+/g, '-')}`} 
                          />
                        </Card.Footer>
                      </Card>
                    </Col>
                  ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={8}>
              <h3>Ready to get started with our {service.title} service?</h3>
              <p className="mb-md-0">Contact us today to discuss your project requirements.</p>
            </Col>
            <Col xs={12} md={4} className="text-md-end">
              <BodlaButton 
                text="Contact Us Now" 
                icon={<Icons name="rightArrow" />} 
                variant="primary" 
                link="/contact" 
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ServiceDetails;