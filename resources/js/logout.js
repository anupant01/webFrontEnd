


    function logout (token,id,username,firstName,lastName,email,address) {
       

        window.localStorage.removeItem('token')
        window.localStorage.removeItem('id')
        window.localStorage.removeItem('username')
        window.localStorage.removeItem('firstName');
		window.localStorage.removeItem('lastName');
		window.localStorage.removeItem('email');
		window.localStorage.removeItem('address');
         window.location.href = "../login.html"

         

    }