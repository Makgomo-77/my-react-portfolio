import React from "react";

export default function Hero() {
  return (
    <section id="home" className="hero text-center text-white d-flex align-items-center justify-content-center">
      <div data-aos="fade-up">
        <h1 className="display-4 fw-bold">Hi, I'm Makgomo Shayi</h1>
        <p className="lead">Full-Stack Web Developer | React & Django</p>
        <a href="#projects" className="btn btn-primary btn-lg mt-3">View My Work</a>
      </div>
    </section>
  );
}
