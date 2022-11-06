google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Work',     100],
    ['Eat',      2]
  ]);

  var options = {
    title: 'My Daily Activities',
    backgroundColor: 'transparent',
    chartArea: {left:0,top:0,width:'100%',height:'100%'},
    legend: {position: 'none'}
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}