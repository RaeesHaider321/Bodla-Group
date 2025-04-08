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

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validate()) return;

        emailjs
            .send(
                "service_qicvha8",     // Replace with your EmailJS service ID
                "template_ytc5b3r",    // Replace with your EmailJS template ID
                form,
                "wP74glSPoCaKIhuZE"         // Replace with your EmailJS public key
            )
            .then(() => {
                setSuccess("Message sent successfully!");
                setForm({ name: "", email: "", phone: "", message: "" });
            })
            .catch((error) => {
                setSuccess("Failed to send message. Try again later.");
                console.error("EmailJS error:", error);
            });
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 contact-form">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            {success && <p className="mb-4 text-green-600">{success}</p>}
            <form onSubmit={handleSubmit} className="gy-4">
                <Form.Group className="mb-4">
                    <Form.Label className="block">Name</Form.Label>
                    <Form.Control placeholder="User Name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                    />
                    {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label className="block">Email</Form.Label>
                    <Form.Control
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                    />
                    {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label className="block">Phone</Form.Label>
                    <Form.Control
                        name="phone"
                        type="text"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+92-000-0000000"
                    />
                    {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label className="block">Message</Form.Label>
                    <Form.Control as="textarea" rows={4}
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Write Message"
                    />
                </Form.Group>
                
                <BodlaButton
                    text="Submit"
                    icon={<Icons name="rightArrow" />}
                    variant="primary"
                    type="submit" // Use submit type when needed
                    onClick={() => console.log('Button clicked!')}
                />
            </form>
        </div>
    );
};

export default ContactForm;
