import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/3.jpg";
import projImg2 from "../assets/img/4.jpg";
import projImg3 from "../assets/img/5.jpg";
import projImg4 from "../assets/img/6.jpg";
import projImg5 from "../assets/img/7.jpg";
import projImg6 from "../assets/img/8.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "AR & VR ",
      description: "Understand Augmented reality (AR) Virtual reality (VR) in Depth",
      imgUrl: projImg1,
    },
    {
      title: "Robotics",
      description: "Learn the Building Blocks for a Career in Robotics. Gain experience programming robots to perform in situations and for use in crisis management",
      imgUrl: projImg2,
    },
    {
      title: "Web Technology",
      description: "This course covers HTML5, CSS3, JS, ES6, Node, APIs, Mobile & more!",
      imgUrl: projImg3,
    },
    {
      title: "Blockchain",
      description: "Build a blockchain and cryptocurrency from scratch using Python",
      imgUrl: projImg4,
    },
    {
      title: "AI",
      description: "Combine the power of Data Science, Machine Learning and Deep Learning to create powerful AI for Real-World applications!",
      imgUrl: projImg5,
    },
    {
      title: "Android Developement",
      description: "Learn Android App Development From Beginner to Advanced Developer",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                  <h2>Projects</h2>
                  <p>It allows students to  manage obstacles more effectively, often learning from failure and making adjustments until they're satisfied with their work. It make students more inclined to be scientifically minded. Projects make them innovative.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content className={isVisible ? "animate__animated animate__slideInUp" : ""} id="slideInUp" >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>For any suggestions and queries please contact us <br />Thank You</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>For any suggestions and queries please contact us <br /> Thank You</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}