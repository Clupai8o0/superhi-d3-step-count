const todaySvg = d3.select("svg.today");

//* Adding a range limiter
const barScale = d3.scaleLinear().domain([0, 2000]).range([1, 112]);

//* Group
const todayGroups = todaySvg
	.selectAll("g")
	.data(todayData)
	.enter()
	.append("g")
	.attr("transform", (_, i) => `translate(${i * 30}, 0)`);

//* Creating the bars
todayGroups
	.append("rect")
	.attr("x", 0)
	.attr("y", 112)
	.attr("width", 24)
	.attr("height", 0)
	.transition()
	.delay((_, i) => i * 20)
	.attr("y", (d) => 112 - barScale(d))
	.attr("height", (d) => barScale(d));

//* Adding text
todayGroups
	.append("text")
	.attr("x", 12)
	.attr("y", 130)
	.text((_, i) => i);
