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
  'land-acquisition': {
    id: 1,
    title: 'Land Acquisition',
    caption: 'Precise Location Procurement    –     Investor Centric Approach     –     Growth Driven Potential',
    cta:'Begin Acquisition Plan',
    description: "With a keen eye for potential growth, we navigate complex real estate landscapes to identify and secure prime land opportunities. Our approach ensures that each acquisition not only meets current market demands but also aligns smoothly with investors' long-term vision and strategic investment goals. By blending insight, experience, and foresight, we lay the foundation for developments that succeed well into the future.",
    image: service1,
    secondaryImages: [serviceDetail1, serviceDetail2, serviceDetail3],
    features: [
      'Location Intelligence',
      'Investor Alignment.',
      'Market Foresight',
      'Legal Due Diligence',
      'Negotiation Expertise',
      'End-to-End Support',
    ],
    process: [
      {
        title: "Market Research & Feasibility Analysis",
        description: "Data-driven selection based on infrastructure plans, real estate demand, and investor trends."
      },
      {
        title: "Investor Consultation",
        description: "Investment alignment to meet your financial goals, capital expectations, and preferred zones."
      },
      {
        title: "Location Scouting",
        description: "Identifying land with strong resale potential, accessibility to key landmarks & future development prospects."
      },
      {
        title: "Legal & Regulatory Checks",
        description: "Background checks, ensuring clear titles, conflict-free ownership, and alignment with DHA bylaws."
      },
      {
        title: "Price Negotiation & Finalization",
        description: "Negotiating the best possible rates, ensuring transparency and fair market value for both investors & sellers."
      },
      {
        title: "Documentation & Transfer",
        description: "Smooth documentation, secure agreements, and timely transfer processes - with DHA Multan and other authorities."
      },
      {
        title: "Project Alignment & Handover",
        description: "Once acquired, the land is either prepared for development or held as a strategic asset depending on the investor's objective."
      }  
    ],
    benefits: [
     'Data-Backed Insights',
     'Prime Location Access',
     'Transparent Dealings',
     'Faster Acquisition Timelines',
     'Portfolio Diversification',
    ]
  },
  'construction': {
    id: 2,
    title: 'Construction Supplies',
    caption:'Aesthetically Inspired     -      Refined Material       -       Durability In-built',
    description: 'By utilizing expert design insights and pre-cast technology, we adopt a pragmatic approach to finishing materials that enhances functionality, durability, aesthetics, and sustainability. With specialized solutions such as CLC Rooftop Treatments, CLC Partition Blocks, High-performance Tile Adhesives, and Premium Wall Putty, we ensure modern living spaces that exceed expectations—aligning with your lifestyle needs while contributing to long-lasting and environmentally conscious developments.',
    cta:'Start our Construction!',
    getStarted:'Yes! Let’s Get Started',
    image: service2,
    secondaryImages: [serviceDetail2, serviceDetail3, serviceDetail1],
    features: [
      "Advanced Construction Techniques",
  "Sustainable Material Integration", 
  "Precision Engineering",
  "Aesthetic Detailing",
  "Quality Control Systems",
  "Skilled Workforce Deployment"
    ],
    process: [
      {
        title: "Personalized Consultations",
        description: "Understanding client needs for functionality, aesthetics, and sustainability."
      },
      {
        title: "Material Selection Excellence",
        description: "Selecting high-quality, durable, and aesthetic materials for finishing."
      },
      {
        title: "Design & Material Integration",
        description: "Ensuring materials align with the overall design for visual harmony."
      },
      {
        title: "Tailored Customization",
        description: "Offering bespoke solutions to elevate aesthetics and suit client preferences."
      },
      {
        title: "Expert Installation",
        description: "Expert application of materials with precision and care."
      },
      {
        title: "Quality Assurance Check",
        description: "Final checks to ensure durability, functionality, and aesthetic appeal before delivery."
      }
    ],
    benefits: [
      "Enhanced Durability",
  "Sustainable Living",
  "Innovative Design",
  "Timely Delivery",
  "Aesthetic Appeal"
    ]
  },
  'development': {
    id: 3,
    title: 'Development',
    caption:'Community-Driven Planning     -      Design-Led Execution    -     Integrated Urban Expansion',
    description: 'We synergize our development strategies with community needs and market trends, utilizing cutting-edge technology to create optimized layouts. By integrating smart living solutions, we ensure that every project meets modern demands for convenience, efficiency, and sustainability. Our focus on innovative design and thoughtful planning results in developments that are not only functional but also enhance the quality of life for future residents.',
    cta:'Let’s Begin with Development ',
    getStarted:'Yes! Let’s Get Started',
    image: service3,
    secondaryImages: [serviceDetail3, serviceDetail1, serviceDetail2],
    features: [
      'Community-Centric Planning',
      'Innovative Design',
      'Smart Living Integration',
      'Sustainable Practices',
      'Market-Driven Strategy',
      'Efficient Space Utilization',
    ],
    process: [
      { title: 'Strategic Planning & Market Analysis', description: 'Conducting thorough research to align projects with market demands and future trends.' },
      { title: 'Prime Site Selection & Acquisition', description: 'Identifying and securing high-potential sites for sustainable growth and investment.' },
      { title: 'Architectural Design & Master Planning', description: 'Crafting innovative and functional designs that integrate smart technologies and community needs.' },
      { title: 'Regulatory Compliance & Approvals', description: 'Ensuring all projects meet legal standards and receive necessary permits seamlessly.' },
      { title: 'Precision Execution & Construction Management', description: 'Overseeing construction with a focus on quality, efficiency, and timely delivery.' },
      { title: 'Project Handover & Ongoing Support', description: 'Ensuring smooth handovers and providing ongoing support for long-term client satisfaction.' }
    ],
    benefits: [
      'Enhanced Livability',
      'Future-Proof Projects',
      'Increased Property Value',
      'Community Growth',
      'Sustainable Development',
    ]
  },
  'plots-trading': {
    id: 4,
    title: 'Plot Trading',
    caption: 'Informed Decision-Making      -       Fast Value Exchange      -       Transparent Dealing',
    description: 'With a strategic vision, we anticipate market shifts and proactively identify opportunities that align with future growth trends. By connecting investors with high-potential prospects, we ensure that each investment is perfectly positioned for exceptional returns. Our foresight and market insight shape the future landscape, helping investors make informed decisions that drive long-term success and solidify their position in evolving markets.',
    cta:'Sell or Buy (Plot)',
    getStarted:'Yes! Let’s Get Started',
    image: service4,
    secondaryImages: [serviceDetail1, serviceDetail3, serviceDetail2],
    features: [
  "Expert Design Insights" ,
  "Pre-Cast Technology" ,
  "Sustainable Practices" ,
  "Thermal Efficiency" ,
  "Quality Control" ,
  "Aesthetic Excellence" 
    ],
    process: [
      {
        title: "Client Consultation",
        description: "Understanding your investment goals, budget, and location preferences."
      },
      {
        title: "Market Analysis",
        description: "Identifying the most profitable and secure plot options through data-driven insights."
      },
      {
        title: "Plot Shortlisting",
        description: "Presenting you with handpicked plots that align with your needs and objectives."
      },
      {
        title: "Due Diligence",
        description: "Verifying all legal, ownership, and development aspects to ensure a secure deal."
      },
      {
        title: "Negotiation & Agreement",
        description: "Handling price negotiations and finalizing terms in your best interest."
      },
      {
        title: "Deal Closure & Handover",
        description: "Completing documentation and ensuring a smooth, transparent transfer of ownership."
      }
    ],
    benefits: [
      "Maximized Customer Returns",
  "Reduced Investment Risk",
  "Expert Support Throughout",
  "Time-Efficient Process",
  "Trustworthy, Clear Transactions"
    ]
  },
  'finishing-materials': {
    id: 4,
    title: 'Finishing Materials   ',
    caption: 'Aesthetically Inspired     -      Refined Material       -       Durability In-built',
    description: 'By utilizing expert design insights and pre-cast technology, we adopt a pragmatic approach to finishing materials that enhances functionality, durability, aesthetics, and sustainability. With specialized solutions like thermal insulation, lightweight partitions, strong bonding agents, and perfect wall finishes, we ensure modern living spaces that exceed expectations—aligning with your lifestyle needs while contributing to long-lasting and environmentally conscious developments.',
    cta:'Begin My Project’s finishing ',
    getStarted:'Yes! Let’s Get Started',
    image: service4,
    secondaryImages: [serviceDetail1, serviceDetail3, serviceDetail2],
    features: [
      "Expert Design Insights",
  "Pre-Cast Technology",
  "Sustainable Practices",
  "Thermal Efficiency",
  "Quality Control",
  "Aesthetic Excellence"
    ],
    process: [
      {
        title: "Personalized Consultations",
        description: "Understanding client needs for functionality, aesthetics, and sustainability."
      },
      {
        title: "Material Selection Excellence",
        description: "Selecting high-quality, durable, and aesthetic materials for finishing."
      },
      {
        title: "Design & Material Integration",
        description: "Ensuring materials align with the overall design for visual harmony."
      },
      {
        title: "Tailored Customization",
        description: "Offering bespoke solutions to elevate aesthetics and suit client preferences."
      },
      {
        title: "Expert Installation",
        description: "Expert application of materials with precision and care."
      },
      {
        title: "Quality Assurance Check",
        description: "Final checks to ensure durability, functionality, and aesthetic appeal before delivery."
      }
    ],
    benefits: [
      "Enhanced Durability",
  "Sustainable Living",
  "Innovative Design",
  "Timely Delivery",
  "Aesthetic Appeal"
    ]
  },
  'project-marketing': {
    id: 4,
    serviceTitle: 'Project Marketing ',
    caption: 'Selling Stories      -         Making Brands Visible          -               Targeted Exposure ',
    title: 'Property Management',
    description: "We define your project's potential and positioning by incorporating high-impact marketing strategies. With a focus on creating a compelling narrative, we highlight the key features and brilliance of your project. Through creative campaigns, we ensure your project stands out in the market, driving attention and engagement. Our approach effectively showcases its value, attracting the right audience and stakeholders for sustainable growth.",
    cta:'Let’s Market my Project',
    getStarted:'Yes! Let’s Get Started',
    image: service4,
    secondaryImages: [serviceDetail1, serviceDetail3, serviceDetail2],
    features: [
      'Targeted Audience Engagement',
      'Compelling Storytelling',
      'Comprehensive Market Research',
      'Brand Positioning',
      'Creative Campaigns',
      'Performance Tracking & Optimization',
    ],
    process: [
      { title: 'Competitor’s Research Analysis', description: 'Conduct thorough research to understand market trends, target demographics, and competitor positioning.' },
      { title: 'Strategic Planning', description: 'Develop a customized marketing strategy to align with project goals, audience preferences, and market demands. '},
      { title: 'Brand Development & Positioning ', description: 'Create a strong brand identity and position your project to highlight its unique selling points and key features.' },
      { title: 'Creative Content Creation', description: 'Our team designing compelling visuals, videos, and written content that tell a captivating story of the project.' },
      { title: 'Multichannel Campaign Execution', description: 'Launch marketing campaigns across various platforms, from social media to traditional media, to maximize exposure.' },
      { title: 'Performance Monitoring & Optimization', description: 'Track the effectiveness of campaigns and adjust strategies to improve engagement, conversions, and investor interest.' }
    ],
    benefits: [
      'Maximized Market Reach',
      'Increased Project Visibility',
      'Enhanced Brand Perception',
      'Boosted Investor Confidence',
      'Efficient Lead Generation',
    ]
  },
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
              <h1 className="mb-4">{service.title}</h1>
              <p className="lead">{service.caption}</p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Service Details Section */}
      <section className="py-5 service-detail">
        <Container>
        
          <Row className="g-4">
            <Col xs={12} lg={8}>
              <h2 className="mb-4">What we do in  {service.title}</h2>
              <p className="mb-4">{service.description}</p>
              
              <div className="mb-5 weDo">
                <h3 className="mb-4">What do we use? </h3>
                <Row>
                  {service.features.map((feature, index) => (
                    <Col xs={12} md={6} key={index} className="mb-1">
                      <div className="d-flex align-items-start">
                        <Icons name="check" className="me-2" />
                        <span>{feature}</span>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>

              <div className="mb-5">
                <h3 className="mb-4">How we do it?</h3>
                <Accordion defaultActiveKey="0" flush>
                  {service.process.map((step, index) => (
                    <Accordion.Item eventKey={index.toString()} key={index}>
                      <Accordion.Header>
                        {/* <span className="me-2">{index + 1}.</span>  */}{step.title}
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
                    <h5 className="mb-3">Hmm! This sounds good</h5>
                    <p className="small mb-3">
                      Ready to benefit from our {service.title} service? Contact us today to discuss your requirements.
                    </p>
                    <div className="d-grid gap-2">
                      <Col className='text-center'><BodlaButton text={service.cta} icon={<Icons name="phone" />} variant="primary" link="/contact"/></Col>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Gallery Section */}
          <Row className="mt-5">
            <Col xs={12}>
              <h3 className="mb-4">Our Portfolio of Eminence</h3>
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
              <h3 className="mb-4">Want to know what else we do?</h3>
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
                          <Card.Text >
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
      <section>
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={8}>
              <h3>Shall we begin with your {service.title} now?</h3>
              <p className="mb-md-0">Contact us today to discuss your project requirements.</p>
            </Col>
            <Col xs={12} md={4} className="text-md-end">
              <BodlaButton text={service.getStarted} icon={<Icons name="rightArrow" />} variant="primary"  link="/contact" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ServiceDetails;