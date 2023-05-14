import { renderChart } from "./chart.js";
import { renderWidgets } from "./widget.js";
import { getReadings, groupByDay, sortByTime } from "./reading";

const readings = await getReadings();
const readingsOf30Days = sortByTime(groupByDay(readings)).slice(-30);
renderChart(readingsOf30Days);
renderWidgets(readingsOf30Days);
