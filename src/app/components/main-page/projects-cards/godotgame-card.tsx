"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import MotionCard from "./motion-card";
import { useCollapseScroll } from "@/app/hooks/use-collapse-scroll";

export default function GodotCard() {
	const [showMore, setShowMore] = useState(false);

	// for collapse
	const cardRef = useRef<HTMLDivElement>(null);
	useCollapseScroll(showMore, cardRef, { behavior: "smooth", block: "start" });

	return (
		<div
			ref={cardRef}
			className="scroll-mt-30 w-[95%] bg-green-800/40 border border-amber-400 rounded-xl text-white p-5 shadow-md hover:shadow-amber-400/30 transition-all duration-300"
		>
			<MotionCard>
				{/* Header */}
				<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
					<h3 className="text-lg font-semibold tracking-wide">
						"Journey's Ahead" 2D Game Adventure Game{" "}
						<span className="font-semibold text-amber-300">
							(CU ACM Club Project)
						</span>{" "}
						|{" "}
						<span className="font-semibold text-amber-300">
							GDScript, Godot
						</span>
					</h3>
					{/* Github link */}
					<a
						href="https://github.com/Solistis/Godot_Platformer"
						target="_blank"
						rel="noopener noreferrer"
						className="text-sm text-green-300 font-bold hover:text-white"
					>
						🔗 View on GitHub
					</a>
				</div>
				{/* Divider */}
				<div className="w-full h-[1px] bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 mb-3 rounded-full opacity-70"></div>
				{/* Description */}
				<p className="text-sm leading-relaxed text-gray-200">
					Collaborated on a 2D game project called{" "}
					<strong>"Journey’s Ahead"</strong>, designed to engage kids and
					students at the Cameron Library. The game is an adventure-style
					platformer inspired by games like Mario. My contributions included
					implementing monster hitboxes, adding sound effects such as footsteps,
					jumping, dashing, and combat sounds, and designing a winter-themed map
					using pre-made backgrounds and ice block assets.
				</p>
				{/* Some Images to show the website */}

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
						<h3>Game Menu</h3>
						<Image
							src={"/assets/journeyaheadgame/menu.png"}
							alt={"menu of journey ahead game"}
							width={600}
							height={600}
						/>
						<h3 className="mt-5">Look of the game</h3>
						<Image
							src={"/assets/journeyaheadgame/gamelook.png"}
							alt={"gameplay of journey ahead game"}
							width={600}
							height={600}
						/>

						{/* <p className="mt-5 text-2xl">Some Features I had worked on:</p> */}

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
		</div>
	);
}
