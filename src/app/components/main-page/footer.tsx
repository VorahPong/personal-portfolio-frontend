export default function Footer() {
	return (
		<footer className="w-full bg-amber-100 text-gray-700 py-4 flex flex-col justify-center items-center shadow-inner">
			<div className="flex flex-col sm:flex-row gap-3 sm:gap-8 items-center justify-center">
				<span className="text-sm sm:text-base font-medium">
					✉️{"	"}
					<a
						href="mailto:vorahpongmean@gmail.com"
						className="hover:text-amber-600 transition-colors duration-200"
					>
						vorahpongmean@gmail.com
					</a>
					{"	"}✉️
				</span>
			</div>

			<div className="mt-2">
				<span className="text-xs sm:text-sm text-gray-600">
					© {new Date().getFullYear()}{" "}
					<span className="font-semibold text-gray-900">Vorahpong Mean</span> —
					Thank you for visiting!
				</span>
			</div>
		</footer>
	);
}
