"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ScrollToHash = () => {
	const pathname = usePathname();
	useEffect(() => {
		if (typeof window !== "undefined") {
			const hash = window.location.hash;
			if (hash) {
				// Wait for the page to render, then attempt to scroll
				setTimeout(() => {
					const element = document.getElementById(hash.substring(1));
					if (element) {
						element.scrollIntoView({ behavior: "smooth" });
					}
				}, 100);
			}
		}
	}, [pathname]);

	return null;
};

export default ScrollToHash;
