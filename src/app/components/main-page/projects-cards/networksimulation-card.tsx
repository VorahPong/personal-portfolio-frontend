// do not remove
// src/app/components/main-page/projects-cards/networksimulation-card.tsx
"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import MotionCard from "./motion-card";
import { useCollapseScroll } from "@/app/hooks/use-collapse-scroll";

export default function NetworkSimulationCard() {
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
							C++ Network Simulation & Traffic Analysis Lab
						</h3>
						<p className="mt-1 text-sm font-medium text-amber-300">
							Systems Programming · UDP Networking · Traffic Analysis
						</p>
					</div>

					<div className="flex items-center gap-3 self-start lg:self-center">
						<span className="px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full bg-amber-400/10 border border-amber-400/40 text-amber-200 whitespace-nowrap">
							2026
						</span>

						<a
							href="https://github.com/VorahPong/network-sim-lab"
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
						"C++17",
						"Python",
						"CMake",
						"Linux/POSIX",
						"UDP Sockets",
						"Docker",
						"tcpdump",
						"Wireshark",
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
				Built a Dockerized C++ UDP network simulation to model multiple nodes
				communicating with a central monitoring process. The simulation includes
				radar, sensor, and command nodes that send structured UDP messages using
				Linux/POSIX socket APIs. Used CMake to configure and build the project in a
				Linux environment, captured traffic with tcpdump, and inspected packet
				payloads in Wireshark to validate protocol behavior. Also developed a
				Python log analyzer to summarize network activity and detect abnormal
				patterns such as unknown nodes, missing expected nodes, and unusually high
				message volume.
			</p>

			<div className="mt-4 grid gap-3 lg:grid-cols-3">
				<div className="rounded-lg border border-white/10 bg-black/20 p-3">
					<p className="text-xs font-semibold uppercase tracking-wide text-amber-300">UDP Simulation</p>
					<p className="mt-1 text-sm text-gray-300">
						Created simulated network nodes that send structured UDP traffic to a
						central monitoring process.
					</p>
				</div>
				<div className="rounded-lg border border-white/10 bg-black/20 p-3">
					<p className="text-xs font-semibold uppercase tracking-wide text-amber-300">Packet Inspection</p>
					<p className="mt-1 text-sm text-gray-300">
						Captured and reviewed packet traffic using tcpdump and Wireshark to
						verify message flow and payload data.
					</p>
				</div>
				<div className="rounded-lg border border-white/10 bg-black/20 p-3">
					<p className="text-xs font-semibold uppercase tracking-wide text-amber-300">Log Analysis</p>
					<p className="mt-1 text-sm text-gray-300">
						Built a Python analyzer to summarize traffic patterns and flag missing,
						unknown, or unusually active nodes.
					</p>
				</div>
			</div>

			<div className="mt-4 rounded-lg border border-amber-400/20 bg-amber-400/5 p-4">
				<p className="text-sm font-semibold text-amber-200">
					Current project status
				</p>
				<p className="mt-1 text-sm leading-relaxed text-gray-300">
					The core simulation is complete and demonstrates UDP communication,
					packet capture, and log analysis. I plan to add screenshots from
					Wireshark, sample analyzer output, and a short demo walkthrough to make
					the project easier to review visually.
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
							System Architecture
						</h4>
						<p className="mt-2 text-sm leading-relaxed text-gray-300">
							The simulation is organized around several independent node types. Radar,
							sensor, and command nodes send UDP datagrams to a monitoring service,
							which logs incoming messages and helps validate communication behavior.
							Running the system in Docker makes each node easier to isolate, test, and
							reproduce across environments.
						</p>

						<div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-3 text-center">
							{[
								"Radar Node",
								"Sensor Node",
								"Command Node",
								"Monitor Process",
							].map((node) => (
								<div
									key={node}
									className="rounded-lg border border-amber-400/20 bg-white/5 p-3 text-sm font-semibold text-gray-200"
								>
									{node}
								</div>
							))}
						</div>
					</div>

					<div className="mt-5 grid w-full grid-cols-1 xl:grid-cols-2 gap-6 items-stretch">
						<div className="rounded-xl border border-white/10 bg-black/20 p-4 flex flex-col">
							<h4 className="font-semibold text-amber-300">Traffic Capture Workflow</h4>
							<p className="text-sm text-gray-300 mt-2 leading-relaxed">
								Used tcpdump to capture UDP traffic generated by the simulation and
								opened the capture in Wireshark to inspect packet headers, ports, and
								payload contents.
							</p>
							<div className="mt-4 rounded-lg border border-white/10 bg-white/5 p-4 flex-1">
								<pre className="overflow-x-auto text-xs leading-relaxed text-gray-200">
									{`tcpdump -i any udp -w capture.pcap
wireshark capture.pcap`}
								</pre>
							</div>
						</div>

						<div className="rounded-xl border border-white/10 bg-black/20 p-4 flex flex-col">
							<h4 className="font-semibold text-amber-300">Python Log Analyzer</h4>
							<p className="text-sm text-gray-300 mt-2 leading-relaxed">
								The analyzer reads generated simulation logs, summarizes message counts,
								and identifies abnormal behavior that could indicate missing nodes,
								unexpected senders, or traffic spikes.
							</p>
							<div className="mt-4 rounded-lg border border-white/10 bg-white/5 p-4 flex-1">
								<ul className="text-xs leading-relaxed text-gray-300 space-y-2">
									<li>• Detects unknown nodes sending unexpected traffic</li>
									<li>• Flags expected nodes that stop reporting</li>
									<li>• Highlights unusually high message volume</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="mt-5 w-full rounded-xl border border-white/10 bg-black/20 p-4">
						<h4 className="font-semibold text-amber-300">Why This Project Matters</h4>
						<p className="text-sm text-gray-300 mt-2 leading-relaxed">
							This project demonstrates practical systems-level experience beyond a
							standard web application. It combines Linux development, socket
							programming, Docker-based testing, packet inspection, and Python tooling,
							which are useful skills for software engineering roles involving
							networking, defense systems, infrastructure, embedded systems, or
							backend services.
						</p>
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