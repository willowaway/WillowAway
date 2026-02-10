"use client";

import React, { useState } from "react";
import {
	Container,
	Button,
	Form,
	Toast,
	ToastContainer,
} from "react-bootstrap";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_willowawaygmail";
const TEMPLATE_ID = "template_contactme";
const PUBLIC_KEY = "xF9KZ_-4RU9Kp6WWo";

const Contact: React.FC = () => {
	const [showToast, setShowToast] = useState<boolean>(false);
	const [toastMessage, setToastMessage] = useState<string>("");
	const [toastHeader, setToastHeader] = useState<string>("");
	const [toastVariant, setToastVariant] = useState<
		"bg-success" | "bg-danger"
	>("bg-success");

	const toggleToast = (): void => setShowToast(!showToast);

	const handleSubmit = async (
		event: React.SubmitEvent<HTMLFormElement>,
	): Promise<void> => {
		event.preventDefault();

		const form = event.currentTarget;
		const email = (form.elements.namedItem("email") as HTMLInputElement)
			.value;
		const message = (
			form.elements.namedItem("message") as HTMLTextAreaElement
		).value;

		try {
			await emailjs.send(
				SERVICE_ID,
				TEMPLATE_ID,
				{
					from_email: email,
					message,
				},
				PUBLIC_KEY,
			);

			setToastVariant("bg-success");
			setToastHeader("Message Sent");
			setToastMessage("Thank you for contacting me!");
			setShowToast(true);
			form.reset();
		} catch (error) {
			console.error(error);
			setToastVariant("bg-danger");
			setToastHeader("Message Failed to Send");
			setToastMessage(
				"Email services are down. Please email me directly at willowawayart@gmail.com",
			);
			setShowToast(true);
		}
	};

	return (
		<Container id="contact" fluid className="contact">
			<Container>
				<h1>Get in Touch</h1>

				<Form data-bs-theme="dark" onSubmit={handleSubmit}>
					<Form.Group className="mb-3">
						<Form.Control
							name="email"
							type="email"
							placeholder="Email address"
							required
						/>
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Control
							name="message"
							as="textarea"
							placeholder="Message"
							rows={6}
							required
						/>
					</Form.Group>

					<Button className="contact-send-btn" type="submit">
						Send
					</Button>
				</Form>

				<ToastContainer
					className="p-3"
					position="bottom-center"
					style={{ zIndex: 1 }}
				>
					<Toast
						show={showToast}
						onClose={toggleToast}
						delay={500}
						autohide
						data-bs-theme="dark"
						className={`text-white ${toastVariant}`}
					>
						<Toast.Header>
							<strong className="me-auto">{toastHeader}</strong>
						</Toast.Header>
						<Toast.Body
							style={{
								backgroundColor:
									toastVariant == "bg-success"
										? "var(--dark-green)"
										: "var(--red)",
							}}
						>
							{toastMessage}
						</Toast.Body>
					</Toast>
				</ToastContainer>
			</Container>
		</Container>
	);
};

export default Contact;
