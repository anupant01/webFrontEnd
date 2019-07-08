$(document).ready(function () {


    uid=window.localStorage.getItem('id');
    const data1 = {id:uid}
    $.ajax({

        url:'http://localhost:7000/v1/user/' +uid ,
        method:'GET',
        contentType:'application/json',
        dataType:'json',

        success: function(result,status) {

            console.log
            (result[0].firstName);
        
        for(var key in result){
        $('#firstName').val(result[key].firstName)
        $('#lastName').val(result[key].lastName)
        $('#email').val(result[key].email)
        $('#address').val(result[key].address)
       
        }
        
        },
        
        error:function(jqXHR,status) {
            console.log(jqXHR)
        }
    })



$('#userForm').submit(function(e) {


    e.preventDefault();


    var editUser = {
        firstName : $("#firstName").val(),
        lastName : $("#lastName").val(),
        email : $("#email").val(),
        address:$('#address').val()
     
        
    }
    console.log(editUser);
var uid = window.localStorage.getItem('id');
console.log($(this))
   // console.log(uid)
    $.ajax({

        url: 'http://localhost:7000/v1/user/' + uid, // here uid has already been set to actual userid in previous funciton when edit is clicked, since uid is global
        method: "PUT",
        contentType: 'application/json',
        dataType: 'json',
        data:JSON.stringify(editUser),
        success: function(result) {
            console.log(result)
            // your logic here , redirect to another page or show message etc
            window.location.href= "useraccount.html"

        },
        error: function(jqXHR) {
console.log(jqXHR)
        }

    })


})


})