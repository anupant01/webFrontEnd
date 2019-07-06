$(document).ready(function () {


    $('#logout').click(function (event) {
        event.preventDefault();

        window.localStorage.removeItem('token')
        window.localStorage.removeItem('id')
        window.localStorage.removeItem('username')
         window.location.href = "../index.html"

         

    })
    })