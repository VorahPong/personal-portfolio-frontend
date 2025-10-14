export default function WorkTutorCard() {
	return (
		<div className="w-[95%] bg-white/10 border border-amber-400 rounded-xl text-white p-5 shadow-md hover:shadow-amber-400/30 transition-all duration-300">
			{/* Header */}
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
				<h3 className="text-lg font-semibold tracking-wide">
					Tutor — Cameron University | Lawton, OK
				</h3>
				<span className="text-sm text-gray-300 font-medium">
					Feb 2025 – Present
				</span>
			</div>

			{/* Divider */}
			<div className="w-full h-[1px] bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 mb-3 rounded-full opacity-70"></div>

			{/* Description */}
			<p className="text-sm leading-relaxed text-gray-200">
				Provide one-on-one tutoring to undergraduate students in{" "}
				<span className="font-semibold text-amber-300">Data Structures</span>,{" "}
				<span className="font-semibold text-amber-300">C++</span>,{" "}
				<span className="font-semibold text-amber-300">Algorithm Analysis</span>
				, and other core computer science subjects. Assist faculty with exam
				proctoring and student support during testing sessions.
			</p>
		</div>
	);
}
