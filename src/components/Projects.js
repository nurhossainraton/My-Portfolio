import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import background from "../assets/img/comp.jpg";
import comp1 from "../assets/img/comp1.jpg";
import comp2 from "../assets/img/comp2.jpg";
import comp3 from "../assets/img/comp3.jpg";

import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Haat e Bazaar e — An E-commerce Platform",
      description:
        "Developed a full-fledged e-commerce platform where users can browse products, add items to the cart, and place orders. Click to be the Customer!",
      imgUrl: background,
      link: "https://haatebazaare.vercel.app/",
    },
    {
      title: "Health Book — A Medical Record System",
      description:
        "Developed a medical record system for secure data storage and analysis of patient conditions.Click to see the repository and Demo",
      imgUrl: comp1,
      link: "https://github.com/nurhossainraton/CSE-408---HealthBook",
    },
    {
      title: "App Development",
      description:
        "Designed and deployed a mobile application featuring categorized video content for users.Click to download the app.",
      imgUrl: comp3,
      link: "https://play.google.com/store/apps/details?id=com.muktotech.islamictvbangla",
    },
  ];

  const projects1 = [
    {
      title: "CSE 204: Data Structures & Algorithm",
      description:
        "Implemented and optimized widely-used data structures and algorithms to enhance programming efficiency. Click to see the repository",
      imgUrl: background,
      link: "https://github.com/nurhossainraton/Data-Structures-And-Algorithms--1",
    },
    {
      title: "CSE 208: Data Structures & Algorithm",
      description:
        "Engineered advanced data structures and algorithms to solve computational challenges effectively. Click to see the repository",
      imgUrl: comp1,
      link: "https://github.com/nurhossainraton/Data-Structures-And-Algorithms-2",
    },
    {
      title: "CSE 472: Machine Learning",
      description:
        "Crafted machine learning models to analyze data, predict outcomes, and derive actionable insights. Click to see the repository",
      imgUrl: comp3,
      link: "https://github.com/nurhossainraton/CSE-472-Machine-Learning",
    },
    {
      title: "CSE-406-Computer-Security-Sessional",
      description:
        "Applied cryptographic techniques and built secure systems to protect data confidentiality and integrity. Click to see the repository",
      imgUrl: comp1,
      link: "https://github.com/nurhossainraton/CSE-406-Computer-Security-Sessional",
    },
    {
      title: "CSE-314-Operating-System-Sessional",
      description:
        "Programmed system-level applications to simulate the core functionalities of modern operating systems. Click to see the repository",
      imgUrl: comp3,
      link: "https://github.com/nurhossainraton/CSE-314-Operating-System-Sessional",
    },
    {
      title: "CSE-322: Computer-Networks-Sessional",
      description:
        "Constructed and tested network protocols and simulated real-world communication scenarios. Click to see the repository",
      imgUrl: background,
      link: "https://github.com/nurhossainraton/CSE-322---Computer-Networks-Sessional",
    },
    {
      title: "CSE 308: Software Engineering and Design Patterns",
      description:
        "Designed scalable software architectures and implemented reusable design patterns for robust solutions. Click to see the repository",
      imgUrl: comp3,
      link: "https://github.com/nurhossainraton/Software-Engineering-and-Design-Petterns",
    },
    {
      title: "CSE 326: Information System Design",
      description:
        "Architected and deployed comprehensive information systems to streamline data management processes. Click to see the repository",
      imgUrl: background,
      link: "https://github.com/nurhossainraton/CSE-326---Information-System-Design",
    },
    {
      title: "CSE-310: Compiler Design",
      description:
        "Constructed a compiler capable of translating high-level programming languages into machine code. Click to see the repository",
      imgUrl: comp1,
      link: "https://github.com/nurhossainraton/CSE-310-Compiler-Design",
    },
    {
      title: "CSE-410-Computer Graphics Sessional",
      description:
        "Designed and rendered visually engaging graphical applications using foundational graphics principles. Click to see the repository",
      imgUrl: background,
      link: "https://github.com/nurhossainraton/CSE-410-Computer-Graphics-Sessional",
    },
    {
      title: "CSE 218: Numerical Analysis (With Python)",
      description:
        "Analyzed mathematical problems and created Python-based solutions using numerical analysis techniques. Click to see the repository",
      imgUrl: comp3,
      link: "https://github.com/nurhossainraton/Numerical-Analysis-With-Python",
    },
    {
      title: "CSE 108: Object-Oriented Programming (Java Project)",
      description:
        "Created modular and intuitive Java applications by leveraging object-oriented programming concepts. Click to see the repository",
      imgUrl: comp1,
      link: "https://github.com/nurhossainraton/CSE-108-Java-Project",
    },
  ];
  
    
  

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>My Projects & Coursework</h2>
                  <p>
                    A showcase of my technical expertise and problem-solving
                    skills through a collection of personal projects,
                    collaborative endeavors, and academic coursework. These
                    experiences highlight my dedication to developing innovative
                    solutions and mastering industry-relevant technologies.
                  </p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Coursework</Nav.Link>
                      </Nav.Item>
                      
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects1.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                     
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
