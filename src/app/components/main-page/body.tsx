"use client";

import Image from "next/image";
import WorkTutorCard from "./work-experiences-cards/work-tutor-card";
import WorkAgripellerCard from "./work-experiences-cards/agripeller-card";
import ProjectCapstoneCard from "./projects-cards/capstone-card";
import { motion } from "framer-motion";
import Project3DConnectFourCard from "./projects-cards/3dconnect-card";
import GodotCard from "./projects-cards/godotgame-card";
import { useState } from "react";

export default function Body() {
	const [showMoreProfile, setShowMoreProfile] = useState(false);
	const [showMoreDescription, setShowMoreDescription] = useState(false);

	return (
		<motion.div
			initial={{ opacity: 0, y: 60 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
			className="w-full h-full flex flex-col items-center py-10 sm:px-0 sm:py-20"
		>
			{/* Profile + Note card container */}
			<div className="w-full overflow-x-hidden">
				<div className="flex flex-col md:flex-row items-center justify-center gap-10">
					{/* Profile Card */}
					<motion.div
						initial={{ opacity: 0, x: -120 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{ duration: 4, ease: [0.16, 1, 0.3, 1] }}
						className="relative w-full md:w-85 h-fit py-5 bg-gray-100 border-4 border-yellow-400 rounded-xl shadow-lg flex flex-col items-center justify-center hover:scale-102 transition"
					>
						<div className="w-28 h-28 rounded-full overflow-hidden border-2 border-gray-300">
							<Image
								src="/assets/vorahpongPhoto.svg"
								alt="Pong's graduation picture"
								width={112}
								height={112}
								className="object-cover"
							/>
						</div>
						<p className="mt-3 text-lg font-semibold text-gray-800">
							Vorahpong Mean
						</p>
						<p className="text-sm text-gray-500">Cameron University</p>
						<button
							onClick={() => {
								setShowMoreProfile(true);
							}}
							className={` ${
								showMoreProfile ? "hidden" : "block"
							} text-xs text-gray-500 mt-2 hover:scale-110 transition`}
						>
							<span>See more...</span>
						</button>
						{showMoreProfile ? (
							<>
								<div className="w-full mt-3 h-px bg-black/30 shadow-2xl" />
								<p className="text-sm mt-3 text-gray-700 m-4">
									Age: 21 <br />
									School: Cameron University <br />
									Graduation: May 2026 <br />
									Focus: Full-Stack & Front-End Development <br />
									Tech Stack: Next.js, React, Tailwind, MongoDB, PostgreSQL <br />
									Location: Lawton, OK (Open to move)
								</p>
								<button
									className="w-full mt-2 text-xs text-gray-500 hover:scale-110 transition"
									onClick={() => {
										setShowMoreProfile(false);
									}}
								>
									<span>Show less...</span>
								</button>
							</>
						) : (
							<></>
						)}
					</motion.div>
					{/* Note Card */}
					<motion.div
						initial={{ opacity: 0, x: 120 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{ duration: 4, ease: [0.16, 1, 0.3, 1] }}
						className="bg-gray-100 w-96 h-fit py-5 border-2 border-gray-300 rounded-xl shadow-md p-6 flex flex-col justify-center hover:scale-102 transition"
					>
						<h3 className="text-xl font-semibold text-gray-800 mb-2">About Me</h3>
						<p className="text-gray-600 leading-relaxed">
							Hello! I’m Vorahpong Mean, a Computer Science student passionate
							about full-stack development and UI/UX design. I enjoy building
							interactive web apps and learning new technologies.
						</p>
						{/* <button
							className={`${showMoreDescription ? 'hidden' : 'block'} text-xs text-gray-500 mt-2 hover:scale-110`}
							onClick={() => {
								setShowMoreDescription(true);
							}}
						>
							<span>See more...</span>
						</button> */}
					</motion.div>
				</div>
			</div>

			{/* Work Experiences */}
			<div className="bg-[#0B0B0B] w-[95%] mt-20 rounded-2xl flex flex-col items-center py-10 shadow-lg">
				{/* Header Section */}
				<div className="flex items-center justify-center gap-4 mb-4 bg-amber-700 py-2 px-6 rounded-2xl shadow-amber-900 shadow-md">
					<span className="text-white text-2xl font-semibold tracking-wide">
						Work Experiences
					</span>
					<Image
						src="/assets/card/briefcase_vector.svg"
						alt="Briefcase icon"
						width={48}
						height={48}
						className="hover:scale-110 transition-transform duration-300"
					/>
				</div>

				{/* Divider */}
				<div className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 w-[85%] h-0.5 mb-6 rounded-full shadow-md"></div>

				{/* Cards Section with Stagger motion*/}
				<WorkAgripellerCard />
				<div className="mt-10" />
				<WorkTutorCard />
			</div>

			{/* Personal Projects */}
			<div className="bg-cyan-900 w-[95%] mt-20 rounded-2xl flex flex-col items-center py-10 shadow-lg">
				{/* Header Section */}
				<div className="flex items-center justify-center gap-4 mb-4 bg-cyan-700 py-2 px-6 rounded-2xl shadow-cyan-600 shadow-md">
					<span className="text-white text-2xl font-semibold tracking-wide">
						Projects
					</span>
					<Image
						src="/assets/card/folder_vector.svg"
						alt="Briefcase icon"
						width={48}
						height={48}
						className="hover:scale-110 transition-transform duration-300"
					/>
				</div>

				{/* Divider */}
				<div className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 w-[85%] h-0.5 mb-6 rounded-full shadow-md"></div>

				{/* Cards Section */}
				<GodotCard />
				<div className="mt-10" />
				<ProjectCapstoneCard />
				<div className="mt-10" />
				<Project3DConnectFourCard />
			</div>
		</motion.div>
	);
}
