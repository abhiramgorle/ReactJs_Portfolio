import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
} from "react-icons/di";
import {
  SiFirebase,
  SiAngular,
  SiHasura,
  SiGithub,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={3} className="tech-icons">
      <SiAngular />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
      <SiGithub />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiPython />
        </Col>
      <Col xs={4} md={3} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
      <SiHasura />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiFirebase />
      </Col>
      
      
    </Row>
  );
}

export default Techstack;
