"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PageVisitTracker() {
	const pathname = usePathname();

	useEffect(() => {
		const today = new Date().toISOString().split("T")[0];
		const storageKey = `tracked:${pathname}:${today}`;

		const alreadyTracked = localStorage.getItem(storageKey);

		if (!alreadyTracked) {
			fetch("/api/track-visit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ path: pathname }),
			})
				.then(() => {
					localStorage.setItem(storageKey, "true");
				})
				.catch((err) => console.error("Failed to track visit:", err));
		}
	}, [pathname]);

	return null;
}