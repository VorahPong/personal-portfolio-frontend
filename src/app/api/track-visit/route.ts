import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";

type AnalyticsTotalsDoc = {
	_id: string;
	totalVisits: number;
};

type PageVisitDoc = {
	date: string;
	path: string;
	count: number;
	createdAt?: Date;
};

export async function POST(req: NextRequest) {
	try {
		const { path } = await req.json();

		const client = await clientPromise;
		const db = client.db(process.env.MONGODB_DB);

		const pageVisits = db.collection<PageVisitDoc>("page_visits");
		const analyticsTotals =
			db.collection<AnalyticsTotalsDoc>("analytics_totals");

		const today = new Date().toISOString().split("T")[0];

		// Update page visits
		await pageVisits.updateOne(
			{ date: today, path },
			{
				$inc: { count: 1 },
				$setOnInsert: {
					date: today,
					path,
					createdAt: new Date(),
				},
			},
			{ upsert: true },
		);

		// Update global total visits
		await analyticsTotals.updateOne(
			{ _id: "global" },
			{
				$inc: { totalVisits: 1 },
			},
			{ upsert: true },
		);

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error("Track visit error:", error);

		return NextResponse.json(
			{ success: false, message: "Failed to track visit" },
			{ status: 500 },
		);
	}
}
