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

//* Adding rings
monthGroups
	.append("circle")
	.attr("cx", 0)
	.attr("cy", 0)
	.attr("r", radiusScale(10000))
	.attr("class", "ring");
monthGroups
	.append("circle")
	.attr("cx", 0)
	.attr("cy", 0)
	.attr("r", radiusScale(20000))
	.attr("class", "ring");

//* Creating the bars
monthGroups
	.append("circle")
	.attr("cx", 0)
	.attr("cy", 0)
	.attr("r", 0)
	.attr("class", "actual")
	.transition()
	.duration(250)
	.delay((_, i) => i * 20 + 500)
	.ease(d3.easeCubicOut)
	.attr("r", (d) => radiusScale(d));

//* Adding text
monthGroups
	.append("text")
	.attr("class", "day")
	.attr("x", 0)
	.attr("y", 70)
	.text((_, i) => i + 1);
monthGroups
	.append("text")
	.attr("class", "steps")
	.attr("x", 0)
	.attr("y", 70)
	.text((d) => d);