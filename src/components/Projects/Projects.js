import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import iot from "../../Assets/Projects/iot.png";
import twitter from "../../Assets/Projects/twitter.png";
import netflix from "../../Assets/Projects/netflix.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import geofence from "../../Assets/Projects/geofence.webp"
import gcommunity from "../../Assets/Projects/gcommunity.png"
import pdfchatbot from "../../Assets/Projects/pdfchatbot.png"

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
              imgPath={geofence}
              isBlog={false}
              title="Geo-Fence"
              description="Geo-Fence makes searching for places quick and easy by adding drawing capabilities to the map like a fence. It makes finding rentals in a particular area or searching for restaurants just a click away! "
              ghLink="https://github.com/abhiramgorle/Geo-Fence"
              demoLink="https://geo-fence-chi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gcommunity}
              isBlog={false}
              title="G-Community"
              description=" G-Community is a platform for students to connect with their peers and share their knowledge. It is a platform for the Exclusive Student Clubs and Communities of Gitam Three Campuses. "
              ghLink="https://github.com/abhiramgorle/G-Community"
              demoLink="https://g-community-a714f.web.app/landing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pdfchatbot}
              isBlog={false}
              title="PDF-Chatbot"
              description=" A Chatbot that can extract text from a PDF file and answer questions based on the content of the PDF. It is built using Python, Flask, and Streamlit."
              ghLink="https://github.com/abhiramgorle/Pdf_Chatbot"
              demoLink="https://csdproject.streamlit.app/"
            />
          </Col>
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Angular Task Manager"
              description="My personal Task Manager build with AngularJs and Json server which takes the tasks and arranges it in a prioritised manner. It also has a feature to add new tasks and delete the completed tasks. "
              ghLink="https://github.com/abhiramgorle/Angular-Task-Manager/"
              demoLink="https://angular-task-manager-ten.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twitter}
              isBlog={false}
              title="Twitter Sentiment Analysis"
              description="An Machine Learning Web app that analyses Twitter tweets from real-time inputs from the user and Conducting Sentiment Analysis on the tweets acquired, showcasing the resulting analysis on the same page itself. Built it using React.js, Material.UI for the Front-end, Flask, Python for the Backend, and Used Vader Module for the sentiment Analysis."
              ghLink="https://github.com/abhiramgorle/Twitter_Sentiment_Analysis"
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
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
