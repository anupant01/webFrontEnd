$(document).ready(function () {

    $('#feedbackForm').submit(function (event) {
        event.preventDefault();


        var feedbackdata = {
            firstName : $('#firstname').val(),
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

//get data

 /* retrieving data craft*/
 $.ajax({
    url: 'http://localhost:7000/v1/feedback',
    /* data is not needed
    contenttype is also not neede */
    dataType: 'json',
    success: function (result, status) {
        // console.log(result);

        for (key in result) {
            // console.log(result[key].username);

            $('#feedbackList').append(' <tr>\
                    <td>'+ result[key].id + '</td>\
                    <td>'+ result[key].firstName + '</td>\
                    <td>'+ result[key].email + '</td>\
                    <td>'+ result[key].feedback + '</td>\
                <td><button type="button" class="btn btn-danger" uid='+ result[key].id + ' id="delete">Delete</button></td>\
                </tr>')
        }
    },
    error: function (jqXHR, status) {

    }

})











    // /*delete data */
    $('#feedbackList').on('click', '#delete', function () {
        // console.log($(this));
        console.log($(this)[0].attributes.uid.nodeValue);
        uid = $(this)[0].attributes.uid.nodeValue;


        var isDelete = confirm ("Are you sure you want to delete?");

        if (isDelete == true){

        $.ajax({
            url: "http://localhost:7000/v1/feedback/" + uid,
            method: "DELETE",
            dataType: 'json',
            success: function (result, status) {
                window.location.href = "feedback.html"
                console.log(result.message)
                $("#message").html(result.message);

            },
            error: function () {
            }


        })
    

}
else{
    window.location.href = "feedback.html"

}
})

})