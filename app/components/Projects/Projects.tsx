import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { motion } from "framer-motion";

import ProjectCard from "./ProjectCard";

interface Project {
	logo: string;
	title: string;
	description: string;
	languages: string;
	backgroundColor: string;
	ghLink: string;
}

const projects: Project[] = [
	{
		logo: "/Projects/clay-factoria-logo.png",
		title: "Clay Factoria",
		description:
			"Clay Automatons reimagines automation in Hytale through charming, handcrafted creatures made from clay and Life Essence. Instead of wires or machinery, players command adorable Clay Kweebecs and Trorks—living helpers brought to life by Gaia’s lingering power. Using the Brush of Life, you can draw paths and guide these tiny companions as they perform simple tasks, acting as miniature rails, living pistons, and playful workers.",
		languages: "Java",
		backgroundColor: "#178600",
		ghLink: "https://github.com/ReaHytale/ClayFactoria",
	},
	{
		logo: "/Projects/niblet-logo.png",
		title: "Shy Mushroom Niblet",
		description:
			"Introduces a new NPC, Niblet, to the Forests of Hytale. Niblet is a timid creature who tends to scamper away when approached, adding a touch of charm and unpredictability to exploration. Players can earn Niblet’s trust by offering a Red Mushroom Cap—simply hold it and tap 'F' to tame him and welcome the lil’ guy as a loyal companion.",
		languages: "Java",
		backgroundColor: "#178600",
		ghLink: "https://github.com/willowaway/ShyMushroom",
	},
	{
		logo: "/Projects/clear-water-logo.png",
		title: "ClearWater",
		description:
			"ClearWater is a Unity puzzle game that challenges players to strategically rotate mazes, guiding a pool of water to the finish line. Navigating through unpure water sections is essential, as encountering dirty water reduces the water's purity level, impacting the player's star rating upon completing each level.",
		languages: "C#",
		backgroundColor: "#178600",
		ghLink: "https://github.com/willowaway/Clear-Water",
	},
	{
		logo: "/Projects/quest-continue-logo.png",
		title: "QuestContinue",
		description:
			"QuestContinue is a lightweight quality-of-life mod for Elder Scrolls Online that enhances your questing experience. Accepting a quest automatically adds it to the quest watch list and sets it to super tracked, ensuring a seamless transition to your next quest.",
		languages: "Lua",
		backgroundColor: "#000080",
		ghLink: "https://github.com/willowaway/Clear-Water",
	},
	{
		logo: "/Projects/dialektor-logo.png",
		title: "Dialektor",
		description:
			"Dialektor is a tool for recording audio and creating a ledger in order to study the changes over time.",
		languages: "JavaScript",
		backgroundColor: "#f1e05a",
		ghLink: "https://github.com/willowaway/Dialektor",
	},
	{
		logo: "/Projects/cocomo-logo.png",
		title: "Cocomo",
		description:
			"The model utilizes team size and lines of code as input variables, offering a flexible framework for project management. By performing basic or intermediate calculations, it provides valuable insights into staff size, effort estimates, and development time.",
		languages: "Kotlin",
		backgroundColor: "#A97BFF",
		ghLink: "https://github.com/willowaway/Cocomo",
	},
];

const Projects: React.FC = () => {
	return (
		<section id="project">
			<Container fluid className="project-section">
				<Container>
					{/* Header */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true, amount: 1 }}
					>
						<h1 className="project-heading">
							My Recent <strong className="purple">Works</strong>
						</h1>

						<p style={{ color: "white" }}>
							Here are a few personal projects I've worked on
							recently.
						</p>
					</motion.div>

					{/* Project cards */}
					{projects.map((project) => (
						<ProjectCard key={project.title} {...project} />
					))}

					{/* View more button */}
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
						viewport={{ once: true }}
						className="mt-4"
					>
						<Button
							variant="primary"
							href="https://github.com/willowaway"
							target="_blank"
							rel="noreferrer"
							style={{ maxWidth: "250px" }}
						>
							View More
						</Button>
					</motion.div>
				</Container>
			</Container>
		</section>
	);
};

export default Projects;
