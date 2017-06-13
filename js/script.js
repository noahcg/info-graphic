$(document).ready(function() {
	var ctx = document.getElementById("myChart");
	var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ["May 2016", "", "", "", "", "", "", "", "", "", "", "May 2017",],
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
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					},
					gridLines: {
						display: false
					}
				}],
				xAxes: [{
					gridLines: {
						display: false
					}
				}]
			}
		}
	});
});