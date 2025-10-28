"use client";

import Image from "next/image";
import { useState } from "react";
import MotionCard from "./motion-card";

export default function Project3DConnectFourCard() {
	const [showMore, setShowMore] = useState(false);

	return (
		<MotionCard className="w-[95%] bg-white/10 border border-amber-400 rounded-xl text-white p-5 shadow-md hover:shadow-amber-400/30 transition-all duration-300">
			{/* Header */}
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
				<h3 className="text-lg font-semibold tracking-wide">
					3D Connect Four Game{" "}
					<span className="font-semibold text-amber-300">(CS Capstone)</span> |{" "}
					<span className="font-semibold text-amber-300">
						Unity, C#, Blender
					</span>
				</h3>

				{/* Date if has */}
				<span className="text-sm text-gray-300 font-medium"></span>
			</div>

			{/* Divider */}
			<div className="w-full h-[1px] bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 mb-3 rounded-full opacity-70"></div>

			{/* Description */}
			<p className="text-sm leading-relaxed text-gray-200">
				Developed a 3D Connect Four game in Unity with custom models created in
				Blender. Implemented algorithms for tracking piece placements, checking
				winning conditions, and managing scores. Implement turn-based gameplay
				logic, ensuring correct player moves and preventing invalid actions.
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
				} animate-float-up mt-5 ml-auto mr-auto animate-bounce-slow hover:scale-110 transition-transform duration-700 hover-pause`}
				onClick={() => {
					setShowMore(true);
				}}
			/>

			{showMore && (
				<div className="flex flex-col items-center justify-center mt-5">
					<h3>Creating a game piece through Blender</h3>
					<Image
						src={"/assets/3Dconnectgame/3DConnectGameBlender.png"}
						alt={"Creating game piece with Blender"}
						width={600}
						height={600}
					/>

					<h3 className="mt-5">Final Outcome</h3>
					<Image
						src={"/assets/3Dconnectgame/3DConnectGamePlay.png"}
						alt={"3D Connect Four Game Image"}
						width={600}
						height={600}
					/>

					{/* Collapse Arrow feature */}
					<Image
						src="/assets/card/arrow_down_vector.svg"
						alt="Arrow Up to collapse"
						width={50}
						height={50}
						className={`animate-float-down mt-5 transform rotate-180 animate-bounce-slow hover:scale-110 transition-transform duration-700 hover-pause`}
						onClick={() => {
							setShowMore(false);
						}}
					/>
				</div>
			)}
		</MotionCard>
	);
}
