import { NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";

export async function POST() {
	try {
		const client = await clientPromise;
		const db = client.db(process.env.MONGODB_DB);

		const today = new Date().toISOString().split("T")[0];

		const visitsCollection = db.collection("daily_visits");

		await visitsCollection.updateOne(
			{ date: today },
			{
				$inc: { count: 1 },
				$setOnInsert: { date: today, createdAt: new Date() },
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

export async function GET() {
	try {
		const client = await clientPromise;
		const db = client.db(process.env.MONGODB_DB);
		const today = new Date().toISOString().split("T")[0];

		const todayVisit = await db
			.collection("daily_visits")
			.findOne({ date: today });

		return NextResponse.json({
			success: true,
			date: today,
			count: todayVisit?.count ?? 0,
		});
	} catch (error) {
		console.error("Get visit count error:", error);
		return NextResponse.json(
			{ success: false, message: "Failed to get visit count" },
			{ status: 500 },
		);
	}
}