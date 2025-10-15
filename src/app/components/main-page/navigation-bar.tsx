"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationBar() {
	const pathname = usePathname();
	return (
		<nav className="w-full flex justify-between items-center bg-white px-8 py-4 text-lg font-semibold text-white shadow-md">
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

				<div className="flex gap-2 text-black">
					<Link
						href="/"
						className={`transition-colors duration-200 px-2 ${
							pathname === "/"
								? "bg-amber-200 rounded-md"
								: "hover:text-yellow-400"
						}`}
					>
						Home
					</Link>
					<Link
						href="/resume"
						className={`transition-colors duration-200 px-2 ${
							pathname === "/resume"
								? "bg-amber-200 rounded-md"
								: "hover:text-yellow-400"
						}`}
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
						src="/assets/logo/github.svg"
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
						src="/assets/logo/linkedin_vector.svg"
						alt="LinkedIn Icon"
						width={35}
						height={35}
						className="hover:opacity-80 transition-opacity duration-200"
					/>
				</Link>
			</div>
		</nav>
	);
}
