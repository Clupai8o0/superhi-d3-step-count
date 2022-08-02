const todaySvg = d3.select("svg.today");

//* Adding a range limiter
const barScale = d3.scaleLinear().domain([0, 2000]).range([1, 112]);

//* Creating the bars
todaySvg
	.selectAll("rect") // selecting if there are any rects
	.data(todayData)
	.enter()
	.append("rect") // adding the rects based on the amount of data
	.attr("x", (_, i) => i * 36 + 12)
	.attr("y", (d) => 112 - barScale(d))
	.attr("width", 24)
	.attr("height", (d) => barScale(d));

//* Adding text
todaySvg
	.selectAll("text")
	.data(todayData)
	.enter()
	.append("text")
	.attr("x", (d, i) => i * 36)
	.attr("y", 130)
	.text((_, i) => i);
