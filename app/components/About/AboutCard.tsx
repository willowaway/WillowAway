"use client";

import React from "react";
import Card from "react-bootstrap/Card";
import { motion } from "framer-motion";

const fadeLeft = {
	initial: { opacity: 0, x: -40 },
	whileInView: { opacity: 1, x: 0 },
	transition: { duration: 1 },
	viewport: { once: true },
};

const AboutCard: React.FC = () => {
	return (
		<Card className="quote-card-view">
			<Card.Body>
				<blockquote className="blockquote mb-0">
					<motion.div {...fadeLeft} style={{ textAlign: "justify" }}>
						I am a dedicated and versatile Software Engineer with{" "}
						<span className="green">8+</span> years of experience in
						the industry.
						<br />
						<br />
						Over the years, I've honed my skills in both front-end
						and back-end technologies, cultivating a passion for
						crafting innovative solutions to complex challenges.
						<br />
						<br />
						Apart from coding, some other activities that I love to
						do!
					</motion.div>

					<ul>
						{[
							"Acrylic Painting",
							"Playing Games",
							"Writing Poetry",
						].map((item) => (
							<motion.li
								key={item}
								{...fadeLeft}
								className="about-activity"
							>
								&#8226; {item}
							</motion.li>
						))}
					</ul>

					<motion.p {...fadeLeft} className="about-poem">
						Diversity paints the canvas of our shared reality. Each
						hue a unique identity.
						<br />
						Inclusion weaves the tapestry, transcending society,
						inviting harmony into the symphony of our community.
					</motion.p>

					<footer className="blockquote-footer">Willow</footer>
				</blockquote>
			</Card.Body>
		</Card>
	);
};

export default AboutCard;
