import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Icons from "../components/Icon";
import BodlaButton from '../components/Button';
const Projects = () => {
  const navigate = useNavigate();

  // Sample project data
  const projects = [
    { id: 1, title: 'Business Hub', description: 'This is the first project.' },
    { id: 2, title: 'One Destination', description: 'This is the second project.' },
    { id: 3, title: 'Golf View Rumanza', description: 'This is the third project.' },
    { id: 4, title: 'Bodla Homes', description: 'This is the fourth project.' },
  ];

  // Function to convert title into a slug
  const slugify = (title) => title.toLowerCase().replace(/\s+/g, '-');

  const handleProjectClick = (title) => {
    const projectSlug = slugify(title);
    navigate(`/projects/${projectSlug}`);
  };

  return (
    <section>
      <Container>
        <Row>
          <Col xs={12} md={9}>
            <h1>Projects<br /><span>Innovative Designs, Seamless Experiences</span></h1>
          </Col>
          <Col xs={12} md={3} className='text-end'>
            <BodlaButton text="Book a Call" icon={<Icons name="rightArrow" />} variant="primary" link="/" />
          </Col>
        </Row>
        <div>
          <Row>
            <Col xs={12} md={8}>
              
            </Col>
            <Col xs={12} md={4}>
            </Col>
          </Row>
        </div>
        <ul>
          {projects.map((project) => (
            <li
              key={project.id}
              onClick={() => handleProjectClick(project.title)}
              style={{ cursor: 'pointer', margin: '10px 0' }}
            >
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Projects;
