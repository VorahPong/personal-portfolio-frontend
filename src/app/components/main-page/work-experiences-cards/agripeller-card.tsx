"use client";

import Image from "next/image";
import { useState } from "react";
import MotionCard from "../projects-cards/motion-card";

export default function WorkAgripellerCard() {
	const [showMore, setShowMore] = useState(false);

	return (
		<MotionCard className="w-[95%] bg-white/10 border border-amber-400 rounded-xl text-white p-5 shadow-md hover:shadow-amber-400/30 transition-all duration-300">
			{/* Header */}
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
				<h3 className="text-lg font-semibold tracking-wide">
					Agripeller Startup Project |{" "}
					<span className="font-semibold text-amber-300">
						Next.js, Tailwind, MongoDB, Express, Cloudinary, AWS
					</span>
				</h3>
				<span className="text-sm text-gray-300 font-medium">
					June 2025 – Present
				</span>
			</div>

			{/* Divider */}
			<div className="w-full h-[1px] bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 mb-3 rounded-full opacity-70"></div>

			{/* Description */}
			<p className="text-sm leading-relaxed text-gray-200">
				Collaborated with a distributed team to develop an e-commerce platform
				serving farmers in Canada and Africa. Set up the project, including
				GitHub repo, initial installation, and security rules for team
				collaboration. Implemented front-end components aligned with the UI/UX
				designer’s plans to maintain visual consistency. Developed key features
				such as user registration, login, and dashboards for both farmers and
				admins. Integrated MongoDB Atlas Search to enable fast and relevant
				product searching. Deployed the frontend part on AWS to support
				development visibility and review by the project manager.
			</p>
			{/* Some Images to show the website */}
			<p className="mt-5 text-2xl">Some Features I had worked on:</p>

			{/* Show more feature */}
			<Image
				src="/assets/card/arrow_down_vector.svg"
				alt="Arrow Up to collapse"
				width={50}
				height={50}
				className={`${
					showMore && "hidden"
				} mt-5 ml-auto mr-auto animate-bounce-slow hover:scale-110 transition-transform duration-700`}
				onClick={() => {
					setShowMore(true);
				}}
			/>

			{showMore && (
				<div className="flex flex-col items-center justify-center mt-5">
					<h3>Dashboard</h3>
					<Image
						src={"/assets/agripeller/agriepller-dashboard2.png"}
						alt={"Agripeller Dashboard Page"}
						width={600}
						height={600}
					/>

					<h3 className="mt-5">Login (Desktop)</h3>
					<Image
						src={"/assets/agripeller/agripeller-login-desktop.png"}
						alt={"Agripeller Dashboard Page"}
						width={600}
						height={600}
					/>
					<h3 className="mt-5">Login (Mobile)</h3>
					<Image
						src={"/assets/agripeller/agripeller-login-phone.png"}
						alt={"Agripeller Dashboard Page"}
						width={300}
						height={300}
					/>

					{/* Collapse Arrow feature */}
					<Image
						src="/assets/card/arrow_down_vector.svg"
						alt="Arrow Up to collapse"
						width={50}
						height={50}
						className={`mt-5 transform rotate-180 animate-bounce-slow hover:scale-110 transition-transform duration-700`}
						onClick={() => {
							setShowMore(false);
						}}
					/>
				</div>
			)}
		</MotionCard>
	);
}
