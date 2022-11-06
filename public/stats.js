import {PieChart} from "@d3/pie-chart"


charts = []

dining_chart = PieChart(selections, {
    name: d => d.name,
    value: d => d.value,
    width,
    height: 500
  })