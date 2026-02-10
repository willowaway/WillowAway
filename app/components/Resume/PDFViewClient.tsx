"use client";

import { Document, Page, pdfjs } from "react-pdf";
import { useEffect, useRef, useState } from "react";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	"pdfjs-dist/build/pdf.worker.min.mjs",
	import.meta.url,
).toString();

interface PDFViewClientProps {
	file: string;
}

const PDFViewClient: React.FC<PDFViewClientProps> = ({ file }) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [containerWidth, setContainerWidth] = useState<number>(800);

	useEffect(() => {
		const resizeObserver = new ResizeObserver((entries) => {
			if (entries[0]) {
				const width = entries[0].contentRect.width;
				setContainerWidth(width);
			}
		});

		if (containerRef.current) {
			resizeObserver.observe(containerRef.current);
		}

		return () => resizeObserver.disconnect();
	}, []);

	return (
		<div ref={containerRef} className="w-100 d-flex justify-content-center">
			<Document file={file}>
				<Page pageNumber={1} width={containerWidth * 0.95} />
			</Document>
		</div>
	);
};

export default PDFViewClient;
