import React from "react";
import "../styles/CraftedProjects.css";
import { Card, Col, Row } from "react-bootstrap";
import Button from './Button';
import Icons from "../components/Icon";
import AskariVilla from '../images/craftedProject1.jpg'
import bHomes from '../images/craftedProject3.jpg'
import bHub from '../images/craftedProject2.jpg'

const projects = [
    {
        image: AskariVilla,
        title: "Askari Villa 3",
        text: "A beautifully crafted luxury villa with premium finishes and modern architecture.",
        date: "Aug 5, 2025",
        type: "Residential",
        location: "Multan, Pakistan",
        icon: "landProvider",
    },
    {
        image: bHomes,
        title: "Bodla Homes",
        text: "A double storey luxury villa with premium finishes and modern architecture.",
        date: "Jul 20, 2025",
        type: "Commercial",
        location: "Multan, Pakistan",
        icon: "landProvider",
    },
    {
        image: bHub,
        title: "Business Hub",
        text: "A multi-story commercial plaza designed for business excellence.",
        date: "Jul 20, 2025",
        type: "Commercial",
        location: "Multan, Pakistan",
        icon: "landProvider",
    },
];

const CraftedProjects = () => {
    return (
        <>
            <Row>
                <Col sm={12} md={10}>
                    <h2>Crafted Spaces, Delivered with  <span>Excellence</span></h2>
                    <p>Delivering excellence through every brick — explore the landmarks we’ve proudly built across residential, commercial, and custom developments.</p>
                </Col>
                <Col sm={12} md={2} className="mt-3 text-end">
                    <Button variant="light" to="/Projects" icon={<Icons name="rightArrow" />}> <i>View All</i></Button>
                </Col>
            </Row>
            <Row xs={1} sm={2} md={3}>
                {projects.map((project, index) => (
                    <Col key={index}>
                        <Card>
                            <Card.Body>
                                <Card.Img className="mb-3" src={project.image} alt={project.title} />
                                <Card.Title>{project.title}</Card.Title>
                                <Card.Text>{project.text}</Card.Text>
                            </Card.Body>
                            <Card.Footer className="crafted-footer">
                                <Card.Text className="footer-item"><Icons name={project.icon} className="footer-icon" />{project.date}</Card.Text>
                                <Card.Text className="footer-item"><Icons name={project.icon} className="footer-icon" />{project.type}</Card.Text>
                                {/* <Card.Text className="footer-item"><Icons name={project.icon} className="footer-icon" />{project.location}</Card.Text> */}
                            </Card.Footer>
                        </Card>

                    </Col>
                ))}
            </Row>
        </>
    );
};

export default CraftedProjects;
