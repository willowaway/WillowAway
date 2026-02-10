import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

interface ProjectCardProps {
	logo: string;
	title: string;
	description: string;
	languages: string;
	backgroundColor: string;
	ghLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	logo,
	title,
	description,
	languages,
	backgroundColor,
	ghLink,
}) => {
	return (
		<motion.div
			initial={{ opacity: 0, x: -80 }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true, amount: 0.5 }}
		>
			<Card className="project-card-view mb-4 ps-2 pt-2">
				<Row>
					<Col md="auto">
						<Card.Img
							className="project-card-img"
							src={logo}
							alt="card-img"
						/>
					</Col>

					<Col>
						<Card.Body>
							<Card.Title className="project-card-title">
								{title}
							</Card.Title>

							<Card.Text style={{ textAlign: "justify" }}>
								{description}
							</Card.Text>
						</Card.Body>
					</Col>
				</Row>

				<Card.Footer className="project-card-footer">
					<Row className="align-items-center">
						<Col className="d-flex justify-content-start">
							<span className="project-card-language">
								<span
									className="language-color"
									style={{ backgroundColor }}
								/>
								{languages}
							</span>
						</Col>

						<Col className="text-end">
							<Button
								variant="primary"
								href={ghLink}
								target="_blank"
								rel="noreferrer"
							>
								<BsGithub /> &nbsp; GitHub
							</Button>
						</Col>
					</Row>
				</Card.Footer>
			</Card>
		</motion.div>
	);
};

export default ProjectCard;
