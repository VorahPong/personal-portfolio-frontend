// components/MotionCard.tsx
"use client";
import { motion, type HTMLMotionProps } from "framer-motion";

export default function MotionCard({
	className = "",
	...props
}: HTMLMotionProps<"div">) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 28 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
			className={className}
			{...props}
		/>
	);
}
