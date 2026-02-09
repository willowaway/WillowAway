"use client";

import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

import Intro from "@/Home/Intro";

import { motion } from "framer-motion";

const Home: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="home">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3.5 }}
      >
        <Container fluid className="home-section" id="home">
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-label="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name">
                  I am
                  <strong className="main-name"> Willow Hughes</strong>
                </h1>
              </Col>

              <Col md={5} style={{ paddingBottom: 20 }}>
                <Image
                  src="/hand-coding.svg"
				  width="500"
				  height="500"
                  alt="hand coding illustration"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                />
              </Col>
            </Row>
          </Container>
        </Container>
      </motion.div>
      <Intro />
    </section>
  );
};

export default Home;