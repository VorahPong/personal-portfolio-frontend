import Image from "next/image";
import Link from "next/link";

export default function NavigationBar() {
	return (
		<nav className="w-full flex justify-between items-center bg-black px-8 py-4 text-lg font-semibold text-white shadow-md">
			{/* Left Section */}
			<div className="flex gap-8 items-center">
				<div className="flex items-center gap-2">
					<Image
						src="/assets/setting-button.svg"
						alt="Settings Icon"
						width={20}
						height={20}
						className="hover:scale-120 transition-transform duration-300"
					/>
				</div>

				<div className="flex gap-6">
					<Link
						href="/"
						className="hover:text-yellow-400 transition-colors duration-200"
					>
						Home
					</Link>
					<Link
						href="/resume"
						className="hover:text-yellow-400 transition-colors duration-200"
					>
						Resume
					</Link>
				</div>
			</div>

			{/* Right Section */}
			<div className="flex gap-6 items-center">
				<Link
					href="https://github.com/VorahPong"
					rel="noopener noreferrer"
					target="_blank"
					aria-label="GitHub Profile"
				>
					<Image
						src="/assets/logo/GitHubIcon.svg"
						alt="GitHub Icon"
						width={30}
						height={30}
						className="hover:opacity-80 transition-opacity duration-200"
					/>
				</Link>

				<Link
					href="https://www.linkedin.com/in/vorahpong-mean-44a960300/"
					rel="noopener noreferrer"
					target="_blank"
					aria-label="LinkedIn Profile"
				>
					<Image
						src="/assets/logo/LinkedInIcon.svg"
						alt="LinkedIn Icon"
						width={30}
						height={30}
						className="hover:opacity-80 transition-opacity duration-200"
					/>
				</Link>
			</div>
		</nav>
	);
}
