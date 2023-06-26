import { useEffect, useState, RefObject } from "react";

export const useResizedStyles = (element: RefObject<HTMLDivElement>) => {
	const [, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = (event: any) => {
			setWidth(event.target.innerWidth);
		};
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	if (!element.current) return null;

	return {
		height: element.current.getBoundingClientRect().height,
		width: element.current.getBoundingClientRect().width,
		top: element.current.getBoundingClientRect().top + window.scrollY,
		left: element.current.getBoundingClientRect().left + window.scrollX,
	};
};
