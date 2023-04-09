import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import iot from "../../Assets/Projects/iot.png";
import twitter from "../../Assets/Projects/twitter.png";
import netflix from "../../Assets/Projects/netflix.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="RememberIt"
              description="A Photo Gallery and Album Viewing web app with a UI similar to Netflix developed to store and view our personal albums, built with react.js, Material-UI, BootStrap5 and Firebase. Have features that allow users to manage their photos and albums and share images, and support reactions to views."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Abhi's Tech Blog"
              description="My personal blog page build with Gatsby.js and GraphQl which takes the content from makdown files and renders it using Gatsby.js. Supports dark mode and easy to write blogs using markdown."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twitter}
              isBlog={false}
              title="Twitter Sentiment Analysis"
              description="An Machine Learning Web app that analyses Twitter tweets from real-time inputs from the user and Conducting Sentiment Analysis on the tweets acquired, showcasing the resulting analysis on the same page itself. Built it using React.js, Material.UI for the Front-end, Flask, Python for the Backend, and Used Vader Module for the sentiment Analysis."
              ghLink=""
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iot}
              isBlog={false}
              title="HealthCare IoT Project"
              description="This HealthCare IoT project is for an optimized healthcare monitoring system. To summarize it in a way where the controller collects data through sensors and sends it to the cloud. The data is then processed and examined for remote viewing. The analyzed data will be sent to the guardians, doctors, and family members for viewing."
              ghLink="https://github.com/abhiramgorle/SmartHealthcare-IoT-Project"
              demoLink="https://www.tinkercad.com/things/2uoqGiNoDGG-copy-of-smart-health-monitoring-system-mandiproject/editel?sharecode=aS7A3MhqMH9NHqq5BsHDIhsB-xyrxhdzcLJeucD9kfM"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink=""
              demoLink=""  
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
