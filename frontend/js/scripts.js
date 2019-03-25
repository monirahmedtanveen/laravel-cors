function loadData(){
	// Token = "Token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VySWQiOjIyNSwiaWF0IjoxNTUzNDIyNjUwLCJuYmYiOjE1NTM0MjI2NTAsImV4cCI6MTU1ODYwNjY1MH0.XLaDRdU6ix1AbKfE-xTdAwcTamOZiccjhnD5hk9X7drq6oJ6oCu0Zu2H5V_Lv_7Y_0YUTRghIa_ZfT8G-s14sg";
	// url = "https://www.landknock.org/api/v1.0.1/login";
	url = "http://localhost:8000/api/v1.0.1/users";
	$("#btnLoad").text("Loading Data");
	$("#btnLoad").attr({disabled: true}); 
		
	$.ajax({
		type: "GET",
		dataType: "json",
		
		url: url,
		data: {
			/*name: 'Iram Rahman',
			email: 'marahman.dg@gmail.com',
			mobile: '01677566997',
			password: 'quioite',
			address: 'Dhaka-1300',*/
		},
		
		success: function(result,status,xhr){
			console.log("success");
			var data = JSON.parse(JSON.stringify(result));
			$('#rowmsg').hide();
			$.each(data['data'], function (index, value) {
				$("#tablebody").append(
					'<tr>' + 
						'<td>Name : ' + ' ' + value.name + '</td>'
						+ '<td>Email : ' + ' ' + value.email + '</td>'
						+ '<td>Mobile : ' + ' ' + value.mobile + '</td>'
						+ '<td>Address : ' + ' ' + value.address + '</td>'
					+ '</tr>'
				);
			});
		},
		error: function(xhr,status,error){
			console.log("error");
			$("#data").text(error);
		},
		complete: function(xhr,status){
			console.log("Complete");
			$("#btnLoad").text("Load Data");
			$("#btnLoad").attr({disabled: false});
		}
	});
}

function clearData(){
	$("#data").html(
		'click load data button to load user data'
	);
	$("#tablebody").html("<tr id='rowmsg'><td colspan='4'>No data to show</td></tr>");
}