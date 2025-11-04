import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { useState } from 'react';
import {  Container, Row, Col, Modal } from 'react-bootstrap';
import { Trash2, Edit } from 'lucide-react';
import Carousel from "react-bootstrap/Carousel";

const Dashboard = () => {
    
  const projects = [
    {
      id: 1,
      title: "Build a Multilingual Immigration Consulting Website",
      image: "1/1.jpg",
      images: ["1/2.jpg", "1/3.jpg", "1/4.jpg", "1/5.jpg", "1/6.jpg"],
      tags: ["WordPress", "jQuery", "Nginx", "MailChimp", "MySQL"],
      description: "RTL Language Support: Optimized for languages that read from right to left, \
                    such as Arabic, Hebrew, and Urdu. Responsive Design: Ensures the website looks \
                    great on all devices. Elementor Compatibility: Allows for easy drag-and-drop page \
                    building without coding. Pre-built Demos: Includes multiple homepage layouts and \
                    inner pages like About Us, Services, Team, and Contact. SEO Optimized: Built with \
                    SEO best practices to help improve search engine rankings. WooCommerce Support: \
                    Enables e-commerce functionality for online services or product sales. Slider Revolution \
                    Included: Offers advanced slider options for dynamic content presentation."
    },
    {
      id: 2,
      title: "Next.js Ecommerce",
      subtitle: "jamstackthemes.dev+1",
      image: "2/1.jpg",
      images: ["2/2.jpg", "2/3.jpg", "2/4.jpg", "2/5.jpg"],
      tags: ["Google Analytics", "Next.js", "Javascript", "RSS", "Redux"],
      description: "A responsive e-commerce storefront built using the Next.js framework. The repository is a “work in progress … made with Next.js, Redux, Redux-persist, Hooks, SCSS and BEM”. jamstackthemes.dev"
    },
    {
      id: 3,
      title: "Pinterest – Visual Discovery and Inspiration Platform",
      image: "3/1.jpg",
      images: ["3/2.jpg", "3/3.jpg", "3/4.jpg", "3/5.jpg", "3/6.jpg", "3/7.jpg", "3/8.jpg"],
      tags: ["React.js", "Next.js", "Javascript", "MySQL", "Python"],
      description: "Pinterest is a visual discovery and bookmarking platform where users can find, save, and share creative ideas and inspirations through images and videos known as “Pins.” Users organize Pins into themed “Boards,” browse personalized recommendations, and discover content based on interests such as home décor, fashion, travel, recipes, and more. It integrates shopping and ad features, allowing users to explore products directly within the platform."
    },
  ];

  const [items, setItems] = useState(projects);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleShow = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  const handleNext = () => {
  const currentIndex = projects.findIndex(
    (project) => project.id === selectedProject.id
  );
  const nextIndex = (currentIndex + 1) % projects.length;
  setSelectedProject(projects[nextIndex]);
};

const handlePrev = () => {
  const currentIndex = projects.findIndex(
    (project) => project.id === selectedProject.id
  );
  const prevIndex =
    (currentIndex - 1 + projects.length) % projects.length;
  setSelectedProject(projects[prevIndex]);
};

  return (
    <div>
      <Jumbotron  style={{backgroundColor: "#f9f9f9"}}>
          <h2><strong>About Me</strong></h2>
          <p>I am a passionate and detail-oriented Ukrainian software developer specializing in web development and modern desktop application design. With a strong academic foundation from one of Ukraine’s top technical universities and hands-on experience in real-world projects, I focus on creating efficient, user-friendly, and scalable software solutions. I enjoy solving complex technical challenges, optimizing application performance, and implementing clean, maintainable code.<br/></p>
          <br/>
          
          <h2><strong>Education</strong></h2>
          <p><strong>National Technical University of Ukraine “Igor Sikorsky Kyiv Polytechnic Institute” (NTUU KPI)</strong></p>
          <p>Bachelor’s Degree in Computer Science and Computer Engineering | Kyiv, Ukraine | Graduated: June 2017<br/>
          Faculty of Informatics and Computer Science (FICS)</p>
          <p>
              Key Subjects Studied<br/>
              - Web Programming (HTML5, CSS3, JavaScript, PHP, Laravel, React)<br/>
                - Database Systems (MySQL, PostgreSQL)<br/>
                - Software Engineering and Project Management<br/>
                - Algorithms and Data Structures<br/>
                - Object-Oriented Programming (C++, Java)<br/>
                - Networking and Cybersecurity<br/>
                - Artificial Intelligence Fundamentals<br/>
                - Computer Graphics and User Interface Design<br/>
            <br/>
            My studies at KPI provided a strong theoretical and practical background, preparing me for real-world software development. Working on academic projects and participating in programming contests helped me develop analytical thinking and a disciplined approach to problem-solving — skills I continue to apply in professional development environments.
          </p>
          <br/>
        <h2><strong>Work Experience</strong></h2>
        <p><strong>Freelancer (Full-Stack Developer) Jan 2025 – Present</strong></p>
        <p>Platform: Workana<br/>
            Responsible for developing custom web applications, providing full-stack development services, and managing client projects.<br/>
            Worked on various technologies, including React, Redux, Node.js, and Laravel, delivering high-quality software solutions on time.<br/><br/>
        </p>

        <p><strong>Freelancer (Full-Stack Developer) July 2020 – April 2025</strong></p>
        <p>Platforms: Workana, Fiverr, TrueLancer<br/>
        Successfully completed over 20 projects for clients across different industries, including e-commerce platforms, business applications, and custom CMS solutions.<br/>
        Technologies: React, Next.js, Laravel, MySQL, MongoDB, and more.<br/>
        </p>
        
        <p><strong>2017 – Oct 2020</strong></p>
        <p>Technologies: HTML, CSS, JavaScript, .Net<br/>
        Designed and developed dynamic, responsive websites and web applications.<br/>
        Worked on improving user interfaces and implementing best practices in web development.<br/><br/>

        - Developed and deployed web and desktop applications using JavaScript, C++, C#, React, Node.js, and Electron.<br/>
        - Designed responsive front-end interfaces and implemented RESTful APIs for scalable back-end communication.<br/>
        - Built custom text editing and messaging programs with auto-capitalization, dynamic formatting, and user authentication.<br/>
        - Collaborated with international clients on Upwork, Freelancer, and Workana, ensuring high-quality deliverables.<br/>
        - Managed database structures, server-side logic, and software optimization for performance and security.<br/>
        - Created documentation, technical specifications, and development roadmaps.<br/>
        </p>
        <br/>
        <h2><strong>Technical Skills</strong></h2>
          <p>• Frontend: React, Redux, Angular, Bootstrap, SCSS, Tailwind CSS<br/>
            • Backend: JavaScript, C#, PHP<br/>
            • Frameworks: Next.js, ReactJS, Laravel<br/>
            • Databases: MySQL, PostgreSQL, SQL Server, MongoDB<br/>
            • ORM: Prisma, Entity Framework Core, Eloquent<br/>
            • AI Tools: Replit, Builder.io, Locofy AI, UXCanvas<br/>
            • AI Agent Development: N8N<br/>
            • Data Visualization: Chart.js, Power BI<br/>
            • CMS: WordPress, Shopify, Wix<br/>
            • Mobile App Development: React Native<br/>
            • Google APIs: [Your specific experience with Google APIs]<br/>
        </p>
        <br/>
        <h2><strong>Career Objectives</strong></h2>
        <p><strong>Frontend:</strong> To develop a high-performing, clean, and pixel-perfect frontend, keeping SEO and best practices in mind.<br/>
            <strong>Backend:</strong> To write well-organized, efficient, and secure backend code that ensures the smooth running of web applications.<br/>
            <strong>Database:</strong> To design well-structured relational databases and optimize complex queries to improve API performance<br/>
        </p>
          <br/>
        
      </Jumbotron>

      <Jumbotron style={{ backgroundColor: "#f9f9f9" }}>
        <Container>
          <h2><strong>Featured Projects</strong></h2>
          <p></p>

          <Row>
            {items.map((project) => (
              <Col key={project.id} md={4} className="mb-4">
                <Card className="h-100 shadow-sm border-0 project-card">
                  <div className="project-image-wrapper">
                    <Card.Img variant="top" src={project.image} className="project-image" />
                    <div className="overlay" onClick={() => handleShow(project)}>
                      <div className="overlay-text">View Project</div>
                    </div>
                  </div>
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    {project.subtitle && <Card.Subtitle className="mb-2 text-muted">{project.subtitle}</Card.Subtitle>}
                    <div className="mt-3">
                      {project.tags.map(tag => (
                        <span key={tag} className="badge bg-light text-dark me-2">{tag}</span>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Jumbotron>

      {/* Modal Popup */}
      <Modal
        show={showModal}
        onHide={handleClose}
        centered
        dialogClassName="custom-modal"
        size="xl"
      >
        {selectedProject && (
          <div
            className="d-flex flex-column flex-md-row"
            style={{
              width: "100%",
              height: "90vh",
              overflow: "hidden",
            }}
          >
            {/* Left Side - 70% (Scrollable Images) */}
            <div
              className="p-3"
              style={{
                flexBasis: "60%",
                flexShrink: 0,
                overflowY: "auto",
                maxHeight: "90vh",
                borderRight: "1px solid #e5e5e5",
                backgroundColor: "#fafafa",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  alignItems: "center",
                }}
              >
                {selectedProject.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Slide ${index}`}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Right Side - 30% (Details) */}
            <div
              className="d-flex flex-column p-4"
              style={{
                flexBasis: "40%",
                maxHeight: "90vh",
                overflowY: "auto",
                backgroundColor: "#fff",
              }}
            >
              <Modal.Header closeButton>
                <Modal.Title style={{ fontSize: "1.1rem", fontWeight: "600" }}>
                  {selectedProject.title}
                </Modal.Title>
              </Modal.Header>

              <Modal.Body style={{ flex: 1 }}>
                <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>{selectedProject.description}</p>

                <div className="mt-3">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="badge bg-light text-dark me-2"
                      style={{ fontSize: "0.85rem" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </Modal.Body>

              {/* Navigation Buttons - Fixed Bottom */}
              <div
                className="d-flex justify-content-between p-3"
                style={{
                  position: "sticky",
                  bottom: 0,
                  backgroundColor: "#fff",
                  borderTop: "1px solid #eee",
                }}
              >
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => {
                    const prevIndex =
                      (projects.findIndex((p) => p.id === selectedProject.id) - 1 + projects.length) %
                      projects.length;
                    setSelectedProject(projects[prevIndex]);
                  }}
                >
                  ← Previous
                </button>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => {
                    const nextIndex =
                      (projects.findIndex((p) => p.id === selectedProject.id) + 1) %
                      projects.length;
                    setSelectedProject(projects[nextIndex]);
                  }}
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Dashboard;
