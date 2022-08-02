const monthSvg = d3.select("svg.month");

//* Adding a range limiter
const radiusScale = d3.scaleSqrt().domain([0, 30000]).range([0, 50]);

//* month groups
const monthGroups = monthSvg
	.selectAll("g")
	.data(monthData)
	.enter()
	.append("g")
	.attr("transform", (_, i) => {
		const x = (i % 7) * 120 + 60,
			y = Math.floor(i / 7) * 150 + 60;
		return `translate(${x}, ${y})`;
	});

//* Creating the bars
monthGroups
	.append("circle")
	.attr("cx", 0)
	.attr("cy", 0)
	.attr("r", 0)
	.transition()
	.duration(250)
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
