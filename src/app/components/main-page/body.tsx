import Image from "next/image";

export default function Body() {
	return (
		<div className="w-full h-full flex flex-col items-center py-20">
			{/* Profile + Note card container */}
		    <div className="flex flex-col md:flex-row items-center justify-center gap-10">
				{/* Profile Card */}
				<div className="relative w-80 h-56 bg-white border-4 border-yellow-400 rounded-xl shadow-lg flex flex-col items-center justify-center">
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
				<div className="bg-white w-96 h-56 border-2 border-gray-300 rounded-xl shadow-md p-6 flex flex-col justify-center">
					<h3 className="text-xl font-semibold text-gray-800 mb-2">About Me</h3>
					<p className="text-gray-600 leading-relaxed">
						Hello! I’m Vorahpong Mean, a Computer Science student passionate
						about full-stack development and UI/UX design. I enjoy building
						interactive web apps and learning new technologies.
					</p>
				</div>
			</div>

            {/* Work Experiences */}

            {/* Personal Projects */}
		</div>
	);
}
