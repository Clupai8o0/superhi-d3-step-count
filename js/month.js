const monthSvg = d3.select("svg.month");

//* Adding a range limiter
// const barScale = d3.scaleLinear().domain([0, 2000]).range([1, 112]);

//* Creating the bars
monthSvg
	.selectAll("circle") 
	.data(monthData)
	.enter()
	.append("circle")
	.attr("cx", (_, i) => (i % 7) * 120 + 60)
	.attr("cy", (_, i) => Math.floor(i / 7) * 100 + 60)
	.attr("r", 5)

//* Adding text
// monthSvg
// 	.selectAll("text")
// 	.data(todayData)
// 	.enter()
// 	.append("text")
// 	.attr("x", (d, i) => i * 36)
// 	.attr("y", 130)
// 	.text((_, i) => i);
