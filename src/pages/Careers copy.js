// src/pages/CareersPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/Careers.css';

const CareersPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800));
        
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
        
      } catch (err) {
        setError('Failed to load job openings. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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
      // In a real application, replace this with your actual backend endpoint
      const response = await axios.post(
        'https://your-backend-service.com/send-email', 
        formPayload,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      if (response.data.success) {
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
          setSubmitSuccess(false);
        }, 3000);
      } else {
        throw new Error(response.data.message || 'Failed to submit application');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      alert(`Failed to submit application: ${error.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="careers-loading">
        <div className="spinner"></div>
        <p>Loading job openings...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="careers-error">
        <h2>Error Loading Careers Page</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );
  }

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="careers-hero">
        <div className="hero-content">
          <h1>Build Your Career With Us</h1>
          <p>Join our team of talented professionals and work on exciting projects that make a difference.</p>
          <Link to="/about" className="hero-button">Learn About Our Culture</Link>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="job-openings-section">
        <div className="container">
          <h2>Current Job Openings</h2>
          <p className="section-subtitle">We're always looking for talented individuals to join our team</p>
          
          {/* Filters */}
          <div className="job-filters">
            <div className="filter-group">
              <label htmlFor="department-filter">Department:</label>
              <select 
                id="department-filter" 
                value={filters.department}
                onChange={(e) => setFilters({...filters, department: e.target.value})}
              >
                <option value="">All Departments</option>
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
            
            <div className="filter-group">
              <label htmlFor="location-filter">Location:</label>
              <select 
                id="location-filter" 
                value={filters.location}
                onChange={(e) => setFilters({...filters, location: e.target.value})}
              >
                <option value="">All Locations</option>
                {locations.map(loc => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Jobs List */}
          <div className="jobs-list">
            {filteredJobs.length > 0 ? (
              filteredJobs.map(job => (
                <div key={job.id} className="job-card">
                  <div className="job-card-header">
                    <h3>{job.title}</h3>
                    <div className="job-meta">
                      <span className="department">{job.department}</span>
                      <span className="location">{job.location}</span>
                      <span className="type">{job.type}</span>
                    </div>
                  </div>
                  <p className="job-description">{job.description}</p>
                  <button 
                    className="view-details-button"
                    onClick={() => setSelectedJob(job)}
                  >
                    View Details & Apply
                  </button>
                </div>
              ))
            ) : (
              <div className="no-jobs">
                <p>No job openings match your filters. Please try different criteria.</p>
                <button 
                  className="reset-filters"
                  onClick={() => setFilters({ department: '', location: '' })}
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <h2>Why Join Our Team?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">💼</div>
              <h3>Career Growth</h3>
              <p>We invest in your development with training programs and mentorship.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🏡</div>
              <h3>Flexible Work</h3>
              <p>Remote options and flexible hours to support work-life balance.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">💪</div>
              <h3>Health & Wellness</h3>
              <p>Comprehensive health, dental, and vision insurance plans.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🎉</div>
              <h3>Team Culture</h3>
              <p>Regular team events and a collaborative, inclusive environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && (
        <div className="application-modal">
          <div className="modal-overlay" onClick={() => !submitting && setSelectedJob(null)}></div>
          <div className="modal-content">
            <button 
              className="close-modal" 
              onClick={() => !submitting && setSelectedJob(null)}
              disabled={submitting}
            >
              &times;
            </button>
            
            <h2>Apply for {selectedJob.title}</h2>
            <p className="job-location">{selectedJob.department} • {selectedJob.location}</p>
            
            <div className="job-details">
              <div className="details-section">
                <h4>Responsibilities</h4>
                <ul>
                  {selectedJob.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="details-section">
                <h4>Requirements</h4>
                <ul>
                  {selectedJob.requirements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            {submitSuccess ? (
              <div className="submit-success">
                <div className="success-icon">✓</div>
                <h3>Application Submitted Successfully!</h3>
                <p>Thank you for applying to {selectedJob.title}. We'll review your application and get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="application-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={submitting}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={submitting}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={submitting}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Cover Letter (Optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Tell us why you'd be a great fit for this role..."
                    disabled={submitting}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="resume">Resume/CV*</label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    required
                    disabled={submitting}
                  />
                  <p className="file-hint">PDF, DOC, or DOCX (Max 5MB)</p>
                </div>
                
                <button 
                  type="submit" 
                  className="submit-application"
                  disabled={submitting}
                >
                  {submitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CareersPage;