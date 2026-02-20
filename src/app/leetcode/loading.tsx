export default function Loading() {
	return (
		<div className="min-h-screen flex flex-col bg-black/10">
			<main className="flex-1">
				<div className="bg-[#282828] m-10 border-amber-200 border-r-2 rounded-2xl">
					<div className="text-white p-10">
						<div className="flex w-full flex-row justify-between">
							<div className="flex flex-col gap-2">
								<div className="h-7 w-24 rounded bg-white/10 animate-pulse" />
								<div className="h-4 w-28 rounded bg-white/10 animate-pulse" />
							</div>

							<div className="h-9 w-28 rounded bg-white/10 animate-pulse" />
						</div>

						<div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
							<div className="p-4 sm:p-3 rounded-xl border border-white/10 bg-white/5">
								<div className="h-4 w-14 rounded bg-white/10 animate-pulse" />
								<div className="mt-2 h-6 w-20 rounded bg-white/10 animate-pulse" />
							</div>
							<div className="p-4 sm:p-3 rounded-xl border border-white/10 bg-white/5">
								<div className="h-4 w-16 rounded bg-white/10 animate-pulse" />
								<div className="mt-2 h-6 w-20 rounded bg-white/10 animate-pulse" />
							</div>
							<div className="p-4 sm:p-3 rounded-xl border border-white/10 bg-white/5">
								<div className="h-4 w-12 rounded bg-white/10 animate-pulse" />
								<div className="mt-2 h-6 w-20 rounded bg-white/10 animate-pulse" />
							</div>
						</div>

						<div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
							<div>
								<div className="h-9 w-36 rounded bg-white/10 animate-pulse" />
								<div className="mt-2 h-4 w-44 rounded bg-white/10 animate-pulse" />
							</div>
							<div className="sm:text-right">
								<div className="h-4 w-40 rounded bg-white/10 animate-pulse sm:ml-auto" />
								<div className="mt-2 h-4 w-36 rounded bg-white/10 animate-pulse sm:ml-auto" />
							</div>
						</div>
					</div>
				</div>

				{/* Notes skeleton */}
				<div className="mx-10 mb-10 space-y-3">
					<div className="h-6 w-40 rounded bg-black/10 animate-pulse" />
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
						{Array.from({ length: 6 }).map((_, i) => (
							<div
								key={i}
								className="h-28 rounded-xl border border-black/10 bg-black/5 animate-pulse"
							/>
						))}
					</div>
				</div>
			</main>

			{/* Footer placeholder */}
			<div className="h-16" />
		</div>
	);
}
