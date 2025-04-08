import React from 'react';
import { Container, Row } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube, FaLinkedin, FaTwitter, FaTiktok } from 'react-icons/fa';
import { SiThreads } from 'react-icons/si'; // Threads icon from Simple Icons

const socialLinks = [
  { name: "Facebook", url: "https://www.facebook.com/bbdha", icon: <FaFacebook size={30} /> },
  { name: "Instagram", url: "https://www.instagram.com/bodlabuilders", icon: <FaInstagram size={30} /> },
  { name: "Threads", url: "https://www.threads.net/@bodlabuilders", icon: <SiThreads size={30} /> },
  { name: "Twitter", url: "https://x.com/bodlabuilders?t=1LdHjC9mBQ3hAVCZ3ARasg&s=08", icon: <FaTwitter size={30} /> },
  { name: "LinkedIn", url: "https://www.linkedin.com/company/bodla-group/", icon: <FaLinkedin size={30} /> },
  { name: "Tiktok", url: "://www.tiktok.com/@bodlabuilders?_t=8qpaMSiFS5Z&_r=1", icon: <FaTiktok size={30} /> },
  { name: "YouTube", url: "https://www.youtube.com/@BodlaBuilders", icon: <FaYoutube size={30} /> },
  { name: "WhatsApp", url: "https://wa.me/+923041231234", icon: <FaWhatsapp size={30} /> }, // Add number if needed
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
