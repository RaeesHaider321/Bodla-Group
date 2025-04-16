import React, { useState } from "react";
import { Form } from 'react-bootstrap';
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
        if (!form.name.trim()) newErrors.name = "Name is required.";
        if (!form.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = "Email is invalid.";
        }
        if (!form.phone.trim()) {
            newErrors.phone = "Phone number is required.";
        } else if (!/^\d{10,15}$/.test(form.phone)) {
            newErrors.phone = "Phone number is invalid.";
        }
        if (!form.message.trim()) newErrors.message = "Message is required.";

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
        
        if (!validate()) {
            setIsSubmitting(false);
            return;
        }

        try {
            await emailjs.send(
                "service_qicvha8",     // Your EmailJS service ID
                "template_ytc5b3r",    // Your EmailJS template ID
                form,
                "wP74glSPoCaKIhuZE"   // Your EmailJS public key
            );
            
            setSuccess("Message sent successfully!");
            setForm({ name: "", email: "", phone: "", message: "" });
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
                <p className={`mb-4 ${success.includes("successfully") ? "text-green-600" : "text-red-600"}`}>
                    {success}
                </p>
            )}
            <form onSubmit={handleSubmit} className="gy-4">
                <Form.Group className="mb-4">
                    <Form.Label className="block">Name</Form.Label>
                    <Form.Control 
                        placeholder="User Name"
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
                    <Form.Label className="block">Email</Form.Label>
                    <Form.Control
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.email}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label className="block">Phone</Form.Label>
                    <Form.Control
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+92-000-0000000"
                        isInvalid={!!errors.phone}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.phone}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label className="block">Message</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={4}
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Write Message"
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