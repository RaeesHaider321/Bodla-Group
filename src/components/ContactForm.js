import React, { useState } from "react";
import { Form, Alert } from 'react-bootstrap';
import emailjs from "emailjs-com";
import Icons from "../components/Icon";
import BodlaButton from './Button';

const ContactForm = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validate = () => {
        let newErrors = {};
        if (!form.name.trim()) newErrors.name = "Name is required";
        if (!form.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!form.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^\d{10,15}$/.test(form.phone)) {
            newErrors.phone = "Phone number is invalid (10-15 digits)";
        }
        if (!form.message.trim()) newErrors.message = "Message is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSuccess("");
        
        if (!validate()) {
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await emailjs.send(
                "service_qicvha8",     // Service ID
                "template_ytc5b3r",    // Template ID
                form,
                "wP74glSPoCaKIhuZE"    // User ID
            );
            
            if (response.status === 200) {
                setSuccess("Message sent successfully!");
                setForm({ name: "", email: "", phone: "", message: "" });
            } else {
                throw new Error("Failed to send message");
            }
        } catch (error) {
            console.error("EmailJS error:", error);
            setSuccess("Failed to send message. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 contact-form">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            {success && (
                <Alert variant={success.includes("successfully") ? "success" : "danger"}>
                    {success}
                </Alert>
            )}
            <form onSubmit={handleSubmit} className="gy-4">
                <Form.Group className="mb-4">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        placeholder="Your Name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.name}
                    </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group className="mb-4">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.email}
                    </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group className="mb-4">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="1234567890"
                        isInvalid={!!errors.phone}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.phone}
                    </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group className="mb-4">
                    <Form.Label>Message</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={4}
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Your message here"
                        isInvalid={!!errors.message}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.message}
                    </Form.Control.Feedback>
                </Form.Group>
                
                <BodlaButton
                    text={isSubmitting ? "Sending..." : "Submit"}
                    icon={<Icons name="rightArrow" />}
                    variant="primary"
                    type="submit"
                    disabled={isSubmitting}
                />
            </form>
        </div>
    );
};

export default ContactForm;