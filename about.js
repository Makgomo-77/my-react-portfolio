import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function About() {
  return (
    <section id="about" className="py-5 bg-light" data-aos="fade-up">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src="profile.jpg" alt="Makgomo Shayi" className="img-fluid rounded-circle" />
          </Col>
          <Col md={6}>
            <h2>About Me</h2>
            <p>
              I am a passionate Full-Stack Web Developer skilled in building modern,
              responsive, and user-friendly websites. My expertise includes React.js,
              JavaScript, Bootstrap, HTML, CSS, and Django for backend development.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
