"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <nav className="navbar">
        <a href="#home" className="logo">
          MyPortfolio.
        </a>

        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <div className={`nav-links ${menuOpen ? "show" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-text">
          <p className="eyebrow">HELLO, WELCOME TO MY PORTFOLIO</p>
          <h1>
            Hi, I'm <span>Jaseela</span>
          </h1>
          <h2>Aspiring Web Developer</h2>
          <p>
            I'm a B.Com graduate learning web development. I enjoy building
            websites and improving my technical skills. I'm looking for
            opportunities to learn and grow.
          </p>
          <a className="primary-button" href="#projects">
            View My Projects
          </a>
        </div>

        <div className="profile-placeholder">
          <div className="profile-circle">
            <img src="/cv%20pic.jpeg" alt="Jaseela Thasni" />
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <p className="eyebrow">GET TO KNOW ME</p>
        <h2>About Me</h2>
        <p>
          I have a Bachelor's degree in Commerce and an interest in technology.
          I am learning to build responsive websites and web applications. My
          goal is to become a skilled developer through continuous learning and
          practical experience.
        </p>
      </section>

      <section className="section skills-section" id="skills">
        <p className="eyebrow">WHAT I'M LEARNING</p>
        <h2>My Skills</h2>
        <div className="skills-grid">
          {["HTML", "CSS", "JavaScript", "React", "Next.js", "Material UI"].map(
            (skill) => (
              <div className="skill-card" key={skill}>
                {skill}
              </div>
            ),
          )}
        </div>
      </section>

      <section className="section" id="projects">
        <p className="eyebrow">MY WORK</p>
        <h2>Featured Projects</h2>

        <div className="projects-grid">
          {/* Project 1 */}
          <article className="project-card">
            <div className="project-preview">
              <img
                src="../admin-preview.png"
                alt="Admin Panel Dashboard Preview"
              />
            </div>

            <h3>Admin Panel</h3>
            <p>
              A web-based dashboard to manage products and categories. Includes
              adding, editing, deleting, searching, and viewing products.
            </p>
            <p className="tech">Next.js · React · Material UI · REST API</p>
            <a
              className="project-link"
              href="https://github.com/jaseelathasni8874-design/mui-project"
              target="_blank"
              rel="noreferrer"
            >
              View Project on GitHub ↗
            </a>
          </article>

          {/* Project 2 */}
          <article className="project-card">
            <div className="project-preview">
              <img src="/cowin-image.jpg" alt="CoWIN Webpage Preview" />
            </div>
            <h3>CoWIN Webpage</h3>
            <p>
              A web development project based on the CoWIN vaccination website
              interface.
            </p>
            <p className="tech">Next.js · React · CSS</p>
            <a
              className="project-link"
              href="https://github.com/jaseelathasni8874-design/cowin-webpage"
              target="_blank"
              rel="noreferrer"
            >
              View Project on GitHub ↗
            </a>
          </article>

          {/* Project 3 */}
          <article className="project-card">
           
<div className="project-preview">
  <img src="/portfolio.jpg" alt="Personal Portfolio Preview" />
</div>

            <h3>Personal Portfolio</h3>
            <p>
              A responsive personal website showcasing my education, skills,
              projects and contact details.
            </p>
            <p className="tech">Next.js · TypeScript · CSS</p>
            <a className="project-link" href="#contact">
              Contact Me ↗
            </a>
          </article>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <p className="eyebrow">LET'S CONNECT</p>
        <h2>Contact Me</h2>
        <p>I'm open to learning opportunities and suitable fresher roles.</p>

        <a className="primary-button" href="mailto:jaseelathasni8874@gmail.com">
          Email Me
        </a>

        <p className="contact-note">
          Feel free to contact me for job opportunities.
        </p>

        <div className="social-links">
          <a
            href="https://github.com/jaseelathasni8874-design"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Profile ↗
          </a>

          <a
            href="https://www.linkedin.com/in/jaseela-thasni-4b164a432/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn Profile ↗
          </a>
        </div>

        <p className="contact-note">
          Replace this email with your own email address.
        </p>
      </section>

      <footer>
        <p>© 2026 Jaseela · Personal Portfolio</p>
      </footer>
    </main>
  );
}
