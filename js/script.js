const todaySvg = d3.select("svg");
const rectTags = d3.selectAll("rect");

rectTags.data(todayData).attr("width", data => data).attr("height", 10).attr("y", (_, i) => i * 15)