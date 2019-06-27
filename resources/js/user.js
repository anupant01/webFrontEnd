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



     /* update */
    // var uid;
    // $('#userList').submit(function (e) {


    //     e.preventDefault();

    //     var editData = {
    //         firstName: $("#firstName").val(),
    //         lastName: $("#lastName").val(),
    //         email: $("#email").val(),
    //         address: $("#address").val(),

    //        // price: $("#craftprice").val()

    //     }
    //     // console.log(editData);

    //     $.ajax({

    //         url: 'http://localhost:7000/v1.0/addcraft' + uid, // here uid has already been set to actual userid in previous funciton when edit is clicked, since uid is global
    //         method: "PUT",
    //         contentType: 'application/json',
    //         dataType: 'json',
    //         data: JSON.stringify(editData),
    //         success: function (result) {
    //             console.log(result)
    //             window.location.href = "user_tables.html"
    //             // your logic here , redirect to another page or show message etc
    //         },
    //         error: function () {

    //         }

    //     })

    // })
    //             <td><button class="btn btn-primary" id="edit" uid='+ result[key].id + ' data-toggle="modal" data-target="#exampleModalLong">Edit</button></td>\





})