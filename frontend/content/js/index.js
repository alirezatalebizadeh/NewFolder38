import initChart from "./chart.js";

initChart(
    ['7.1', '7.10', '7.18', '7.25', '7.28'],
    [500, 1000, 2300, 2600, 1600],
    document.querySelector('#my_chart').getContext('2d')
)