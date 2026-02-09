"use client";

import { FC } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import { motion } from "framer-motion"; 

const Intro: FC = () => {
  return (
    <Container fluid className="intro-section" id="intro">
      <Container>
        <Row>
          <Col md={8} className="intro-description">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 3 }}
            >
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="green"> INTRODUCE </span> MYSELF
              </h1>
            </motion.div>

            <div className="intro-body">
              <motion.p
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                I'm a creative individual who thrives on translating my imaginative
                concepts into the realm of software engineering.
                <br />
                <br />
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                I am fluent in
                <i>
                  <b className="blue"> C#, ASP.NET, JavaScript, and TypeScript.</b>
                </i>
                <br />
                <br />
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                My field of interest is building new
                <i>
                  <b className="blue"> Web Applications and Products </b> in areas
                  related to <b className="blue">E-Commerce and Education.</b>
                </i>
                <br />
                <br />
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                Whenever possible, I apply my passion for developing products using
                <i>
                  <b className="blue"> Modern JavaScript Libraries and Frameworks </b>
                </i>
                like <i><b className="blue">React.js</b></i>.
              </motion.p>
            </div>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <Image
                src="/avatar.png"
				width="252"
				height="252"
                alt="avatar"
                className="img-fluid"
                style={{ maxHeight: "350px" }}
              />
            </Tilt>
          </Col>
        </Row>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <Row>
            <Col md={12} className="intro-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="green">connect</span> with me
              </p>

              <ul className="intro-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/willowaway"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour intro-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>

                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/willowaway/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour intro-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>

                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/willow_away"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour intro-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </Container>
  );
};

export default Intro;