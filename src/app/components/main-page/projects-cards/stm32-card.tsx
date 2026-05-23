"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import MotionCard from "./motion-card";
import { useCollapseScroll } from "@/app/hooks/use-collapse-scroll";

export default function STM32Card() {
	const [showMore, setShowMore] = useState(false);

	// for collapse
	const cardRef = useRef<HTMLDivElement>(null);
	useCollapseScroll(showMore, cardRef, { behavior: "smooth", block: "start" });

	return (
		<div
			ref={cardRef}
			className="scroll-mt-30 w-[95%] bg-green-800/40 border border-amber-400 rounded-xl text-white p-5 shadow-md hover:shadow-amber-400/30 transition-all duration-300 hover:scale-101"
		>
			<MotionCard>
				{/* Header */}
				<div className="flex flex-col gap-4 mb-3">
					<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3">
						<div>
							<h3 className="text-xl font-semibold tracking-wide leading-snug">
								STM32 Microcontroller Project
							</h3>
							<p className="mt-1 text-sm font-medium text-amber-300">
								Embedded Systems · Hardware-Level Programming
							</p>
						</div>

						<div className="flex items-center gap-3 self-start lg:self-center">
							<span className="px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full bg-amber-400/10 border border-amber-400/40 text-amber-200 whitespace-nowrap">
								2026
							</span>

							{/* <a
								href="https://github.com/VorahPong/CU_PLUS_WEBAPP"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-400/40 bg-green-400/10 text-sm font-semibold text-green-300 hover:bg-green-400/20 hover:text-white transition-all duration-300"
							>
								<span>🔗</span>
								<span>View on GitHub</span>
							</a> */}
						</div>
					</div>

					<div className="flex flex-wrap gap-2">
						{[
							"C",
							"STM32 HAL",
							"STM32CubeIDE",
							"GPIO",
							"Timers",
							"PWM",
							"ST-LINK Debugger",
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
					Built and tested embedded firmware on the STM32 Nucleo-F401RE to strengthen
					my understanding of low-level programming, peripheral configuration, and
					hardware debugging. Implemented GPIO-based LED control, timer-driven delays,
					PWM LED dimming, and Morse code signaling patterns using C and the STM32 HAL
					framework. Configured STM32 peripherals such as GPIO pins and TIM2 through
					STM32CubeIDE, then flashed and debugged the firmware on physical hardware
					using the ST-LINK debugger. This project helped me practice writing code that
					interacts directly with microcontroller hardware and validating behavior
					through hands-on testing.
				</p>
				{/* Some Images to show the website */}

				{/* Show more feature */}
				{/* <Image
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
				/> */}
				{showMore && (
					<div className="flex flex-col items-center justify-center mt-5">
						{/* <h3>Dashboard</h3>
						<Image
							src={"/assets/cuplus/dashboard.png"}
							alt={"dashboard of CU Plus"}
							width={600}
							height={600}
						/> */}
						{/* <h3 className="mt-5">Look of the game</h3>
						<Image
							src={"/assets/journeyaheadgame/gamelook.png"}
							alt={"gameplay of journey ahead game"}
							width={600}
							height={600}
						/> */}

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
