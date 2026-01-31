import Footer from "../components/main-page/footer";
import Link from "next/link";
import {notes, type Note} from "../components/leetcode-page/leetcode-note";

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
	const res = await fetch(
		`https://leetcode-stats.tashif.codes/vorahpong`,
		{},
	);

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
								rel="noopener noreferrer"
								target="_blank"
								aria-label="LeetCode Profile"
							>
								<span className="text-gray-300 text-sm hover:underline">
									https://leetcode.com/u/VORAHPONG/
								</span>
							</Link>
						</div>

						<div>
							<p className="text-[#bebfc2] text-1xl mt-5">
								Rank{" "}
								<span className="text-white font-semibold">
									{stats.ranking}
								</span>
							</p>
						</div>

						<div className="mt-4 grid grid-cols-3 gap-3 text-sm">
							<div className="p-3 rounded-xl border bg-green-900">
								<div className="font-semibold text-[#1cbbba]">Easy</div>
								<div>
									{stats.easySolved}/{stats.totalEasy}
								</div>
							</div>
							<div className="p-3 rounded-xl border bg-yellow-900">
								<div className="font-semibold text-[#ffb700]">Medium</div>
								<div>
									{stats.mediumSolved}/{stats.totalMedium}
								</div>
							</div>
							<div className="p-3 rounded-xl border bg-red-900">
								<div className="font-semibold text-[#f53838]">Hard</div>
								<div>
									{stats.hardSolved}/{stats.totalHard}
								</div>
							</div>
						</div>

						<div className="flex flex-row justify-between">
							<div>
								<div className="mt-4 text-3xl font-bold">
									{stats.totalSolved}{" "}
									<span className="text-base font-medium opacity-70">
										solved
									</span>
								</div>
								<div className="mt-1 text-sm opacity-70">
									{stats.totalSolved}/{stats.totalQuestions} ({pct}%)
								</div>
							</div>
							<div className="mt-4 text-sm opacity-80">
								Acceptance:{" "}
								<span className="font-medium">{stats.acceptanceRate}%</span> •
								Ranking:{" "}
								<span className="font-medium">
									{stats.ranking.toLocaleString()}
								</span>
							</div>
						</div>
					</div>
				</div>

				<section className="bg-[#282828] m-10 border-amber-200 border-r-2 rounded-2xl">
					<div className="p-8">
						<div className="flex items-center justify-between">
							<h2 className="text-2xl font-bold text-amber-300">Notes</h2>
							<span className="text-sm text-white/50">
								{notes.length} {notes.length === 1 ? "note" : "notes"}
							</span>
						</div>

						<div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
							{notes.map((n) => (
								<div
									key={n.id}
									className="rounded-xl border border-white/10 bg-black/20 p-5 hover:bg-black/30 transition"
								>
									<div className="flex items-start justify-between gap-3">
										<div>
											<div className="text-white font-semibold">{n.title}</div>
											{n.topic && (
												<div className="mt-1 text-xs text-white/50">
													{n.topic}
												</div>
											)}
										</div>

										{n.date && (
											<span className="text-xs text-white/40 whitespace-nowrap">
												{n.date}
											</span>
										)}
									</div>

									<p className="mt-4 text-sm text-[#bebfc2] leading-relaxed">
										{n.takeaway}
									</p>

									{n.link && (
										<Link
											href={n.link}
											target="_blank"
											rel="noopener noreferrer"
											className="mt-4 inline-block text-sm text-amber-200 hover:underline"
										>
											View problem →
										</Link>
									)}
								</div>
							))}
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
