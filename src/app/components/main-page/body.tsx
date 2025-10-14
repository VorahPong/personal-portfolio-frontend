import Image from "next/image";
import WorkTutorCard from "./work-experiences-cards/work-tutor-card";
import WorkAgripellerCard from "./work-experiences-cards/agripeller-card";

export default function Body() {
	return (
		<div className="w-full h-full flex flex-col items-center py-20">
			{/* Profile + Note card container */}
			<div className="flex flex-col md:flex-row items-center justify-center gap-10">
				{/* Profile Card */}
				<div className="relative w-80 h-56 bg-gray-100 border-4 border-yellow-400 rounded-xl shadow-lg flex flex-col items-center justify-center">
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
				</div>

				{/* Note Card */}
				<div className="bg-gray-100 w-96 h-56 border-2 border-gray-300 rounded-xl shadow-md p-6 flex flex-col justify-center">
					<h3 className="text-xl font-semibold text-gray-800 mb-2">About Me</h3>
					<p className="text-gray-600 leading-relaxed">
						Hello! I’m Vorahpong Mean, a Computer Science student passionate
						about full-stack development and UI/UX design. I enjoy building
						interactive web apps and learning new technologies.
					</p>
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
						src="/assets/briefcase_vector.svg"
						alt="Briefcase icon"
						width={48}
						height={48}
						className="hover:scale-110 transition-transform duration-300"
					/>
				</div>

				{/* Divider */}
				<div className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 w-[85%] h-0.5 mb-6 rounded-full shadow-md"></div>

				{/* Cards Section */}
				<WorkAgripellerCard/>
				<div className="mt-10"/>
				<WorkTutorCard/>

			</div>

			{/* Personal Projects */}
		</div>
	);
}
