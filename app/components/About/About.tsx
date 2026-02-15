"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

import Techstack from "./Techstack";
import AboutCard from "./AboutCard";
import Toolstack from "./Toolstack";

const About: React.FC = () => {
	return (
		<section id="about">
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <motion.h1
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                style={{ fontSize: "2.1em", paddingBottom: "20px" }}
              >
                <strong className="green">Who</strong> am I?
              </motion.h1>

              <AboutCard />
            </Col>

            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <motion.img
                src="/woman-coding.svg"
                alt="woman coding"
                className="img-fluid"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              />
            </Col>
          </Row>

          <h1 className="project-heading">
            Professional <strong className="purple">Skillset</strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>

          <Toolstack />
        </Container>
      </Container>
    </section>
	);
};

export default About;
