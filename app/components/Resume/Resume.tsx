"use client";

import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import dynamic from "next/dynamic";

const PDFViewClient = dynamic(() => import("./PDFViewClient"), { ssr: false });

const Resume: React.FC = () => {
	const [width, setWidth] = useState<number>(1200);

	useEffect(() => {
		const handleResize = (): void => {
			setWidth(window.innerWidth);
		};

		handleResize();
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<section id="resume">
			<Container fluid className="resume-section">
				<Container>
					<Row
						style={{
							justifyContent: "center",
							position: "relative",
						}}
					>
						<Button
							variant="primary"
							href="/Resume/WillowHughesResumeLight.pdf"
							target="_blank"
							rel="noreferrer"
							style={{ maxWidth: "250px" }}
						>
							<AiOutlineDownload />
							&nbsp; Download Resume
						</Button>
					</Row>

					<Row className="resume w-100">
						<PDFViewClient file="/Resume/WillowHughesResumeDark.pdf" />
					</Row>

					<Row
						style={{
							justifyContent: "center",
							position: "relative",
						}}
					>
						<Button
							variant="primary"
							href="/Resume/WillowHughesResumeLight.pdf"
							target="_blank"
							rel="noreferrer"
							style={{ maxWidth: "250px" }}
						>
							<AiOutlineDownload />
							&nbsp; Download Resume
						</Button>
					</Row>
				</Container>
			</Container>
		</section>
	);
};

export default Resume;
