
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart1);

function drawChart1() {
    var data1 = google.visualization.arrayToDataTable([
        ['Contry', 'Mhl'],
        ['Pending', 60],
        ['Completion', 25],
        ['Initialising', 15],

    ]);

    var options = {

        is3D: false
    };

    var chart1 = new google.visualization.PieChart(document.getElementById('myChart1'));
    chart1.draw(data1, options);
}

// bar chart
var ctx = document.getElementById('myChart2').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Completion', 'Pending', 'Initialising'],
        datasets: [{
            label: '# of orders',
            data: [25, 60, 15],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',

            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            }
        }
    }
});

