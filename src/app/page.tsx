"use client";
import Body from "./components/main-page/body";
import Footer from "./components/main-page/footer";
import { useEffect } from "react";

export default function Home() {
	useEffect(() => {
		const today = new Date().toISOString().split("T")[0];
		const lastTracked = localStorage.getItem("lastTrackedVisit");

		if (lastTracked !== today) {
			fetch("/api/track-visit", {
				method: "POST",
			})
				.then(() => {
					localStorage.setItem("lastTrackedVisit", today);
				})
				.catch((err) => console.error("Failed to track visit:", err));
		}
	}, []);

	return (
		<div className="min-h-screen flex flex-col">
			<main className="flex-1 bg-black/20 animated-bg">
				<Body />
			</main>
			<Footer />
		</div>
	);
}
