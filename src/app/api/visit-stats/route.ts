import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";

export async function GET(req: NextRequest) {
	try {
		const { searchParams } = new URL(req.url);
		const path = searchParams.get("path");

		const client = await clientPromise;
		const db = client.db(process.env.MONGODB_DB);

		const today = new Date().toISOString().split("T")[0];
		const collection = db.collection("page_visits");

		const allToday = await collection.find({ date: today }).toArray();

		const totalToday = allToday.reduce((sum, doc) => sum + (doc.count || 0), 0);

		let currentPageCount = 0;

		if (path) {
			const pageDoc = allToday.find((doc) => doc.path === path);
			currentPageCount = pageDoc?.count ?? 0;
		}

		const pages = allToday.map((doc) => ({
			path: doc.path,
			count: doc.count,
		}));

		return NextResponse.json({
			success: true,
			date: today,
			totalToday,
			currentPageCount,
			pages,
		});
	} catch (error) {
		console.error("Visit stats error:", error);
		return NextResponse.json(
			{ success: false, message: "Failed to fetch visit stats" },
			{ status: 500 },
		);
	}
}
