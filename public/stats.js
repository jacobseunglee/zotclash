
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

charts = []

fetch('../stats')
.then((response) => response.json())
.then((data) => {
    for (let i = 0; i < data.length-1; i += 2) {
        var data1 = google.visualization.arrayToDataTable([
            ['Thing', 'Votes'],
            [data[i].name, data[i].count],
            [data[i+1].name, data[i+1].count]
        ])

        charts.push(data1)
    }

    var options = {
        title: 'My Daily Activities',
        legend: {position: 'none'},
        backgroundColor: 'transparent',
        chartArea: {left:0,top:0,width:'100%',height:'100%'}
      };

    for (let i = 0; i < charts.length; i++) {
        var chart = new google.visualization.PieChart(document.getElementById(`piechart${i+1}`));
        document.getElementById(`piechart${i+1}`).style.width = "180px"
        document.getElementById(`piechart${i+1}`).style.height = "200px"
        chart.draw(charts[i], options);
      }
})

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Work',     100],
    ['Eat',      2],
    ['Commute',  2],
    ['Watch TV', 2],
    ['Sleep',    7]
  ]);

 

  

  
}