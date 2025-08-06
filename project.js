
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function Projects() {
  const projectList = [
    { title: "Restaurant Website", desc: "Online table booking system.", link: "#" },
    { title: "School Website", desc: "Registration and announcements.", link: "#" },
    { title: "Law Firm Website", desc: "Professional firm showcase.", link: "#" }
  ];

  return (
    <section id="projects" className="py-5" data-aos="fade-up">
      <Container>
        <h2 className="text-center mb-4">Projects</h2>
        <Row>
          {projectList.map((project, index) => (
            <Col md={4} key={index}>
              <Card className="mb-4 shadow-sm project-card">
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.desc}</Card.Text>
                  <Button variant="primary" href={project.link}>View Project</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}