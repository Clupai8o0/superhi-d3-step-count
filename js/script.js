const todaySvg = document.querySelector("svg");

todayData.forEach((data, i) => {
	const rectTag = document.createElementNS(
		"http://www.w3.org/2000/svg",
		"rect"
	);

	rectTag.setAttribute("x", "20");
	rectTag.setAttribute("y", 20 * i);
	rectTag.setAttribute("width", data);
	rectTag.setAttribute("height", "10");

	todaySvg.appendChild(rectTag);
});

