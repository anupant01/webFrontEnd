$(document).ready(

	function ()
	{
		//form ko value
		$('#registrationForm').submit(function(event)
			{
				event.preventDefault();

				var regFormData ={

				firstname: $('#firstname').val(),
				lastname: $('#lastname').val(),
				email: $('#email').val(),
				address: $('#address').val(),
				contactnumber: $('#contactnumber').val(),
				username: $('#username').val(),
				password: $('#password').val(),

			}

			


$.ajax({
//v1:version, users:route in the backend
//api name should be used in Noun
url: 'http://localhost:8000/v1/users',
method: 'POST',
contentType: 'application/json',
//javastring lai string ms change garcha
data: JSON.stringfy(regFormData),


success: function(result,status){

},

error:function(jqXHR,status){

}


})



})


})