"use client";

import { FC } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

import {
	AiFillGithub,
	AiOutlineTwitter,
	AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import { motion } from "framer-motion";

const Intro: FC = () => {
	return (
		<section id="intro">
			<Container fluid className="intro-section">
				<Container>
					<Row>
						<Col md={8} className="intro-description">
							<motion.div
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 2 }}
								viewport={{ once: true, amount: 1 }}
							>
								<h1 style={{ fontSize: "2.6em" }}>
									LET ME{" "}
									<span className="green"> INTRODUCE </span>{" "}
									MYSELF
								</h1>
							</motion.div>

							<div className="intro-body">
								<motion.div
									initial={{ opacity: 0, x: -80 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5 }}
								>
									I am a{" "}
									<b className="blue">
										Software Development Engineer in Test
										(SDET){" "}
									</b>
									with a strong background in full-stack
									software engineering, specializing in
									building scalable, maintainable automation
									for complex web applications.
									<br />
									<br />
								</motion.div>
								<motion.div
									initial={{ opacity: 0, x: -80 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5, delay: 0.2 }}
								>
									I am fluent in
									<i>
										<b className="blue">
											{" "}
											Playwright, C#, ASP.NET, JavaScript,
											and TypeScript.
										</b>
									</i>{" "}
									with extensive experience building UI
									automation frameworks for enterprise-scale
									systems.
									<br />
									<br />
								</motion.div>

								<motion.div
									initial={{ opacity: 0, x: -80 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5, delay: 0.4 }}
								>
									I focus on reducing manual testing through
									robust UI automation while continuing to
									build and maintain production-ready features
									as a{" "}
									<i>
										<b className="blue">
											Full-Stack Engineer
										</b>
									</i>
									.
									<br />
									<br />
								</motion.div>

								<motion.div
									initial={{ opacity: 0, x: -80 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5, delay: 0.6 }}
								>
									My experience across front-end, back-end,
									and test automation enables me to deliver
									reliable systems with{" "}
									<i>
										<b className="blue">
											Quality Assurance
										</b>
									</i>{" "}
									built in from the start.
								</motion.div>
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
						transition={{ duration: 0.7 }}
					>
						<Row>
							<Col md={12} className="intro-social">
								<h1>FIND ME ON</h1>
								<p>
									Feel free to{" "}
									<span className="green">connect</span> with
									me
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
		</section>
	);
};

export default Intro;
