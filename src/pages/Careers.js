import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Card, Badge, Modal, Form, Button, Spinner } from 'react-bootstrap';
import axios from 'axios';
import '../styles/Careers.css';
import BodlaButton from '../components/Button';
import Icons from "../components/Icon";

const CareersPage = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    resume: null,
  });
  const [departments, setDepartments] = useState([]);
  const [locations, setLocations] = useState([]);
  const [filters, setFilters] = useState({
    department: '',
    location: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formErrors, setFormErrors] = useState({});

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
          'Optimize components for maximum performance',
        ],
        requirements: [
          '3+ years of experience with React.js',
          'Strong proficiency in JavaScript, including ES6+',
          'Experience with Redux or similar state management',
          'Familiarity with RESTful APIs',
        ],
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
          'Collaborate with product managers and engineers',
        ],
        requirements: [
          'Proven work experience as a UI/UX Designer',
          'Portfolio of design projects',
          'Knowledge of Figma or Adobe XD',
          'Team spirit and strong communication skills',
        ],
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
          'Optimize applications for maximum speed and scalability',
        ],
        requirements: [
          'Strong proficiency with Node.js and Express',
          'Experience with databases (SQL and NoSQL)',
          'Understanding of fundamental design principles',
          'Proficient understanding of code versioning tools (Git)',
        ],
      },
    ];

    setJobs(mockJobs);
    const uniqueDepts = [...new Set(mockJobs.map(job => job.department))];
    const uniqueLocs = [...new Set(mockJobs.map(job => job.location))];
    setDepartments(uniqueDepts);
    setLocations(uniqueLocs);
  }, []);

  const filteredJobs = jobs.filter(job => (
    (filters.department === '' || job.department === filters.department) &&
    (filters.location === '' || job.location === filters.location)
  ));

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Full Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.resume) errors.resume = 'Resume is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    setFormErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        setErrorMessage('Please upload a PDF, DOC, or DOCX file.');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setErrorMessage('File size exceeds 5MB limit.');
        return;
      }
      setErrorMessage('');
      setFormErrors(prev => ({ ...prev, resume: '' }));
      setFormData(prev => ({
        ...prev,
        resume: file,
      }));
      console.log('Selected file:', {
        name: file.name,
        type: file.type,
        size: file.size,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setErrorMessage('Please correct the errors in the form.');
      return;
    }

    setSubmitting(true);
    setSubmitSuccess(false);
    setErrorMessage('');

    const formPayload = new FormData();
    formPayload.append('jobTitle', selectedJob.title);
    formPayload.append('name', formData.name);
    formPayload.append('email', formData.email);
    formPayload.append('phone', formData.phone || 'Not provided');
    formPayload.append('message', formData.message || 'Not provided');
    formPayload.append('_subject', `Job Application: ${selectedJob.title}`);
    formPayload.append('_cc', 'raees.haider@bodlabuilders.com.pk');
    if (formData.resume) {
      const uniqueFileName = `${Date.now()}_${formData.resume.name}`;
      const uniqueFile = new File([formData.resume], uniqueFileName, { type: formData.resume.type });
      formPayload.append('resume', uniqueFile);
      console.log('Appended resume with unique name:', uniqueFileName);
      for (let [key, value] of formPayload.entries()) {
        console.log(`${key}:`, value instanceof File ? value.name : value);
      }
    } else {
      console.warn('No resume file found in formData');
    }

    try {
      const response = await axios.post(
        'https://formsubmit.co/ajax/career@bodlagroup.com', // For testing, try 'https://formsubmit.co/career@bodlagroup.com' if AJAX endpoint fails
        formPayload,
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.data.success) {
        console.log('Form submission response:', response.data);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          resume: null,
        });
        setFormErrors({});
        setTimeout(() => {
          setSelectedJob(null);
          setShowModal(false);
          setSubmitSuccess(false);
        }, 3000);
      } else {
        throw new Error(response.data.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Error submitting application:', error.response || error.message);
      let errorMsg = 'Failed to submit application. Please try again or email your resume directly to career@bodlagroup.com.';
      if (error.response) {
        if (error.response.status === 404) {
          errorMsg = 'Form not found. Please ensure the Formsubmit endpoint is activated for career@bodlagroup.com.';
        } else if (error.response.status === 400) {
          errorMsg = 'Invalid submission data. Please check your inputs and try again.';
        } else if (error.response.status === 413) {
          errorMsg = 'File size too large. Please upload a file smaller than 5MB.';
        } else if (error.response.data && error.response.data.message) {
          errorMsg = error.response.data.message;
        }
      } else if (error.message.includes('Network Error')) {
        errorMsg = 'Network error. Please check your internet connection and try again.';
      }
      setErrorMessage(errorMsg);
    } finally {
      setSubmitting(false);
    }
  };

  const handleJobSelect = (job) => {
    setSelectedJob(job);
    setShowModal(true);
    setSubmitSuccess(false);
    setErrorMessage('');
    setFormErrors({});
  };

  const handleModalClose = () => {
    if (!submitting) {
      setShowModal(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        resume: null,
      });
      setFormErrors({});
    }
  };

  const benefits = [
    {
      icon: '💼',
      title: 'Career Growth',
      description: 'We invest in your development with training programs and mentorship.',
    },
    {
      icon: '🏡',
      title: 'Flexible Work',
      description: 'Remote options and flexible hours to support work-life balance.',
    },
    {
      icon: '💪',
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance plans.',
    },
    {
      icon: '🎉',
      title: 'Team Culture',
      description: 'Regular team events and a collaborative, inclusive environment.',
    },
  ];

  return (
    <Container fluid className="careers-page px-0">
      <section className="careers-hero py-5 text-center text-white">
        <Container>
          <h1 className="display-4 fw-bold">Build Your Career With Us</h1>
          <p className="lead">Join our team of talented professionals and work on exciting projects that make a difference.</p>
        </Container>
      </section>

      <section className="job-openings-section py-5">
        <Container>
          <h2 className="text-center mb-4">Current Job Openings</h2>
          <p className="text-center mb-5">We're always looking for talented individuals to join our team</p>

          <Row className="mb-4">
            <Col md={6} className="mb-3 mb-md-0">
              <Form.Group>
                <Form.Label>Department:</Form.Label>
                <Form.Select
                  value={filters.department}
                  onChange={(e) => setFilters({ ...filters, department: e.target.value })}
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
                  onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                >
                  <option value="">All Locations</option>
                  {locations.map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

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
                      <BodlaButton
                        text="View Details & Apply"
                        icon={<Icons name="rightArrow" />}
                        variant="primary"
                        onClick={() => handleJobSelect(job)}
                      />
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

      <section className="benefits-section py-5">
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

      <Modal
        show={showModal}
        onHide={handleModalClose}
        size="lg"
        centered
        aria-labelledby="job-application-modal"
        backdrop={submitting ? 'static' : true}
        className="custom-scroll-modal"
      >
        <Modal.Header closeButton={!submitting}>
          <Modal.Title id="job-application-modal">Apply for {selectedJob?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedJob && (
            <>
              <p>{selectedJob.department} • {selectedJob.location}</p>

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
                  <p>
                    Thank you for applying to {selectedJob.title}. We'll review your application and get back to you soon.
                  </p>
                </div>
              ) : (
                <Form onSubmit={handleSubmit} noValidate>
                  {errorMessage && (
                    <div className="alert alert-danger" role="alert">
                      {errorMessage}
                    </div>
                  )}

                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Full Name*</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      disabled={submitting}
                      isInvalid={!!formErrors.name}
                      aria-describedby="nameHelp"
                    />
                    <Form.Control.Feedback type="invalid">
                      {formErrors.name}
                    </Form.Control.Feedback>
                    <Form.Text id="nameHelp">
                      Enter your full name as it appears on your resume.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email*</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={submitting}
                      isInvalid={!!formErrors.email}
                      aria-describedby="emailHelp"
                    />
                    <Form.Control.Feedback type="invalid">
                      {formErrors.email}
                    </Form.Control.Feedback>
                    <Form.Text id="emailHelp">
                      We'll use this email to contact you.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      disabled={submitting}
                      aria-describedby="phoneHelp"
                    />
                    <Form.Text id="phoneHelp">
                      Optional: Provide a contact number.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label>Cover Letter (Optional)</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Tell us why you'd be a great fit for this role..."
                      disabled={submitting}
                      aria-describedby="messageHelp"
                    />
                    <Form.Text id="messageHelp">
                      Share additional information about your qualifications.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formResume">
                    <Form.Label>Resume/CV*</Form.Label>
                    <Form.Control
                      type="file"
                      name="resume"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      required
                      disabled={submitting}
                      isInvalid={!!formErrors.resume}
                      aria-describedby="resumeHelp"
                    />
                    <Form.Control.Feedback type="invalid">
                      {formErrors.resume}
                    </Form.Control.Feedback>
                    <Form.Text id="resumeHelp">
                      PDF, DOC, or DOCX (Max 5MB)
                    </Form.Text>
                  </Form.Group>
                </Form>
              )}
            </>
          )}
        </Modal.Body>
        {!submitSuccess && (
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={handleModalClose}
              disabled={submitting}
            >
              Cancel
            </Button>
            <BodlaButton
              text={submitting ? 'Submitting...' : 'Submit Application'}
              icon={submitting ? <Spinner animation="border" size="sm" /> : <Icons name="rightArrow" />}
              variant="primary"
              onClick={handleSubmit}
              disabled={submitting || !!errorMessage}
            />
          </Modal.Footer>
        )}
      </Modal>
    </Container>
  );
};

export default CareersPage;