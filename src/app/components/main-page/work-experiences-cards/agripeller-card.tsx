"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import MotionCard from "../projects-cards/motion-card";
import { useCollapseScroll } from "@/app/hooks/use-collapse-scroll";

export default function WorkAgripellerCard() {
	const [showMore, setShowMore] = useState(false);

	// for collapse
	const cardRef = useRef<HTMLDivElement>(null);
	useCollapseScroll(showMore, cardRef, { behavior: "smooth", block: "start" }); // scroll back to when the card was after collapse

	return (
		<div
			ref={cardRef}
			className="scroll-mt-30 w-[95%] bg-green-500/10 border border-amber-400 rounded-xl text-white p-5 shadow-md hover:shadow-amber-400/30 transition-all duration-300 hover:scale-102"
		>
			<MotionCard>
				{/* Header */}
				<div className="flex flex-col gap-4 mb-3">
					<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3">
						<div>
							<h3 className="text-xl font-semibold tracking-wide leading-snug">
								Agripeller Startup Project
							</h3>
							<p className="mt-1 text-sm font-medium text-amber-300">
								E-Commerce Platform · Startup Team Collaboration
							</p>
						</div>

						<span className="px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full bg-amber-400/10 border border-amber-400/40 text-amber-200 whitespace-nowrap self-start lg:self-center">
							June – October 2025
						</span>
					</div>

					<div className="flex flex-wrap gap-2">
						{[
							"Next.js",
							"Tailwind CSS",
							"MongoDB",
							"Express.js",
							"Cloudinary",
							"AWS",
							"Figma Handoff",
							"Responsive UI",
						].map((tech) => (
							<span
								key={tech}
								className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 border border-white/15 text-gray-200"
							>
								{tech}
							</span>
						))}
					</div>
				</div>
				{/* Divider */}
				<div className="w-full h-[1px] bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 mb-3 rounded-full opacity-70"></div>
				{/* Description */}
				<p className="text-sm leading-relaxed text-gray-200">
					Collaborated with a distributed startup team to build an e-commerce platform
					designed to connect farmers and agricultural customers across Canada and
					Africa. Helped establish the initial project structure, GitHub repository,
					team setup, and development standards to support collaboration across the
					frontend and backend. Built responsive pages from Figma designs, implemented
					user authentication flows, created farmer and admin dashboard interfaces, and
					integrated MongoDB Atlas Search to improve product discovery. Also supported
					media upload workflows with Cloudinary and deployed the frontend on AWS so
					stakeholders could review progress throughout development.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5">
					<div className="rounded-lg border border-white/10 bg-white/5 p-3">
						<p className="text-sm font-semibold text-amber-300">Frontend Development</p>
						<p className="text-xs text-gray-300 mt-1 leading-relaxed">
							Translated Figma layouts into responsive dashboard and authentication
							interfaces using Next.js and Tailwind CSS.
						</p>
					</div>
					<div className="rounded-lg border border-white/10 bg-white/5 p-3">
						<p className="text-sm font-semibold text-amber-300">Authentication & Dashboards</p>
						<p className="text-xs text-gray-300 mt-1 leading-relaxed">
							Worked on registration, login, and role-based dashboard experiences for
							farmers and administrators.
						</p>
					</div>
					<div className="rounded-lg border border-white/10 bg-white/5 p-3">
						<p className="text-sm font-semibold text-amber-300">Search & Deployment</p>
						<p className="text-xs text-gray-300 mt-1 leading-relaxed">
							Integrated MongoDB Atlas Search and supported AWS frontend deployment for
							stakeholder demos and project reviews.
						</p>
					</div>
				</div>
				{/* Some Images to show the website */}
				<div className="mt-6 text-center">
					<p className="text-xl font-semibold text-white">Selected Features & Screenshots</p>
					<p className="text-sm text-gray-300 mt-1">
						A few areas I contributed to during design handoff, implementation, and testing.
					</p>
				</div>
				{/* Show more feature */}
				<Image
					src="/assets/card/arrow_down_vector.svg"
					alt="Arrow Up to collapse"
					width={50}
					height={50}
					className={`${
						showMore && "hidden"
					} animate-float-up mt-5 ml-auto mr-auto animate-bounce-slow hover:scale-110 transition-transform duration-700 hover-pause`}
					onClick={() => {
						setShowMore(true);
					}}
				/>
				{showMore && (
					<div className="mt-6 space-y-6">
						<div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-stretch">
							<div className="rounded-xl border border-white/10 bg-black/20 p-4 flex flex-col">
								<h3 className="font-semibold text-amber-300">Figma Dashboard Handoff</h3>
								<p className="text-sm text-gray-300 mt-2 leading-relaxed">
									Used the designer's Figma dashboard as the source of truth and translated
									it into a responsive interface while preserving spacing, hierarchy, and
									visual consistency.
								</p>
								<div className="mt-4 rounded-lg overflow-hidden border border-white/10 bg-white/5 flex-1 flex items-center justify-center">
									<Image
										src="/assets/agripeller/agripeller-dashboard-figma.png"
										alt="Agripeller Figma dashboard design"
										width={700}
										height={450}
										className="w-full h-auto object-contain"
									/>
								</div>
							</div>

							<div className="rounded-xl border border-white/10 bg-black/20 p-4 flex flex-col">
								<h3 className="font-semibold text-amber-300">Implemented Dashboard UI</h3>
								<p className="text-sm text-gray-300 mt-2 leading-relaxed">
									Built dashboard screens for product and account management, focusing on
									responsive structure, clear visual hierarchy, and usability for project
									stakeholders.
								</p>
								<div className="mt-4 rounded-lg overflow-hidden border border-white/10 bg-white/5 flex-1 flex items-center justify-center">
									<Image
										src="/assets/agripeller/agriepller-dashboard2.png"
										alt="Agripeller dashboard interface"
										width={700}
										height={450}
										className="w-full h-auto object-contain"
									/>
								</div>
							</div>
						</div>

						<div className="grid grid-cols-1 xl:grid-cols-[1.4fr_0.8fr] gap-6 items-stretch">
							<div className="rounded-xl border border-white/10 bg-black/20 p-4 flex flex-col">
								<h3 className="font-semibold text-amber-300">Login UI — Desktop</h3>
								<p className="text-sm text-gray-300 mt-2 leading-relaxed">
									Created a clean authentication layout with consistent form spacing,
									validation-friendly structure, and responsive behavior aligned with the
									Figma design.
								</p>
								<div className="mt-4 rounded-lg overflow-hidden border border-white/10 bg-white/5 flex-1 flex items-center justify-center">
									<Image
										src="/assets/agripeller/agripeller-login-desktop.png"
										alt="Agripeller desktop login page"
										width={700}
										height={450}
										className="w-full h-auto object-contain"
									/>
								</div>
							</div>

							<div className="rounded-xl border border-white/10 bg-black/20 p-4 flex flex-col">
								<h3 className="font-semibold text-amber-300">Login UI — Mobile</h3>
								<p className="text-sm text-gray-300 mt-2 leading-relaxed">
									Adapted the desktop experience into a mobile-friendly layout with stacked
									inputs, improved readability, and larger tap targets.
								</p>
								<div className="mt-4 rounded-lg overflow-hidden border border-white/10 bg-white/5 flex-1 flex items-center justify-center">
									<Image
										src="/assets/agripeller/agripeller-login-phone.png"
										alt="Agripeller mobile login page"
										width={320}
										height={520}
										className="max-h-[520px] w-auto object-contain"
									/>
								</div>
							</div>
						</div>

						{/* Collapse Arrow feature */}
						<Image
							src="/assets/card/arrow_down_vector.svg"
							alt="Arrow Up to collapse"
							width={50}
							height={50}
							className="animate-float-down mt-5 transform rotate-180 animate-bounce-slow hover:scale-110 transition-transform duration-700 hover-pause ml-auto mr-auto"
							onClick={() => {
								setShowMore(false);
							}}
						/>
					</div>
				)}
			</MotionCard>
		</div>
	);
}
