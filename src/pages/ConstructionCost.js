import React, { useState } from 'react';
import { Container, Card, Form, Button, Row, Col, ButtonGroup, Table } from 'react-bootstrap';

import InnerHeader from '../components/InnerHeaderWithCard';
import headerBg from '../images/header-bg.jpg';
import '../components/InnerHeader.css';
import PopularCalculations from '../components/PopularCalculations';
import ConstructionThing from '../components/ConstructionThing';
import CraftedProjects from '../components/CraftedProjects';
import StartCalculation from '../components/Tools/ConstructionCost/StartCalculation';

function ConstructionCost() {
  return (
    <>
      <InnerHeader
        heading="Construction Cost"
        highlight="Calculator"
        subtext="Calculate the cost of your construction project"
        backgroundImage={headerBg}
      >
        <Container className="areaUnitConverter">
          <Row className="justify-content-center">
            <Col md={12} lg={12}>
              <Card className="shadow">
                <Card.Body>
                  <StartCalculation/>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </InnerHeader>
      <section>
        <Container>
          <PopularCalculations />
          <ConstructionThing/>
          <CraftedProjects/>
        </Container>
      </section>
    </>
  );
}

export default ConstructionCost;