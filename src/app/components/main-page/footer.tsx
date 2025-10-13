export default function Footer() {
	return (
		<footer className="w-full bg-amber-100 text-gray-700 py-4 flex justify-center items-center shadow-inner">
			<span className="text-sm font-medium">
				© {new Date().getFullYear()} Vorahpong Mean — Thank you for visiting!
			</span>
		</footer>
	);
}
