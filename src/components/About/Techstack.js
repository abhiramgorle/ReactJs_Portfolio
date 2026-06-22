import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact, DiNodejs, DiPython } from "react-icons/di";
import { SiFirebase, SiAngular, SiHasura, SiGithub } from "react-icons/si";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

const icons = [
  SiAngular, DiReact, SiGithub, DiPython,
  CgCPlusPlus, DiJavascript1, DiNodejs, SiHasura, SiFirebase,
];

function Techstack() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {icons.map((Icon, i) => (
          <motion.div key={i} variants={item}>
            <Col xs={4} md={3} className="tech-icons">
              <Icon />
            </Col>
          </motion.div>
        ))}
      </Row>
    </motion.div>
  );
}

export default Techstack;
