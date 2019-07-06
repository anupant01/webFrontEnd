$(document).ready(function () {

    $('#feedbackForm').submit(function (event) {
        event.preventDefault();


        var feedbackdata = {
            firstName : $('#fname').val(),
            email : $('#email').val(),
            feedback : $('#feedback').val(),

        }
            console.log(feedbackdata);

        $.ajax({

            url:'http://localhost:7000/v1/feedback',
            method:'POST',
            contentType:'application/json',
          
            data: JSON.stringify(feedbackdata),
            dataType:'json',


            success: function(result,status) {

                // $('#message-feedback').html(result.message)
                console.log(result);

                //next();
            },

            error:function(jqXHR,status) {
                // $('#message-feedback').html(jqXHR.responseJSON.message)
                console.log(jqXHR)
            }
        })

    })


})