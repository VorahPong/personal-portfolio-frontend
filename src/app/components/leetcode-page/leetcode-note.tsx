import React from "react";

export type Note = {
	id: string;
	title: string; // e.g. "853. Car Fleet"
	topic?: string; // e.g. "Stack / Monotonic stack"
	takeaway: React.ReactNode; // 1–2 sentences
	link?: string; // optional leetcode link
	date?: string; // optional "2026-01-20"
};

export const notes: Note[] = [
	{
		id: "car-fleet",
		title: "853. Car Fleet",
		topic: "Stack (Monotonic)",
		takeaway:
			"Sort cars by position descending, compute time-to-target (target - position) / speed, and use a stack to count fleets.",
		link: "https://leetcode.com/problems/car-fleet/",
		date: "2026-01-20",
	},
	{
		id: "largest-rectangle-in-histogram",
		title: "84. Largest Rectangle in Histogram",
		topic: "Stack",
		takeaway:
			"Use a monotonic increasing stack to compute maximal contiguous areas in O(n) by delaying area calculation until boundaries are known.",
		link: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
		date: "2026-01-22",
	},
	{
		id: "binary-search",
		title: "704. Binary Search",
		topic: "Binary Search",
		takeaway: (
			<>
				Formula: <code>low + (high - low) / 2</code>
				<br />
				Loop while <code>(low &lt;= high)</code>
			</>
		),
		link: "https://leetcode.com/problems/binary-search/",
		date: "2026-01-24",
	},
	{
		id: "search-a-2d-matrix",
		title: "74. Search a 2D Matrix",
		topic: "Binary Search",
		takeaway: (
			<>
				First go through every row to find the correct row where the target
				could be then perform binary search on that row.
			</>
		),
		link: "https://leetcode.com/problems/search-a-2d-matrix/",
		date: "2026-01-26",
	},
	{
		id: "count-good-nodes-in-binary-tree",
		title: "1448. Count Good Nodes in Binary Tree",
		topic: "Binary Tree - DFS",
		takeaway: (
			<>
				Goes through the graph using depth-first-search then keep track of the
				max at each node by replace it's value with the current max.
			</>
		),
		link: "https://leetcode.com/problems/count-good-nodes-in-binary-tree/description/?envType=study-plan-v2&envId=leetcode-75/",
		date: "2026-01-31",
	},
	{
		id: "binary-tree-right-side-view",
		title: "199. Binary Tree Right Side View",
		topic: "Binary Tree - BFS",
		takeaway: (
			<>
				Uses breadth-first-search to traverse the tree level by level, add the
				rightmost node of each level to the result.
			</>
		),
		link: "https://leetcode.com/problems/binary-tree-right-side-view/description/?envType=study-plan-v2&envId=leetcode-75",
		date: "2026-02-03",
	},
	{
		id: "maximum-level-sum-of-binary-tree",
		title: "1161. Maximum Level Sum of a Binary Tree",
		topic: "Binary Tree - BFS",
		takeaway: (
			<>
				Traverse the tree level by level using breadth-first-search while
				calculating the sum of each level, keep track of the maximum sum and
				corresponding level.
			</>
		),
		link: "https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/description/?envType=study-plan-v2&envId=leetcode-75",
		date: "2026-02-04",
	},
];
