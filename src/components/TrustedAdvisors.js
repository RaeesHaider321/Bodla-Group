import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import { useInView } from "react-intersection-observer";

const stats = [
    { label: "Total Houses Built", value: 1204 },
    { label: "No. of Plots Traded", value: 650, suffix: "+" },
    { label: "Satisfied Customers", value: 98, suffix: "%" },
];

const Counter = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

    return (
        <div className="trustedAdvisors">
            <section className="overlay">
            <Container>
                <Row>
                    <Col xs={12} md={5}>
                        <h2>your most <br/>trusted <span>real estate</span> advisors</h2>
                    </Col>
                    <Col xs={12} md={7} ref={ref} className="countUp">
                        <Row className="justify-content-center">
                            {stats.map((stat, index) => (
                                <Col md={4} key={index} className="mb-4">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                                        transition={{ duration: 0.8, delay: index * 0.3 }}
                                    >
                                        <h2>
                                            {inView && <CountUp end={stat.value} duration={2} suffix={stat.suffix || ""} />}
                                        </h2>
                                        <p>{stat.label}</p>
                                    </motion.div>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
            </section>
        </div>
    );
};

export default Counter;
