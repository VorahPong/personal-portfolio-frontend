import Link from "next/link";
import Footer from "../components/main-page/footer";

export default function ResumePage() {
	const pdf = "/assets/resume/VorahPong-job-resume.pdf";

	return (
		<div className="min-h-screen flex flex-col bg-black">
			<main className="flex-1">
				{/* Header / Actions */}
				<div className="px-4 sm:px-8 lg:px-20 mt-6 sm:mt-10 text-white">
					<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
						<h1 className="text-base sm:text-lg">
							Last updated:{" "}
							<span className="font-semibold text-amber-300">May 23, 2026</span>
						</h1>

						<div className="flex flex-col sm:flex-row gap-3">
							<Link
								href={pdf}
								download
								className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-amber-300 text-black font-semibold hover:bg-amber-200 transition"
							>
								Download PDF
							</Link>

							<Link
								href={pdf}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-white/30 text-white hover:bg-white/10 transition"
							>
								Open in new tab
							</Link>
						</div>
					</div>
				</div>

				{/* PDF Viewer */}
				<div className="px-4 sm:px-8 lg:px-20 mt-6 sm:mt-10 mb-10">
					<object
						data={pdf}
						type="application/pdf"
						className="w-full max-w-5xl mx-auto h-[70vh] sm:h-[80vh] lg:h-[85vh] rounded-lg shadow bg-white"
					>
						{/* Fallback */}
						<div className="text-white text-base sm:text-lg">
							Unable to display the PDF.{" "}
							<a
								href={pdf}
								target="_blank"
								rel="noopener noreferrer"
								className="underline text-amber-300"
							>
								Open it in a new tab
							</a>
							.
						</div>
					</object>
				</div>
			</main>

			<Footer />
		</div>
	);
}
