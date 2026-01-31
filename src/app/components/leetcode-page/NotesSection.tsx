"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Note } from "./leetcode-note";

type Props = {
	notes: Note[];
	perPage?: number;
};

export default function NotesSection({ notes, perPage = 6 }: Props) {
	const [query, setQuery] = useState("");
	const [page, setPage] = useState(1);

	const filtered = useMemo(() => {
		const q = query.trim().toLowerCase();
		if (!q) return notes;

		return notes.filter((n) => {
			const title = n.title.toLowerCase();
			const topic = (n.topic ?? "").toLowerCase();

			// If takeaway is JSX, it won't be searchable here.
			// If takeaway is string, we can include it.
			const takeaway =
				typeof n.takeaway === "string" ? n.takeaway.toLowerCase() : "";

			return title.includes(q) || topic.includes(q) || takeaway.includes(q);
		});
	}, [notes, query]);

	// reset to page 1 whenever search changes
	// (simple way without useEffect)
	const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
	const safePage = Math.min(page, totalPages);

	const start = (safePage - 1) * perPage;
	const current = filtered.slice(start, start + perPage);

	const goPrev = () => setPage((p) => Math.max(1, p - 1));
	const goNext = () => setPage((p) => Math.min(totalPages, p + 1));

	return (
		<section className="bg-[#282828] m-10 border-amber-200 border-r-2 rounded-2xl">
			<div className="p-8">
				<div className="flex items-center justify-between gap-4">
					<h2 className="text-2xl font-bold text-amber-300">Notes</h2>
					<span className="text-sm text-white/50">
						{filtered.length} result{filtered.length === 1 ? "" : "s"}
					</span>
				</div>

				{/* Search */}
				<div className="mt-4">
					<input
						value={query}
						onChange={(e) => {
							setQuery(e.target.value);
							setPage(1);
						}}
						placeholder="Search by title or topic..."
						className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-2 text-white placeholder:text-white/40 outline-none focus:border-white/20"
					/>
				</div>

				{/* Cards */}
				<div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{current.map((n) => (
						<div
							key={n.id}
							className="rounded-xl border border-white/10 bg-black/20 p-5 hover:bg-black/30 transition"
						>
							<div className="flex items-start justify-between gap-3">
								<div>
									<div className="text-white font-semibold">{n.title}</div>
									{n.topic && (
										<div className="mt-1 text-xs text-white/50">{n.topic}</div>
									)}
								</div>

								{n.date && (
									<span className="text-xs text-white/40 whitespace-nowrap">
										{n.date}
									</span>
								)}
							</div>

							{/* Use div instead of p so JSX takeaway (<br/>, <code>) doesn't become invalid nested markup */}
							<div className="mt-4 text-sm text-[#bebfc2] leading-relaxed">
								{n.takeaway}
							</div>

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

				{/* Pagination */}
				<div className="mt-6 flex items-center justify-between">
					<button
						onClick={goPrev}
						disabled={safePage === 1}
						className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-white disabled:opacity-40"
					>
						← Prev
					</button>

					<div className="text-sm text-white/60">
						Page <span className="text-white">{safePage}</span> of{" "}
						<span className="text-white">{totalPages}</span>
					</div>

					<button
						onClick={goNext}
						disabled={safePage === totalPages}
						className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-white disabled:opacity-40"
					>
						Next →
					</button>
				</div>
			</div>
		</section>
	);
}