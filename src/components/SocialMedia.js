import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { SiThreads } from 'react-icons/si'; // Threads icon from Simple Icons

const socialLinks = [
  { name: "Facebook", url: "https://facebook.com", icon: <FaFacebook size={30} /> },
  { name: "Instagram", url: "https://instagram.com", icon: <FaInstagram size={30} /> },
  { name: "Threads", url: "https://www.threads.net", icon: <SiThreads size={30} /> },
  { name: "LinkedIn", url: "https://linkedin.com", icon: <FaLinkedin size={30} /> },
  { name: "WhatsApp", url: "https://wa.me/", icon: <FaWhatsapp size={30} /> }, // Add number if needed
  { name: "YouTube", url: "https://www.youtube.com", icon: <FaYoutube size={30} /> },
];

const SocialMediaLinks = () => {
  return (
    <Container className="social text-center py-5 mb-4">
      <Row className="justify-content-center">
        {socialLinks.map((social, index) => (
          <a
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon text-dark mx-1"
        >
          {social.icon}
        </a>
        ))}
      </Row>
    </Container>
  );
};

export default SocialMediaLinks;
