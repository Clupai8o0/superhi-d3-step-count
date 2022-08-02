const statsFormat = d3.format(",.0f");

d3.select("p.worst-day").text(statsFormat(d3.min(monthData)) + " steps");
d3.select("p.average-day").text(statsFormat(d3.mean(monthData)) + " steps");
d3.select("p.best-day").text(statsFormat(d3.max(monthData)) + " steps");
d3.select("p.total-month").text(statsFormat(d3.sum(monthData)) + " steps");
d3.select("p.total-day").text(statsFormat(d3.sum(todayData)) + " steps");
