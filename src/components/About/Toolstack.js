import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiPostman, SiNetlify, SiGraphql } from "react-icons/si";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

const icons = [SiVisualstudiocode, SiPostman, SiGraphql, SiNetlify];

function Toolstack() {
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
            <Col xs={4} md={2} className="tech-icons">
              <Icon />
            </Col>
          </motion.div>
        ))}
      </Row>
    </motion.div>
  );
}

export default Toolstack;
