import React, { useState } from 'react';
import axios from 'axios';
import { Form} from 'react-bootstrap';
import BodlaButton from './Button';
import Icons from "../components/Icon";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!/^[0-9+\- ]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
      isValid = false;
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 10) {
      newErrors.phone = 'Phone number must be at least 10 digits';
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitStatus(null);
      
      try {
        // Using FormSubmit.co service to send the email
        const response = await axios.post('https://formsubmit.co/ajax/raees.haider@bodlabuilders.com.pk', {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        }, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });

        if (response.data.success === "true") {
          setSubmitStatus('success');
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
          });
        } else {
          setSubmitStatus('error');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="contact-form">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      {submitStatus === 'success' && (
        <div className="alert alert-success">
          Thank you for your message! We'll get back to you soon.
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="alert alert-error">
          There was an error submitting your form. Please try again later.
        </div>
      )}
      
      <form onSubmit={handleSubmit} noValidate>
      <Form.Group className="mb-3">
          <Form.Label htmlFor="name">Name*</Form.Label>
          <Form.Control placeholder="Full name"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-message text-sm">{errors.name}</span>}
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label htmlFor="email">Email*</Form.Label>
          <Form.Control placeholder="Your email address"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message text-sm">{errors.email}</span>}
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label htmlFor="phone">Phone Number*</Form.Label>
          <Form.Control placeholder="Drop your digits here"
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? 'error' : ''}
          />
          {errors.phone && <span className="error-message text-sm">{errors.phone}</span>}
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label htmlFor="message">Message*</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Tell us what’s on your mind…"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? 'error' : ''}
          />
          {errors.message && <span className="error-message text-sm">{errors.message}</span>}
        </Form.Group>
        
        <BodlaButton
            disabled={isSubmitting}
            text={isSubmitting ? 'Sending...' : 'Submit'}
            icon={<Icons name="rightArrow" />}
            variant="primary"
            type="submit"
          />
      </form>
    </div>
  );
};

export default ContactForm;