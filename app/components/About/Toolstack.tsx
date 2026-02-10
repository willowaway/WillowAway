"use client";

import React from "react";
import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import Image from "next/image";

import {
	SiPostman,
	SiSlack,
	SiIntellijidea,
	SiUnity,
	SiGithub,
} from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import { DiVisualstudio, DiGit } from "react-icons/di";

const Toolstack: React.FC = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 1.5 }}
			viewport={{ once: true }}
		>
			<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
				<Col xs={4} md={2} className="tech-icons">
					<DiVisualstudio />
				</Col>
				<Col xs={4} md={2} className="tech-icons">
					<SiGithub />
				</Col>
				<Col xs={4} md={2} className="tech-icons">
					<SiIntellijidea />
				</Col>
				<Col xs={4} md={2} className="tech-icons">
					<Image
						src="/Icons/cicd.svg"
						alt="Continuous Integration Continuous Deployment"
						width={90}
						height={90}
					/>
				</Col>
				<Col xs={4} md={2} className="tech-icons">
					<FaWindows />
				</Col>
				<Col xs={4} md={2} className="tech-icons">
					<SiPostman />
				</Col>
				<Col xs={4} md={2} className="tech-icons">
					<Image
						src="/Icons/browserstack.svg"
						alt="Browserstack"
						width={90}
						height={90}
					/>
				</Col>
				<Col xs={4} md={2} className="tech-icons">
					<SiUnity />
				</Col>
				<Col xs={4} md={2} className="tech-icons">
					<SiSlack />
				</Col>
				<Col xs={4} md={2} className="tech-icons">
					<DiGit />
				</Col>
			</Row>
		</motion.div>
	);
};

export default Toolstack;
