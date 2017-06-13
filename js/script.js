$(document).ready(function() {

	/* 
		If I were connecting to or receiving from a database
		I'd write something similar to this:

		// php file file named chartdb.php

		<?php
			$servername = "localhost";
			$username = "root";
			$password = "";
			$dbname = "datadb";

			// Create connection
			$conn = new mysqli($servername, $username, $password, $dbname);
			// Check connection
			if ($conn->connect_error) {
				die("Connection failed: " . $conn->connect_error);
			} 

			$sql = "SELECT column1 FROM chartdata";
			$result = mysqli_query($conn, $sql);

			$data = array();
			while($enr = mysqli_fetch_assoc($result)){
				$a = array($enr['column1']);
				array_push($data, $a);
			}

			echo json_encode($data);
		?>

		// In the code below I would include the following

		var externalData = [];
		$.ajax({
			url : 'chartdb.php', // your php file
			type : 'GET', // type of the HTTP request
			success : function(data){
				var obj = jQuery.parseJSON(data);
				externalData.push(obj);
			}
		});
	*/

	var ctx = document.getElementById("myChart"),
		currentValue,
		data,
		externalData = [1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7372];

	var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ["May 2016", "", "", "", "", "", "", "", "", "", "", "May 2017"],
			datasets: [{
				label: '7372 available articles',
				data: externalData,
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
			animation: {
				easing: 'easeOutCirc'
			},
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

	data = myChart.data.datasets[0].data;
	currentValue = Math.max.apply(null, data);
	
	$('<h1><span>' + currentValue + '</span> available articles</h1>').prependTo('#chart_container');

	$('h1').animate({
		top: 0
	}, 500);
});