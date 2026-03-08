"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavigationBar() {
	const pathname = usePathname();
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	return (
		<nav className="sticky top-0 z-60 w-full border-b-2 border-black flex justify-between items-center bg-white px-4 py-3 sm:py-1 text-lg font-semibold text-white shadow-md">
			{/* Left Section */}
			<div className="flex gap-8 items-center">
				{/* Settings Button */}
				<button
					onClick={() => setIsSidebarOpen(true)}
					aria-label="Open Settings Sidebar"
					className="p-2 rounded-md transition"
				>
					<Image
						src="/assets/setting-button2.png"
						alt="Settings Icon"
						width={30}
						height={30}
						className="hover:scale-110 transition-transform duration-300 w-7 h-7"
					/>
				</button>

				{/* Hide on Desktop screen size */}
				<div className="hidden sm:flex gap-2 text-black">
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
					<Link
						href="/leetcode"
						className={`transition-colors duration-200 px-2 ${
							pathname === "/leetcode"
								? "bg-amber-200 rounded-md"
								: "hover:text-yellow-400"
						}`}
					>
						LeetCode
					</Link>
					<Link
						href="/analysis"
						className={`transition-colors duration-200 px-2 ${
							pathname === "/analysis"
								? "bg-amber-200 rounded-md"
								: "hover:text-yellow-400"
						}`}
					>
						Analysis
					</Link>
				</div>

				{/* Mobile page label */}
				<div className="sm:hidden text-black truncate">
					{pathname === "/" ? "Home" : pathname.replace("/", "").toUpperCase()}
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
						width={35}
						height={35}
						className="hover:opacity-80 transition duration-200 hover:scale-110"
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
						className="hover:opacity-80 transition duration-200 hover:scale-110"
					/>
				</Link>
			</div>

			{/* Overlay (dim background when sidebar open) */}
			{isSidebarOpen && (
				<div
					className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
					onClick={() => setIsSidebarOpen(false)}
					aria-hidden="true"
				></div>
			)}

			{/* Sidebar */}
			<div
				className={`fixed top-0 left-0 h-full w-64 bg-[#0B0B0B] text-white shadow-2xl z-50 transform transition-transform duration-500 ease-in-out ${
					isSidebarOpen ? "translate-x-0" : "-translate-x-full"
				}`}
			>
				{/* Header */}
				<div className="flex justify-between items-center px-5 py-4 border-b border-gray-700">
					<h2 className="text-xl font-bold text-amber-300">Settings</h2>
					<button
						onClick={() => setIsSidebarOpen(false)}
						className="text-gray-400 hover:text-white transition"
					>
						✕
					</button>
				</div>

				{/* Sidebar Content */}
				<div className="flex flex-col px-5 py-4 gap-4">
					<Link
						href="/"
						onClick={() => setIsSidebarOpen(false)}
						className={`hover:text-amber-300 transition ${
							pathname === "/" ? "text-amber-300" : ""
						}`}
					>
						🏠 Home
					</Link>
					<Link
						href="/resume"
						onClick={() => setIsSidebarOpen(false)}
						className={`hover:text-amber-300 transition ${
							pathname === "/resume" ? "text-amber-300" : ""
						}`}
					>
						📄 Resume
					</Link>
					<Link
						href="/leetcode"
						onClick={() => setIsSidebarOpen(false)}
						className={`hover:text-amber-300 transition ${
							pathname === "/leetcode" ? "text-amber-300" : ""
						}`}
					>
						💻 LeetCode
					</Link>
					<Link
						href="/analysis"
						onClick={() => setIsSidebarOpen(false)}
						className={`hover:text-amber-300 transition ${
							pathname === "/analysis" ? "text-amber-300" : ""
						}`}
					>
						📊 Analysis
					</Link>

					<hr className="border-gray-700 my-2" />

					<Link
						href="https://github.com/VorahPong"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-amber-300 transition"
					>
						🐙 GitHub
					</Link>

					<Link
						href="https://www.linkedin.com/in/vorahpong-mean-44a960300/"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-amber-300 transition"
					>
						💼 LinkedIn
					</Link>
				</div>
			</div>
		</nav>
	);
}
