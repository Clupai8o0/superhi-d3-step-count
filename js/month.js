const monthSvg = d3.select("svg.month");

//* Adding a range limiter
const radiusScale = d3.scaleSqrt().domain([0, 30000]).range([0, 50]);

//* Creating the bars
monthSvg
	.selectAll("circle")
	.data(monthData)
	.enter()
	.append("circle")
	.attr("cx", (_, i) => (i % 7) * 120 + 60)
	.attr("cy", (_, i) => Math.floor(i / 7) * 100 + 60)
	.attr("r", 0)
	.transition()
	.duration(1000)
	.delay((_, i) => i * 20 + 500)
  .ease(d3.easeCubicOut)
	.attr("r", (d) => radiusScale(d));

//* Adding text
// monthSvg
// 	.selectAll("text")
// 	.data(todayData)
// 	.enter()
// 	.append("text")
// 	.attr("x", (d, i) => i * 36)
// 	.attr("y", 130)
// 	.text((_, i) => i);
