"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	LineChart,
	Line,
} from "recharts";

type PageStat = {
	path: string;
	count: number;
};

type TrendStat = {
	date: string;
	count: number;
};

type StatsResponse = {
	success: boolean;
	date: string;
	totalToday: number;
	currentPageCount: number;
	totalAllTime: number;
	pages: PageStat[];
	last7Days: TrendStat[];
};

export default function AnalysisPage() {
	const pathname = usePathname();
	const [stats, setStats] = useState<StatsResponse | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`/api/visit-stats?path=${encodeURIComponent(pathname)}`)
			.then((res) => res.json())
			.then((data) => {
				if (data.success) {
					setStats(data);
				}
			})
			.catch((err) => console.error("Failed to fetch visit stats:", err))
			.finally(() => setLoading(false));
	}, [pathname]);

	const pageChartData = useMemo(() => {
		if (!stats) return [];

		return [...stats.pages]
			.sort((a, b) => b.count - a.count)
			.map((page) => ({
				name: page.path === "/" ? "home" : page.path.replace("/", ""),
				visits: page.count,
			}));
	}, [stats]);

	const trendChartData = useMemo(() => {
		if (!stats) return [];

		return stats.last7Days.map((day) => ({
			name: new Date(day.date).toLocaleDateString("en-US", {
				month: "short",
				day: "numeric",
			}),
			visits: day.count,
		}));
	}, [stats]);

	if (loading) {
		return (
			<div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 px-6 py-10">
				<div className="mx-auto max-w-6xl">
					<p className="text-gray-500">Loading analytics...</p>
				</div>
			</div>
		);
	}

	if (!stats) {
		return (
			<div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 px-6 py-10">
				<div className="mx-auto max-w-6xl">
					<p className="text-red-500">Failed to load visitor stats.</p>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 px-6 py-10">
			<div className="mx-auto max-w-6xl">
				<div className="mb-8">
					<h1 className="text-3xl font-bold text-slate-800">
						Portfolio Analytics
					</h1>
					<p className="mt-2 text-sm text-slate-500">
						Visitor overview for {stats.date}
					</p>
				</div>

				<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
					<div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
						<p className="text-sm text-slate-500">Total Visits Today</p>
						<p className="mt-2 text-3xl font-bold text-slate-800">
							{stats.totalToday.toLocaleString()}
						</p>
					</div>

					<div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
						<p className="text-sm text-slate-500">Total Visitors</p>
						<p className="mt-2 text-3xl font-bold text-slate-800">
							{stats.totalAllTime.toLocaleString()}
						</p>
					</div>

					<div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
						<p className="text-sm text-slate-500">Tracked Pages</p>
						<p className="mt-2 text-3xl font-bold text-slate-800">
							{stats.pages.length}
						</p>
					</div>
				</div>

				<div className="mt-8 grid grid-cols-1 gap-8 xl:grid-cols-2">
					<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
						<div className="mb-4">
							<h2 className="text-xl font-semibold text-slate-800">
								Page Visit Breakdown
							</h2>
							<p className="text-sm text-slate-500">Today’s visits by route</p>
						</div>

						<div className="h-[320px] w-full">
							<ResponsiveContainer width="100%" height="100%">
								<BarChart data={pageChartData}>
									<CartesianGrid strokeDasharray="3 3" vertical={false} />
									<XAxis dataKey="name" />
									<YAxis allowDecimals={false} />
									<Tooltip />
									<Bar dataKey="visits" radius={[8, 8, 0, 0]} />
								</BarChart>
							</ResponsiveContainer>
						</div>
					</div>

					<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
						<div className="mb-4">
							<h2 className="text-xl font-semibold text-slate-800">
								7-Day Visitor Trend
							</h2>
							<p className="text-sm text-slate-500">
								Total visits across all pages
							</p>
						</div>

						<div className="h-[320px] w-full">
							<ResponsiveContainer width="100%" height="100%">
								<LineChart data={trendChartData}>
									<CartesianGrid strokeDasharray="3 3" vertical={false} />
									<XAxis dataKey="name" />
									<YAxis allowDecimals={false} />
									<Tooltip />
									<Line
										type="monotone"
										dataKey="visits"
										strokeWidth={3}
										dot={{ r: 4 }}
									/>
								</LineChart>
							</ResponsiveContainer>
						</div>
					</div>
				</div>

				<div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
					<h2 className="text-xl font-semibold text-slate-800">Page Details</h2>

					<div className="mt-4 space-y-3">
						{stats.pages.map((page) => (
							<div
								key={page.path}
								className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
							>
								<p className="font-medium text-slate-800">{page.path}</p>
								<p className="text-sm font-semibold text-slate-600">
									{page.count} visits
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
