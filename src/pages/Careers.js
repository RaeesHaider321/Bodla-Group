import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Col, Row, Card, Badge, Modal, Form, Spinner } from 'react-bootstrap';

// The Icons and Button components are now defined directly in this file
// to make it self-contained.
const Icons = ({ name }) => {
  if (name === 'rightArrow') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
      </svg>
    );
  }
  return null;
};

const Button = ({ children, onClick, variant, icon, disabled }) => (
  <button className={`btn btn-${variant}`} onClick={onClick} disabled={disabled}>
    {children} {icon}
  </button>
);

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
        "id": 1,
        "title": "Sales Executive ",
        "department": "Sales",
        "location": "Onsite",
        "type": "Full-time",
        "description": "We are hiring a Sales Executive to manage leads, pitch products/services, and build lasting client relationships. You will drive business growth, achieve sales targets, and serve as the face of the company with strong communication and negotiation skills.",
        "responsibilities": [
          "Manage and nurture leads to ensure timely conversion.",
          "Strong sales pitches and presentations to potential clients.",
          "Build and maintain effective Client Relationships for repeat business.",
          "Communicate persuasively to influence client decisions.",
          "Support sales targets by consistently achieving individual goals.",
        ],
        "requirements": [
          "Proven experience as a Sales Executive, Sales Representative, or similar role",
          "Strong communication, presentation, and negotiation skills",
          "Ability to manage leads effectively and convert them into clients",
          "Confidence in pitching products/services to diverse audiences",
          "Strong interpersonal skills with a client-focused approach",
          "Ability to build and maintain long-term professional relationships",
          "Results-driven mindset with a track record of meeting or exceeding targets",
          "Proficiency in MS Office, CRM tools, or other sales software (preferred)",
          "Bachelor’s degree in Business Administration, Marketing, or a related field (preferred)",
        ],
      },
      {
        "id": 2,
        "title": "Sales Manager ",
        "department": "Sales",
        "location": "Onsite",
        "type": "Full-time",
        "description": "We are hiring a Sales Manager to lead our team, drive revenue growth, and build client networks. You will develop strategies, mentor the team, and deliver results to keep the company competitive in the market.",
        "responsibilities": [
          "Lead the sales team by setting clear targets and ensuring revenue achievement.",
          " Develop and implement sales strategies for Projects, Dealers, and Corporate Clients.",
          " Analyze market trends and competitor activities to recommend business solutions.",
          " Mentor and train team members to enhance productivity and skills.",
          " Provide accurate sales forecasts, pipeline updates, and performance reports to senior management.",
        ],
        "requirements": [
          "Proven experience as a Sales Manager, Sales Team Lead, or in a similar leadership role",
          "Strong understanding of sales principles, strategies, and processes",
          "Ability to develop and implement effective sales plans to achieve revenue targets",
          "Excellent leadership and team management skills with experience mentoring sales professionals",
          "Strong analytical skills to monitor performance, analyze market trends, and present accurate forecasts",
          "Exceptional communication, negotiation, and presentation abilities",
          "Ability to build and expand client and dealer networks",
          "Proficiency in CRM systems, MS Office, and sales reporting tools",
          "Bachelor’s degree in Business Administration, Marketing, or a related field (Master’s preferred)",
          "Results-oriented mindset with a proven track record of meeting or exceeding sales goals",
        ],
      },
      {
        "id": 3,
        "title": "Assistant Sales Manager",
        "department": "Sales",
        "location": "Onsite",
        "type": "Full-time",
        "description": "We are hiring an Assistant Sales Manager to support sales targets and growth. You will coordinate with management, clients, and dealers, guide executives, and assist in deal closures while ensuring team performance and customer satisfaction.",
        "responsibilities": [
          "Assist the Sales Manager in achieving Team Sales Targets",
          "Guide Sales Executives through monitoring and performance feedback",
          "Manage client relationships and resolve complex queries",
          "Coordinate effectively with Dealers, Corporate Clients, and Stakeholders",
          "Support deal closures by providing strategic input and solutions",
          "Ensure smooth sales operations through team collaboration",
        ],
        "requirements": [
          "Proven experience as a Sales Executive, Team Lead, or Assistant Sales Manager (preferred)",
          "Strong understanding of sales operations, client relationship management, and deal processes",
          "Ability to guide and motivate sales executives to achieve targets",
          "Excellent communication, negotiation, and interpersonal skills",
          "Strong organizational and coordination abilities to liaise with management, clients, and dealers",
          "Problem-solving mindset with the ability to handle client queries effectively",
          "Proficiency in CRM systems, MS Office, and reporting tools",
          "Bachelor’s degree in Business Administration, Marketing, or a related field",
          "Results-driven approach with a commitment to team success and customer satisfaction",
        ],
      }
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
      const maxFileSize = 5 * 1024 * 1024; // 5MB
      
      if (!allowedTypes.includes(file.type)) {
        setErrorMessage('Please upload a PDF, DOC, or DOCX file.');
        return;
      }
      if (file.size > maxFileSize) {
        setErrorMessage('File size exceeds 5MB limit.');
        return;
      }
      setErrorMessage('');
      setFormErrors(prev => ({ ...prev, resume: '' }));
      setFormData(prev => ({
        ...prev,
        resume: file,
      }));
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
      // The name of the field is 'attachment' for Formsubmit, which is why the previous code worked.
      // Changing the file name to something unique is a good practice but not required for Formsubmit.
      formPayload.append('attachment', formData.resume, formData.resume.name);
    } else {
      console.warn('No resume file found in formData');
    }
    
    try {
      const response = await axios.post(
        'https://formsubmit.co/ajax/raees.haider@bodlabuilders.com.pk',
        formPayload,
        {
          // Axios automatically sets 'Content-Type' to 'multipart/form-data' when using FormData,
          // so this header is technically redundant but doesn't cause issues.
          headers: {
            'Accept': 'application/json',
          },
        }
      );

      if (response.data.success) {
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
          errorMsg = 'Form not found. Please ensure the Formsubmit endpoint is activated for the receiver email address.';
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
      {/* Styles are included here to make the component self-contained */}
      <style>
        {`
        .careers-page .careers-hero {
          background-color: #000;
          background-image: url('https://placehold.co/1920x400/000/fff?text=Join+Our+Team');
          background-size: cover;
          background-position: center;
          color: #fff;
          padding: 8rem 0;
          text-align: center;
        }
        .careers-page .careers-hero h1 {
          font-weight: bold;
          font-size: 3rem;
          margin-bottom: 0.5rem;
        }
        .careers-page .careers-hero p {
          font-size: 1.25rem;
          opacity: 0.8;
        }
        .careers-page .job-openings-section h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #333;
        }
        .careers-page .benefits-section {
          background-color: #f8f9fa;
        }
        .careers-page .benefits-section h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #333;
        }
        .careers-page .benefits-section .benefit-icon {
          font-size: 3rem;
        }
        .careers-page .card {
          border: none;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }
        .careers-page .card:hover {
          transform: translateY(-5px);
        }
        .careers-page .card .badge {
          font-size: 0.8em;
          font-weight: 600;
        }
        .careers-page .modal-content {
          border-radius: 15px;
        }
        .careers-page .custom-scroll-modal .modal-body {
          max-height: 70vh;
          overflow-y: auto;
        }
        .careers-page .custom-scroll-modal .modal-footer {
          border-top: none;
        }
        `}
      </style>

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
            {jobs.length === 0 ? (
              <Col className="text-center py-5" lg={12}>
                <h4>We currently don't have any open positions. Please check back later!</h4>
                <p>You can also follow us on social media to stay updated about new opportunities.</p>
              </Col>
            ) : filteredJobs.length > 0 ? (
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
                      <Button variant="light" onClick={() => handleJobSelect(job)} icon={<Icons name="rightArrow" />}> <i>View Details & Apply</i></Button>
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
                    <Form.Label>Phone Number Test</Form.Label>
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
            <Button variant="secondary" disabled={submitting} onClick={handleModalClose}> <i>Cancel</i></Button>
            <Button variant="light" onClick={handleSubmit} icon={submitting ? <Spinner animation="border" size="sm" disabled={submitting || !!errorMessage} /> : <Icons name="rightArrow" />}> <i>{submitting ? 'Submitting...' : 'Submit Application'}</i></Button>
          </Modal.Footer>
        )}
      </Modal>
    </Container>
  );
};

export default CareersPage;
