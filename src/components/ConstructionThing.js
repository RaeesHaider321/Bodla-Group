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
            <div className="mt-5">
                <h2>About Construction Cost Calculator</h2>
                <p>The biggest challenge when building a house is often the uncertainty around construction costs, as multiple factors can influence the final price. These factors include the quality and type of materials, the number of floors, and whether you manage the construction yourself or hire a professional company. To simplify this process, Bodla Builders has introduced its innovative House Construction Cost Calculator—a reliable tool that helps users estimate their home construction expenses accurately.</p>
                <p>If you're planning to build your dream home, our Construction Cost Calculator allows you to quickly determine the estimated cost. Just enter the city where you plan to build, select the house size in Marla or Kanals, and choose the desired material quality. The tool will then generate a detailed estimate, including the grey structure cost, contractor fees, finishing costs, and price per square foot.</p>
                <p>The grey structure cost is calculated by summing up the expenses of foundational elements such as pillars, walls, beams, cement, and steel framework. Meanwhile, the finishing cost accounts for finer details, including tiles, bathroom fixtures, doors, and other essential components. This tool makes it effortless to get a transparent and reliable estimate for your home construction project.</p>
            </div>
        </div>
    );
};

export default ConstructionThing;
