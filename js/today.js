const todaySvg = d3.select("svg.today");

//* Adding a range limiter
const barScale = d3.scaleLinear().domain([0, 2000]).range([1, 112]);

//* Group
const todayGroups = todaySvg
	.selectAll("g")
	.data(todayData)
	.enter()
	.append("g")
	.attr("transform", (_, i) => `translate(${i * 36}, 0)`);

//* Creating the bars
todayGroups
	.append("rect")
	.attr("x", 0)
	.attr("y", 120)
	.attr("width", 24)
	.attr("height", 0)
	.transition()
	.delay((_, i) => i * 20)
	.attr("y", (d) => 120 - barScale(d))
	.attr("height", (d) => barScale(d));

//* Adding text
todayGroups
	.append("text")
	.attr("x", 12)
	.attr("y", 140)
	.attr("class", "hours")
	.text((_, i) => i);

//* top text
todayGroups
	.append("text")
	.attr("x", 12)
	.attr("y", (d) => 110 - barScale(d))
	.attr("class", "steps")
	.text((d) => d);

  //* transparent bar
todayGroups
	.append("rect")
	.attr("x", 0)
	.attr("y", 0)
	.attr("width", 24)
	.attr("height", 140)
	.attr("class", "transparent");