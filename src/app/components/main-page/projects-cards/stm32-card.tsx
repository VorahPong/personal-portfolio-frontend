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
								STM32 Morse Code Transcriber
							</h3>
							<p className="mt-1 text-sm font-medium text-amber-300">
								Embedded Systems · Hardware-Level Programming
							</p>
						</div>

						<div className="flex items-center gap-3 self-start lg:self-center">
							<span className="px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full bg-amber-400/10 border border-amber-400/40 text-amber-200 whitespace-nowrap">
								2026
							</span>

							<a
								href="https://github.com/VorahPong/STM32-MorseCodeTranscribe"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-400/40 bg-green-400/10 text-sm font-semibold text-green-300 hover:bg-green-400/20 hover:text-white transition-all duration-300"
							>
								<span>🔗</span>
								<span>View on GitHub</span>
							</a>
						</div>
					</div>

					<div className="flex flex-wrap gap-2">
						{[
							"C",
							"STM32 HAL",
							"STM32CubeIDE",
							"GPIO",
							"Button Input",
							"7-Segment Display",
							"State Machine",
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
					An embedded systems project built on the STM32 Nucleo-F401RE using C
					and the STM32 HAL framework. The system reads Morse code input from
					the onboard B1 push button, classifies short and long presses as dots
					and dashes, stores the sequence in firmware, and displays the
					translated alphabet character on a common-anode 7-segment display.
				</p>

				<div className="mt-4 grid gap-3 lg:grid-cols-3">
					<div className="rounded-lg border border-white/10 bg-black/20 p-3">
						<p className="text-xs font-semibold uppercase tracking-wide text-amber-300">
							Input
						</p>
						<p className="mt-1 text-sm text-gray-300">
							Uses the onboard B1 button with software debouncing and
							press-duration timing to detect Morse code dots and dashes.
						</p>
					</div>

					<div className="rounded-lg border border-white/10 bg-black/20 p-3">
						<p className="text-xs font-semibold uppercase tracking-wide text-amber-300">
							Processing
						</p>
						<p className="mt-1 text-sm text-gray-300">
							Implements a small state machine to track button states, timing
							gaps, and Morse sequences before translating them into letters.
						</p>
					</div>

					<div className="rounded-lg border border-white/10 bg-black/20 p-3">
						<p className="text-xs font-semibold uppercase tracking-wide text-amber-300">
							Output
						</p>
						<p className="mt-1 text-sm text-gray-300">
							Controls GPIO pins connected to a common-anode 7-segment display
							to show the translated alphabet character.
						</p>
					</div>
				</div>

				<div className="mt-4 rounded-lg border border-amber-400/20 bg-amber-400/5 p-4">
					<p className="text-sm font-semibold text-amber-200">
						Current project status
					</p>
					<p className="mt-1 text-sm leading-relaxed text-gray-300">
						This project is actively being developed. The current version
						focuses on GPIO-based button input, Morse pattern storage, button
						timing logic, and 7-segment display output. I plan to add a demo
						video and hardware photos soon.
					</p>
				</div>

				{/* Show more feature */}
				{!showMore && (
					<Image
						src="/assets/card/arrow_down_vector.svg"
						alt="Arrow down to view project details"
						width={50}
						height={50}
						className="animate-float-up mt-5 ml-auto mr-auto animate-bounce-slow hover:scale-110 transition-transform duration-700 hover-pause cursor-pointer"
						onClick={() => {
							setShowMore(true);
						}}
					/>
				)}
				{showMore && (
					<div className="flex flex-col items-center justify-center mt-5">
						<div className="w-full rounded-xl border border-white/10 bg-black/20 p-4">
							<h4 className="text-lg font-semibold text-amber-200">
								Project Details
							</h4>

							<ul className="mt-3 space-y-2 text-sm leading-relaxed text-gray-300 list-disc list-inside">
								<li>
									Designed GPIO mappings for the B1 button, LD2 indicator LED,
									and 7-segment display segments.
								</li>
								<li>
									Used `HAL_GetTick()` to measure button hold duration and
									distinguish dots from dashes.
								</li>
								<li>
									Created a button state machine for debounce handling, press
									tracking, and character gap detection.
								</li>
								<li>
									Implemented common-anode 7-segment logic where GPIO RESET
									turns a segment on and GPIO SET turns it off.
								</li>
								<li>
									Practiced embedded debugging using STM32CubeIDE, ST-LINK, and
									live variable inspection.
								</li>
							</ul>
						</div>

						<div className="mt-5 w-full rounded-xl border border-white/10 bg-black/20 p-4 shadow-lg shadow-black/20">
							<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 mb-4">
								<div>
									<h4 className="text-lg font-semibold text-amber-200">
										Hardware Demo Video
									</h4>
									<p className="mt-1 text-sm leading-relaxed text-gray-300">
										Demonstrates the STM32 board reading Morse code button input,
										processing the sequence in firmware, and showing the translated
										character on the 7-segment display.
									</p>
								</div>

								<span className="self-start lg:self-center rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-200 whitespace-nowrap">
									STM32 Demo
								</span>
							</div>

							<div className="overflow-hidden rounded-xl border border-amber-400/20 bg-black">
								<video
									controls
									preload="metadata"
									playsInline
									className="aspect-video w-full bg-black object-contain"
								>
									<source
										src="/assets/STM32/STM32Demonstrate.mp4"
										type="video/mp4"
									/>
									<source
										src="/assets/STM32/STM32Demonstrate.mp4"
										type="video/mp4"
									/>
									Your browser does not support the video tag.
								</video>
							</div>

						
						</div>

						<Image
							src="/assets/card/arrow_down_vector.svg"
							alt="Arrow up to collapse project details"
							width={50}
							height={50}
							className="animate-float-down mt-5 transform rotate-180 animate-bounce-slow hover:scale-110 transition-transform duration-700 hover-pause cursor-pointer"
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
