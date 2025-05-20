import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Card, Badge, Modal, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/Careers.css';

const CareersPage = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    resume: null
  });
  const [departments, setDepartments] = useState([]);
  const [locations, setLocations] = useState([]);
  const [filters, setFilters] = useState({
    department: '',
    location: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const mockJobs = [
      {
        id: 1,
        title: 'Frontend Developer (React)',
        department: 'Engineering',
        location: 'Remote',
        type: 'Full-time',
        description: 'We are looking for an experienced React developer to join our growing team.',
        responsibilities: [
          'Develop new user-facing features using React.js',
          'Build reusable components and front-end libraries',
          'Translate designs and wireframes into high-quality code',
          'Optimize components for maximum performance'
        ],
        requirements: [
          '3+ years of experience with React.js',
          'Strong proficiency in JavaScript, including ES6+',
          'Experience with Redux or similar state management',
          'Familiarity with RESTful APIs'
        ]
      },
      {
        id: 2,
        title: 'UX/UI Designer',
        department: 'Design',
        location: 'New York, NY',
        type: 'Full-time',
        description: 'Create amazing user experiences for our products.',
        responsibilities: [
          'Create user-centered designs',
          'Develop UI mockups and prototypes',
          'Identify and troubleshoot UX problems',
          'Collaborate with product managers and engineers'
        ],
        requirements: [
          'Proven work experience as a UI/UX Designer',
          'Portfolio of design projects',
          'Knowledge of Figma or Adobe XD',
          'Team spirit and strong communication skills'
        ]
      },
      {
        id: 3,
        title: 'Backend Engineer (Node.js)',
        department: 'Engineering',
        location: 'San Francisco, CA',
        type: 'Full-time',
        description: 'Build and maintain our server infrastructure.',
        responsibilities: [
          'Develop and maintain server-side applications',
          'Implement security and data protection',
          'Integrate data storage solutions',
          'Optimize applications for maximum speed and scalability'
        ],
        requirements: [
          'Strong proficiency with Node.js and Express',
          'Experience with databases (SQL and NoSQL)',
          'Understanding of fundamental design principles',
          'Proficient understanding of code versioning tools (Git)'
        ]
      }
    ];

    setJobs(mockJobs);

    const uniqueDepts = [...new Set(mockJobs.map(job => job.department))];
    const uniqueLocs = [...new Set(mockJobs.map(job => job.location))];

    setDepartments(uniqueDepts);
    setLocations(uniqueLocs);
  }, []);

  const filteredJobs = jobs.filter(job => {
    return (
      (filters.department === '' || job.department === filters.department) &&
      (filters.location === '' || job.location === filters.location)
    );
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      resume: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitSuccess(false);

    const formPayload = new FormData();
    formPayload.append('jobTitle', selectedJob.title);
    formPayload.append('name', formData.name);
    formPayload.append('email', formData.email);
    formPayload.append('phone', formData.phone || 'Not provided');
    formPayload.append('message', formData.message || 'Not provided');
    if (formData.resume) {
      formPayload.append('resume', formData.resume);
    }

    try {
      // Using Formspree endpoint - replace with your Formspree form ID
      await axios.post(
        'https://formspree.io/f/your-form-id-here',
        formPayload,
        {
          headers: {
            'Accept': 'application/json'
          }
        }
      );

      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        resume: null
      });
      setTimeout(() => {
        setSelectedJob(null);
        setShowModal(false);
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting application:', error);
      alert(`Failed to submit application. Please try again or contact us directly at career@bodlagroup.com`);
    } finally {
      setSubmitting(false);
    }
  };

  const handleJobSelect = (job) => {
    setSelectedJob(job);
    setShowModal(true);
    setSubmitSuccess(false);
  };

  const benefits = [
    {
      icon: "💼",
      title: "Career Growth",
      description: "We invest in your development with training programs and mentorship."
    },
    {
      icon: "🏡",
      title: "Flexible Work",
      description: "Remote options and flexible hours to support work-life balance."
    },
    {
      icon: "💪",
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance plans."
    },
    {
      icon: "🎉",
      title: "Team Culture",
      description: "Regular team events and a collaborative, inclusive environment."
    }
  ];

  return (
    <Container fluid className="careers-page px-0">
      {/* Hero Section */}
      <section className="careers-hero py-5 text-center text-white">
        <Container>
          <h1 className="display-4 fw-bold">Build Your Career With Us</h1>
          <p className="lead">Join our team of talented professionals and work on exciting projects that make a difference.</p>
          <Link to="/about" className="btn btn-primary btn-lg mt-3">Learn About Our Culture</Link>
        </Container>
      </section>

      {/* Job Openings Section */}
      <section className="job-openings-section py-5">
        <Container>
          <h2 className="text-center mb-4">Current Job Openings</h2>
          <p className="text-center text-muted mb-5">We're always looking for talented individuals to join our team</p>
          
          {/* Filters */}
          <Row className="mb-4">
            <Col md={6} className="mb-3 mb-md-0">
              <Form.Group>
                <Form.Label>Department:</Form.Label>
                <Form.Select 
                  value={filters.department}
                  onChange={(e) => setFilters({...filters, department: e.target.value})}
                >
                  <option value="">All Departments</option>
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            
            <Col md={6}>
              <Form.Group>
                <Form.Label>Location:</Form.Label>
                <Form.Select
                  value={filters.location}
                  onChange={(e) => setFilters({...filters, location: e.target.value})}
                >
                  <option value="">All Locations</option>
                  {locations.map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          
          {/* Jobs List */}
          <Row xs={1} md={2} lg={3} className="g-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map(job => (
                <Col key={job.id}>
                  <Card className="h-100">
                    <Card.Body>
                      <Card.Title>{job.title}</Card.Title>
                      <div className="d-flex flex-wrap gap-2 mb-3">
                        <Badge bg="primary">{job.department}</Badge>
                        <Badge bg="secondary">{job.location}</Badge>
                        <Badge bg="success">{job.type}</Badge>
                      </div>
                      <Card.Text>{job.description}</Card.Text>
                      <Button 
                        variant="primary"
                        onClick={() => handleJobSelect(job)}
                      >
                        View Details & Apply
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <Col className="text-center py-5">
                <p className="lead">No job openings match your filters. Please try different criteria.</p>
                <Button
                  variant="outline-primary"
                  onClick={() => setFilters({ department: '', location: '' })}
                >
                  Reset Filters
                </Button>
              </Col>
            )}
          </Row>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Why Join Our Team?</h2>
          <Row xs={1} md={2} lg={4} className="g-4">
            {benefits.map((benefit, index) => (
              <Col key={index}>
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body className="text-center">
                    <div className="benefit-icon display-4 mb-3">{benefit.icon}</div>
                    <Card.Title>{benefit.title}</Card.Title>
                    <Card.Text>{benefit.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Application Modal */}
      <Modal show={showModal} onHide={() => !submitting && setShowModal(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Apply for {selectedJob?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedJob && (
            <>
              <p className="text-muted">{selectedJob.department} • {selectedJob.location}</p>
              
              <div className="mb-4">
                <h5>Responsibilities</h5>
                <ul>
                  {selectedJob.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                
                <h5 className="mt-4">Requirements</h5>
                <ul>
                  {selectedJob.requirements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {submitSuccess ? (
                <div className="text-center py-4">
                  <div className="text-success display-4 mb-3">✓</div>
                  <h3>Application Submitted Successfully!</h3>
                  <p className="text-muted">
                    Thank you for applying to {selectedJob.title}. We'll review your application and get back to you soon.
                  </p>
                </div>
              ) : (
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name*</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      disabled={submitting}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email*</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={submitting}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      disabled={submitting}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Cover Letter (Optional)</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Tell us why you'd be a great fit for this role..."
                      disabled={submitting}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Resume/CV*</Form.Label>
                    <Form.Control
                      type="file"
                      name="resume"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      required
                      disabled={submitting}
                    />
                    <Form.Text className="text-muted">
                      PDF, DOC, or DOCX (Max 5MB)
                    </Form.Text>
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    disabled={submitting}
                    className="w-100"
                  >
                    {submitting ? 'Submitting...' : 'Submit Application'}
                  </Button>
                </Form>
              )}
            </>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default CareersPage;