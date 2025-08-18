import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Icons from "../components/Icon";
const constructionItems = [
    { icon: "landProvider", title: "Budgeting and cost estimation" },
    { icon: "landProvider", title: "Choosing quality materials" },
    { icon: "landProvider", title: "Hiring the right contractor" },
    { icon: "landProvider", title: "Ensuring legal approvals & regulations" },
    { icon: "landProvider", title: "Foundation Quality" },
    { icon: "landProvider", title: "Energy efficiency & sustainability tips" },
];

const ConstructionThing = () => {
    return (
        <div className="mb-5">
            <h2>Things to Keep in Mind While <span>Constructing Your House</span></h2>
            <p>Careful planning, budgeting, and selecting quality materials are crucial to ensuring a durable, cost-effective, and legally compliant home construction.</p>
            <Row md={3} className="g-3">
                {constructionItems.map((item, index) => (
                    <Col key={index}>
                        <Card className="mb-4 shadow-sm h-100">
                            <Card.Body>
                                <div className='service-icon mb-4'><Icons name={item.icon} /></div>
                                <div className="mt-auto">
                                    <Card.Title>{item.title}</Card.Title>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default ConstructionThing;
