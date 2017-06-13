$(document).ready(function() {
	var ctx = document.getElementById("myChart"),
		currentValue,
		data;

	var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ["May 2016", "", "", "", "", "", "", "", "", "", "", "May 2017"],
			datasets: [{
				label: '7372 available articles',
				data: [1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7372],
				backgroundColor: [
					'rgba(18, 153, 205, 1)',
					'rgba(18, 153, 205, 1)',
					'rgba(18, 153, 205, 1)',
					'rgba(18, 153, 205, 1)',
					'rgba(18, 153, 205, 1)',
					'rgba(18, 153, 205, 1)',
					'rgba(18, 153, 205, 1)',
					'rgba(18, 153, 205, 1)',
					'rgba(18, 153, 205, 1)',
					'rgba(18, 153, 205, 1)',
					'rgba(18, 153, 205, 1)',
					'rgba(18, 153, 205, 1)'
				]
			}]
		},
		maintainAspectRatio: false,
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					},
					gridLines: {
						display: false,
						color: '#b6e1f4',
						lineWidth: 3
					}
				}],
				xAxes: [{
					gridLines: {
						display: false,
						color: '#b6e1f4',
						lineWidth: 3
					},
					barPercentage: 0.4
				}]
			},
			legend: {
				display: false
			},
			tooltips: {
				callbacks: {
					label: function(tooltipItem) {
						return tooltipItem.yLabel;
					}
				}
			}
		}
	});

	console.log(myChart);

	data = myChart.data.datasets[0].data;
	currentValue = Math.max.apply(null, data);
	
	$('<h1><span>' + currentValue + '</span> available articles</h1>').prependTo('#chart_container');
});