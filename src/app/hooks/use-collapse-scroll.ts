// hooks/useCollapseScroll.ts
import { useEffect, useRef, RefObject } from "react";

export function useCollapseScroll<T extends HTMLElement>(
	expanded: boolean,
	ref: RefObject<T | null>,
	{
		behavior = "smooth",
		block = "start",
		enabled = true,
		skipFirstRender = true,
	}: {
		behavior?: ScrollBehavior;
		block?: ScrollLogicalPosition;
		enabled?: boolean;
		skipFirstRender?: boolean;
	} = {}
) {
	const didMount = useRef(false);
	const prevExpanded = useRef(expanded);

	useEffect(() => {
		if (!enabled) return;

		if (skipFirstRender && !didMount.current) {
			didMount.current = true;
			// initialize previous value on first render
			prevExpanded.current = expanded;
			return;
		}

		const wasExpanded = prevExpanded.current;
		prevExpanded.current = expanded;

		// Only scroll when it changed from true -> false
		if (wasExpanded && !expanded && ref.current) {
			requestAnimationFrame(() => {
				ref.current?.scrollIntoView({ behavior, block });
			});
		}
	}, [expanded, behavior, block, enabled]);
}
