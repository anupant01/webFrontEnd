$(document).ready(

	function ()
	{
		//form ko value
		$('#registrationForm').submit(function(event)
			{
				event.preventDefault();

				var regFormData ={

				firstName: $('#firstName').val(),
				lastName: $('#lastName').val(),
				email: $('#email').val(),
				address: $('#address').val(),
				username: $('#username').val(),
				password: $('#password').val(),

			}

			


$.ajax({
//v1:version, users:route in the backend
//api name should be used in Noun
url: 'http://localhost:9000/v1/users',
method: 'POST',
contentType: 'application/json',
//javastring lai string ms change garcha
data: JSON.stringify(regFormData),


success: function(result,status){
console.log(result)
},

error:function(jqXHR,status){
console.log(status)
}


})



})


})