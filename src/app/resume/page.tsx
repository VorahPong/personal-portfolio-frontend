import Link from "next/link";
import Footer from "../components/main-page/footer";

export default function ResumePage() {
	const pdf = "/assets/resume/VorahPong-job-resume.pdf";
	return (
		<div className="min-h-screen flex flex-col bg-black">
			<main className="flex-1">
                
				<div className="mt-10 ml-20 text-white text-lg">
                    <h1>Last updated: <span className="font-semibold text-amber-300">Oct 15, 2025</span></h1>
                    <Link href={pdf} download className="underline">
                        Download PDF
                    </Link>
                </div>
                
				{/* Inline PDF viewer */}
				<object
					data={pdf}
					type="application/pdf"
					className="w-[80%] h-[85vh] ml-auto mr-auto mt-10 mb-10 rounded-lg shadow"
				>
					{/* Fallback if PDF can't be embedded */}
					<p className="text-lg text-white">
						Unable to display the PDF.{" "}
						<a
							href={pdf}
							target="_blank"
							rel="noopener noreferrer"
							className="underline"
						>
							Open it in a new tab
						</a>
						.
					</p>
				</object>
			</main>
			<Footer />
		</div>
	);
}
