$(document).ready(

	function () {
		//formdata upload
		//for registration
		$('#registerForm').submit(function (event) {
			event.preventDefault();
			console.log('register button clicked');

			// var formdata = new FormData();
			var registrationData = {

				firstName: $('#firstName').val(),
				lastName: $('#lastName').val(),
				email: $('#email').val(),
				address: $('#address').val(),
				username: $('#username').val(),
				password: $('#password').val(),
				usertype: 'User'

			}

			console.log(registrationData);
	

			// for (key in registrationData) {
			// 	// console.log(registrationData[key]);	
			// 	formdata.append(key, registrationData[key]);
			// }


			$.ajax({
				url: 'http://localhost:7000/v1/register',
				method: 'POST',
				contentType:'application/json',
				data: JSON.stringify(registrationData),
				dataType: 'json',
	
				success: function (result, status) {
					// console.log(result.message);
					console.log(result);
					console.log(status);
					console.log('asdasdasd');
					$("#message").html(result.message);
					window.location.href = 'login.html'
				},
				error: function (jqXHR, status) {
					console.log(jqXHR)
					console.log('qwert')
					window.location.href = 'register.html'
					$("#message").html(jqXHR.responseJSON.message);
	
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
					window.localStorage.setItem('firstName', result.result.firstName);
					window.localStorage.setItem('lastName', result.result.lastName);
					window.localStorage.setItem('email', result.result.email);
					window.localStorage.setItem('address', result.result.address);
					window.localStorage.setItem('usertype', result.result.usertype);


					$("#message").html(result.message);
					console.log(result.result.usertype)
					if (result.result.usertype == "User") {
						window.location.href = 'user/index.html'

					}
					else {
						window.location.href = 'admin/tables.html'
						// 		console.log('admin');
					}



				},

				error: function (jqXHR, status) {
					console.log(jqXHR);
					$("#message").html(jqXHR.responseJSON.message);
				}
			})
		})


	

	})