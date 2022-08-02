const todaySvg = d3.select("svg");

todaySvg
	.selectAll("rect") // selecting if there are any rects
	.data(todayData)
	.enter()
	.append("rect") // adding the rects based on the amount of data
	.attr("x", (_, i) => i * 36)
	.attr("y", (d) => 112 - d / 20)
	.attr("width", 24)
	.attr("height", (d) => d / 20);
