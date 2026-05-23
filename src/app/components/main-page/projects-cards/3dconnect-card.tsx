"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import MotionCard from "./motion-card";
import { useCollapseScroll } from "@/app/hooks/use-collapse-scroll";

export default function Project3DConnectFourCard() {
	const [showMore, setShowMore] = useState(false);

	// for collapse
	const cardRef = useRef<HTMLDivElement>(null);
	useCollapseScroll(showMore, cardRef, { behavior: "smooth", block: "start" }); // scroll back to when the card was after collapse

	return (
		<div
			ref={cardRef}
			className="scroll-mt-30 w-[95%] bg-black/30 border border-amber-400 rounded-xl text-white p-5 shadow-md hover:shadow-amber-400/30 transition-all duration-300 hover:scale-101"
		>
			<MotionCard>
				{/* Header */}
				<div className="flex flex-col gap-3 mb-2">
					<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3">
						<h3 className="text-lg font-semibold tracking-wide leading-relaxed max-w-3xl">
							3D Connect Four Game{" "}
							<span className="font-semibold text-amber-300">(CS Capstone)</span>{" "}
							|{" "}
							<span className="font-semibold text-amber-300">
								Unity, C#, Blender
							</span>
						</h3>

						<div className="flex items-center gap-3 self-start lg:self-center">
							<span className="px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full bg-amber-400/10 border border-amber-400/40 text-amber-200 whitespace-nowrap">
								2025
							</span>

							<a
								href="https://github.com/VorahPong/ConnectFourUnity"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-400/40 bg-green-400/10 text-sm font-semibold text-green-300 hover:bg-green-400/20 hover:text-white transition-all duration-300"
							>
								<span>🔗</span>
								<span>View on GitHub</span>
							</a>
						</div>
					</div>
				</div>
				{/* Divider */}
				<div className="w-full h-[1px] bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 mb-3 rounded-full opacity-70"></div>
				{/* Description */}
				<p className="text-sm leading-relaxed text-gray-200">
					Developed a 3D Connect Four game in Unity with custom models created
					in Blender. Implemented algorithms for tracking piece placements,
					checking winning conditions, and managing scores. Implement turn-based
					gameplay logic, ensuring correct player moves and preventing invalid
					actions.
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
		</div>
	);
}
