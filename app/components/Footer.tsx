"use client";

import { FC } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer: FC = () => {
	const year = new Date().getFullYear();

	return (
		<Container fluid className="footer">
			<Row>
				<Col md="4" className="footer-copywright">
					<h3>Designed and Developed by Willow Hughes</h3>
				</Col>

				<Col md="4" className="footer-copywright">
					<h3>Copyright © {year}</h3>
				</Col>

				<Col md="4" className="footer-body">
					<ul className="footer-icons">
						<li className="social-icons">
							<a
								href="https://github.com/willowaway"
								style={{ color: "white" }}
								target="_blank"
								rel="noopener noreferrer"
							>
								<AiFillGithub />
							</a>
						</li>

						<li className="social-icons">
							<a
								href="https://www.linkedin.com/in/willowaway/"
								style={{ color: "white" }}
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaLinkedinIn />
							</a>
						</li>

						<li className="social-icons">
							<a
								href="https://www.instagram.com/willow_away/"
								style={{ color: "white" }}
								target="_blank"
								rel="noopener noreferrer"
							>
								<AiFillInstagram />
							</a>
						</li>
					</ul>
				</Col>
			</Row>
		</Container>
	);
};

export default Footer;
