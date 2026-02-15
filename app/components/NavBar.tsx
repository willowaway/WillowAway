"use client";

import { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Link from "next/link";
import Image from "next/image";
import {
	AiOutlineMessage,
	AiOutlineHome,
	AiOutlineFundProjectionScreen,
	AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

const NavBar: React.FC = () => {
	const [expand, setExpand] = useState<boolean>(false);
	const [navColour, setNavColour] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setNavColour(window.scrollY >= 20);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<Navbar
			expanded={expand}
			fixed="top"
			expand="md"
			className={navColour ? "sticky" : "navbar"}
		>
			<Container>
				<Navbar.Brand as={Link} href="/" className="d-flex" data-testid="home-logo">
					<Image
						src="/logo.png"
						width="417"
						height="250"
						alt="brand"
						className="img-fluid logo"
						priority
					></Image>
				</Navbar.Brand>

				<Navbar.Toggle
					aria-controls="responsive-navbar-nav"
					onClick={() => setExpand(expand ? false : true)}
				>
					<span></span>
					<span></span>
					<span></span>
				</Navbar.Toggle>
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ms-auto" defaultActiveKey="#home">
						<Nav.Item>
							<Link
								href="/#home"
								className="nav-link"
								onClick={() => setExpand(false)}
							>
								<AiOutlineHome
									style={{ marginBottom: "2px" }}
								/>{" "}
								Home
							</Link>
						</Nav.Item>

						<Nav.Item>
							<Link
								href="/#project"
								className="nav-link"
								onClick={() => setExpand(false)}
							>
								<AiOutlineFundProjectionScreen
									style={{ marginBottom: "2px" }}
								/>{" "}
								Projects
							</Link>
						</Nav.Item>

						<Nav.Item>
							<Link
								href="/#about"
								className="nav-link"
								onClick={() => setExpand(false)}
							>
								<AiOutlineUser
									style={{ marginBottom: "2px" }}
								/>{" "}
								About
							</Link>
						</Nav.Item>

						<Nav.Item>
							<Link
								href="/#resume"
								className="nav-link"
								onClick={() => setExpand(false)}
							>
								<CgFileDocument
									style={{ marginBottom: "2px" }}
								/>{" "}
								Resume
							</Link>
						</Nav.Item>

						<Nav.Item>
							<Link
								className="nav-link"
								href="/contact"
								onClick={() => setExpand(false)}
							>
								<AiOutlineMessage
									style={{ marginBottom: "2px" }}
								/>{" "}
								Contact
							</Link>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
