"use client";

import React from "react";
import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import Image from "next/image";

import {
	DiJavascript1,
	DiReact,
	DiPython,
	DiGit,
	DiJava,
	DiHtml5,
} from "react-icons/di";
import { SiMysql, SiTypescript, SiStorybook } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { TbSql } from "react-icons/tb";

const Techstack: React.FC = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 1.5 }}
			viewport={{ once: true }}
		>
			<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
				<Col xs={4} md={2} className="tech-icons">
					<TbBrandCSharp />
				</Col>
				<Col xs={4} md={2} className="tech-icons">
					<Image
						src="/Icons/playwright.svg"
						alt="Playwright"
						width={100}
						height={100}
					/>
				</Col>

				<Col xs={4} md={2} className="tech-icons">
					<DiPython />
				</Col>

				<Col xs={4} md={2} className="tech-icons">
					<DiReact />
				</Col>

				<Col xs={4} md={2} className="tech-icons">
					<SiStorybook />
				</Col>
				<Col xs={4} md={2} className="tech-icons">
					<TbSql />
				</Col>

				<Col xs={4} md={2} className="tech-icons">
					<Image
						src="/Icons/pom.svg"
						alt="Page Object Model"
						width={100}
						height={100}
					/>
				</Col>

				<Col xs={4} md={2} className="tech-icons">
					<DiJava />
				</Col>

				<Col xs={4} md={2} className="tech-icons">
					<SiTypescript />
				</Col>

				<Col xs={4} md={2} className="tech-icons">
					<DiJavascript1 />
				</Col>
			</Row>
		</motion.div>
	);
};

export default Techstack;
