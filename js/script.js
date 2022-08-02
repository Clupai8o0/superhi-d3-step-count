const todaySvg = d3.select("svg");

todaySvg
  .selectAll("rect") // selecting if there are any rects
	.data(todayData)
	.enter()
	.append("rect") // adding the rects based on the amount of data
	.attr("width", (data) => data)
	.attr("height", 10)
	.attr("y", (_, i) => i * 15);
