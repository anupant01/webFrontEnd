$(document).ready(function () {

   
    /* retrieving data craft*/
    $.ajax({
        url: 'http://localhost:7000/v1/register',
        /* data is not needed
        contenttype is also not neede */
        dataType: 'json',
        success: function (result, status) {
            // console.log(result);

            for (key in result) {
                // console.log(result[key].username);

                $('#userList').append(' <tr>\
                        <td>'+ result[key].id + '</td>\
                        <td>'+ result[key].firstName + '</td>\
                        <td>'+ result[key].lastName + '</td>\
                        <td>'+ result[key].email + '</td>\
                        <td>'+ result[key].address + '</td>\
                        <td>'+ result[key].username + '</td>\
                      <td> <img src="file:///home/dell/web/t2-backend-api-anupant01/images/upload/' + result[key].images +'"+alt="img" height="100px" width="100px">\
                    <td><button type="button" class="btn btn-danger" uid='+ result[key].id + ' id="delete">Delete</button></td>\
                    </tr>')
            }
        },
        error: function (jqXHR, status) {

        }

    })



    // /*delete data */
    $('#userList').on('click', '#delete', function () {
        // console.log($(this));
        console.log($(this)[0].attributes.uid.nodeValue);
        uid = $(this)[0].attributes.uid.nodeValue;


        var isDelete = confirm ("Are you sure?");

        if (isDelete == true){

        $.ajax({
            url: "http://localhost:7000/v1/register/" + uid,
            method: "DELETE",
            dataType: 'json',
            success: function (result, status) {
                window.location.href = "user_tables.html"
                console.log(result.message)
                $("#message").html(result.message);

            },
            error: function () {
            }


        })
    

}
else{
    window.location.href = "user_tables.html"

}
})


    /*edit ---*/
    $('#userList').on('click', '#edit', function () {
        //this is the userid
        uid = $(this)[0].attributes.uid.nodeValue;
        console.log($(this)[0].attributes.uid.nodeValue);

        $.ajax({

            url: 'http://localhost:7000/v1/register/' + uid,
            method: 'GET',
            dataType: 'json',
            success: function (result) {
                console.log(result);
                $('#firstName').val(result.firstName)
                $('#lastName').val(result.lastName)
                $('#email').val(result.email)
                $('#address').val(result.address)

            },
            error: function () {

            }
        })
    })


})