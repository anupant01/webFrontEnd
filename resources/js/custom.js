$(document).ready(

	function () {
		//formdata upload
		//for registration
		$('#registerForm').submit(function (event) {
			event.preventDefault();
			console.log('register button clicked');

			var formdata = new FormData();
			var registrationData = {

				firstName: $('#firstName').val(),
				lastName: $('#lastName').val(),
				email: $('#email').val(),
				address: $('#address').val(),
				username: $('#username').val(),
				password: $('#password').val(),
				images: $('#images')[0].files[0],
				usertype: 'User'

			}

			console.log(registrationData);
			// images: $('#images')[0].files[0]

			for (key in registrationData) {
				// console.log(registrationData[key]);	
				formdata.append(key, registrationData[key]);
			}


			$.ajax({
				url: 'http://localhost:7000/v1/register',
				method: 'POST',
				processData: false,
				contentType: false,
				data: formdata,
				dataType: 'json',
	
				success: function (result, status) {
					// console.log(result.message);
					console.log(result);
					console.log(status);
					console.log('asdasdasd');
				},
				error: function (jqXHR, status) {
					console.log(jqXHR)
					console.log('qwert')
	
				}
			});



		})



		// for login
		$('#loginForm').submit(function (event) {
			event.preventDefault();
			console.log('login button clicked');
			const loginData = {
				username: $('#username').val(),
				password: $('#password').val()
			}

			$.ajax({
				url: 'http://localhost:7000/v1/sign',
				method: 'POST',
				contentType: 'application/json',
				data: JSON.stringify(loginData),
				dataType: 'json',
				success: function (result, status) {

					window.localStorage.setItem('token', result.token);
					window.localStorage.setItem('id', result.result.id);
					window.localStorage.setItem('username', result.result.username);


					console.log(result.result.usertype)
					if (result.result.usertype == "User") {
						window.location.href = 'user/index.html'

					}
					else {
						window.location.href = 'admin/adminDashboard.html'
						// 		console.log('admin');
					}



				},

				error: function (jqXHR, status) {
					console.log(jqXHR);
					//$("#message").html(jqXHR.responseJSON.message);
				}
			})
		})


	

	})