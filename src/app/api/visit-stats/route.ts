import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";

function getLast7Dates() {
	const dates: string[] = [];

	for (let i = 6; i >= 0; i--) {
		const d = new Date();
		d.setDate(d.getDate() - i);
		dates.push(d.toISOString().split("T")[0]);
	}

	return dates;
}

type AnalyticsTotalsDoc = {
	_id: string;
	totalVisits: number;
};

export async function GET(req: NextRequest) {
	try {
		const { searchParams } = new URL(req.url);
		const path = searchParams.get("path");

		const client = await clientPromise;
		const db = client.db(process.env.MONGODB_DB);
		const collection = db.collection("page_visits");

		const today = new Date().toISOString().split("T")[0];
		const last7Dates = getLast7Dates();

		const allLast7Days = await collection
			.find({
				date: { $in: last7Dates },
			})
			.toArray();

		const todayDocs = allLast7Days.filter((doc) => doc.date === today);

		const totalToday = todayDocs.reduce(
			(sum, doc) => sum + (doc.count || 0),
			0,
		);

		const totalsDoc = await db
			.collection<AnalyticsTotalsDoc>("analytics_totals")
			.findOne({ _id: "global" });

		const totalAllTime = totalsDoc?.totalVisits ?? 0;

		let currentPageCount = 0;
		if (path) {
			const pageDoc = todayDocs.find((doc) => doc.path === path);
			currentPageCount = pageDoc?.count ?? 0;
		}

		const pages = todayDocs.map((doc) => ({
			path: doc.path,
			count: doc.count,
		}));

		const last7Days = last7Dates.map((date) => {
			const dayTotal = allLast7Days
				.filter((doc) => doc.date === date)
				.reduce((sum, doc) => sum + (doc.count || 0), 0);

			return {
				date,
				count: dayTotal,
			};
		});

		return NextResponse.json({
			success: true,
			date: today,
			totalToday,
			currentPageCount,
			pages,
			totalAllTime,
			last7Days,
		});
	} catch (error) {
		console.error("Visit stats error:", error);
		return NextResponse.json(
			{ success: false, message: "Failed to fetch visit stats" },
			{ status: 500 },
		);
	}
}
