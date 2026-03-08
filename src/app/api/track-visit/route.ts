import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		const path = body.path || "/";

		const client = await clientPromise;
		const db = client.db(process.env.MONGODB_DB);

		const today = new Date().toISOString().split("T")[0];

		await db.collection("page_visits").updateOne(
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

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error("Track visit error:", error);
		return NextResponse.json(
			{ success: false, message: "Failed to track visit" },
			{ status: 500 },
		);
	}
}
