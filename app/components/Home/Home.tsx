"use client";

import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

import Intro from "@/Home/Intro";

import { motion } from "framer-motion";
import Projects from "@/Projects/Projects";
import About from "@/About/About";
import Resume from "@/Resume/Resume";

const Home: React.FC = () => {
	const [open, setOpen] = useState(false);

	return (
		<Container fluid className="home p-0">
			<section className="home-section" id="home">
				<Container className="home-content">
					<Row>
						<Col md={7} className="home-header">
							<motion.div
								initial={{ opacity: 0, y: 40 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 2 }}
							>
								<h1
									style={{ paddingBottom: 15 }}
									className="heading"
								>
									Hi There!{" "}
									<span
										className="wave"
										role="img"
										aria-label="wave"
									>
										👋🏻
									</span>
								</h1>

								<h1 className="heading-name">
									I am
									<strong className="main-name">
										{" "}
										Willow Hughes
									</strong>
								</h1>
							</motion.div>
						</Col>

						<Col md={5} style={{ paddingBottom: 20 }}>
							<motion.div
								initial={{ opacity: 0, y: 0 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 2 }}
							>
								<div
									className="position-relative w-100 mx-auto"
									style={{
										maxWidth: "450px",
										height: "300px",
									}}
								>
									<Image
										src="/hand-coding.svg"
										alt="hand coding illustration"
										fill
										className="object-fit-contain"
									/>
								</div>
							</motion.div>
						</Col>
					</Row>
				</Container>
			</section>
			<Intro />
			<Projects />
			<About />
			<Resume />
		</Container>
	);
};

export default Home;
