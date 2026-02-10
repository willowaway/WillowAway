import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/style.css";
import "@/index.css";
import "@/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "@/components/BootstrapClient";
import Navbar from "@/components/NavBar";
import Footer from "@/Footer";
import ScrollToTop from "@/ScrollToTop";
import ScrollToHash from "@/ScrollToHash";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Willow Hughes's Digital Portfolio",
	description:
		"Software Development Engineer in Test and Full Stack Engineer",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" data-scroll-behavior="smooth">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<BootstrapClient />
				<div className="App">
					<Navbar />
					<ScrollToHash />
					<ScrollToTop />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
