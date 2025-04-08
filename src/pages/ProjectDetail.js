import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NotFound from "./NotFound";
const ProjectDetail = () => {
  const { id } = useParams();

  // Sample project data (same as in Projects.js)
  const projects = [
    { id: 1, title: 'Project 1', description: 'This is the first project.' },
    { id: 2, title: 'Project 2', description: 'This is the second project.' },
    { id: 3, title: 'Project 3', description: 'This is the third project.' },
    { id: 4, title: 'Project 4', description: 'This is the fourth project.' },
  ];

  // Find the project by id
  const project = projects.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return <NotFound />;
  }

  return (
    <Container>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <p>Project ID: {project.id}</p>
    </Container>
  );
};

export default ProjectDetail;