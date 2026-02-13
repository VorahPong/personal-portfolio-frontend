import Footer from "../components/main-page/footer";
import Link from "next/link";
import NotesSection from "../components/leetcode-page/NotesSection";
import { notes } from "../components/leetcode-page/leetcode-note";

type LeetCodeStats = {
	userName: string;
	totalSolved: number;
	totalQuestions: number;
	easySolved: number;
	totalEasy: number;
	mediumSolved: number;
	totalMedium: number;
	hardSolved: number;
	totalHard: number;
	acceptanceRate: number;
	ranking: number;
};

export default async function LeetCodePage() {
	const res = await fetch(`https://leetcode-stats.tashif.codes/vorahpong`, {});

	if (!res.ok)
		return (
			<div className="p-4 border rounded-xl">LeetCode stats unavailable.</div>
		);

	const stats: LeetCodeStats & { status?: string; message?: string } =
		await res.json();

	const pct = Math.round((stats.totalSolved / stats.totalQuestions) * 100);

	return (
		<div className="min-h-screen flex flex-col bg-black/10">
			<main className="flex-1">
				<div className="bg-[#282828] m-10 border-amber-200 border-r-2 rounded-2xl">
					{/* Name */}
					<div className="text-white p-10">
						<div className="flex w-full flex-row justify-between">
							<div className="flex flex-col">
								<span className="text-2xl font-bold text-amber-300">Pong</span>
								<span className="text-white/50 text-sm">VORAHPONG</span>
							</div>

							<Link
								href="https://leetcode.com/u/VORAHPONG/"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LeetCode Profile"
								className="inline-flex items-center px-2 border border-orange-400 text-orange-400 rounded-lg backdrop-blur-sm hover:bg-orange-400 hover:text-black transition-all duration-300 text-sm font-medium"
							>
								View Profile
							</Link>
						</div>

						{/* Difficulty cards: 1 col on very small, 3 cols on sm+ */}
						<div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
							<div className="p-4 sm:p-3 rounded-xl border border-white/10 bg-green-900/60">
								<div className="font-semibold text-[#1cbbba]">Easy</div>
								<div className="mt-1">
									{stats.easySolved}/{stats.totalEasy}
								</div>
							</div>
							<div className="p-4 sm:p-3 rounded-xl border border-white/10 bg-yellow-900/60">
								<div className="font-semibold text-[#ffb700]">Medium</div>
								<div className="mt-1">
									{stats.mediumSolved}/{stats.totalMedium}
								</div>
							</div>
							<div className="p-4 sm:p-3 rounded-xl border border-white/10 bg-red-900/60">
								<div className="font-semibold text-[#f53838]">Hard</div>
								<div className="mt-1">
									{stats.hardSolved}/{stats.totalHard}
								</div>
							</div>
						</div>

						{/* Bottom row: stack on mobile */}
						<div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
							<div>
								<div className="text-2xl sm:text-3xl font-bold">
									{stats.totalSolved}{" "}
									<span className="text-sm sm:text-base font-medium opacity-70">
										solved
									</span>
								</div>
								<div className="mt-1 text-sm opacity-70">
									{stats.totalSolved}/{stats.totalQuestions} ({pct}%)
								</div>
							</div>

							<div className="text-sm opacity-80 sm:text-right leading-relaxed">
								Acceptance:{" "}
								<span className="font-medium">{stats.acceptanceRate}%</span>
								<br />
								Ranking:{" "}
								<span className="font-medium">
									{stats.ranking.toLocaleString()}
								</span>
							</div>
						</div>
					</div>
				</div>

				<NotesSection notes={notes} perPage={6} />
			</main>
			<Footer />
		</div>
	);
}
