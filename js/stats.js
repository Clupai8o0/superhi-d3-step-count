d3.select("p.worst-day").text(d3.min(monthData) + " steps")
d3.select("p.average-day").text(Math.round(d3.mean(monthData) )+ " steps")
d3.select("p.best-day").text(d3.max(monthData) + " steps")
d3.select("p.total-month").text(d3.sum(monthData) + " steps")
d3.select("p.total-day").text(d3.sum(todayData) + " steps");