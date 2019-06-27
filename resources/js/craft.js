$(document).ready(function () {

    $("#craftForm").submit(function (event) {
        event.preventDefault();
        console.log('submit button clicked');
        var formData = new FormData();

        const craftData = {

            craftName: $("#craftName").val(),
            description: $("#craftDesc").val(),
            origination: $("#craftOrigin").val(),
            craftType: $("#craftType").val(),
            products: $("#craftproduct").val(),
            price: $("#craftprice").val(),
            craftimage: $('#craftimage')[0].files[0]

        }
        // for (key in craftData ){
        // 	console.log(craftData[key]);
        // }

        console.log(craftData);
        console.log($('#craftimage')[0].files[0]);

        for (key in craftData) {
            console.log(craftData[key]);
            formData.append(key, craftData[key]);
        }


        $.ajax({
            url: "http://localhost:7000/v1.0/addcraft",
            method: "POST",
            contentType: false,
            dataType: "json",
            processData: false,
            data: formData,
            success: function (result, status) {
                // window.location.href= "dashboard.html"
                console.log(result);
                console.log(status);
              
                


            },
            error: function (jqXHR) {
                console.log(jqXHR);
                // $("#message").html(jqXHR.responseText);

            }
        })
    })



    /* retrieving data craft*/
    $.ajax({
        url: 'http://localhost:7000/v1.0/addcraft',
        /* data is not needed
        contenttype is also not neede */
        dataType: 'json',
        success: function (result, status) {
            // console.log(result);

            for (key in result) {
                // console.log(result[key].username);

                $('#craftList').append(' <tr>\
                        <td>'+ result[key].id + '</td>\
                        <td>'+ result[key].craftName + '</td>\
                        <td>'+ result[key].description + '</td>\
                        <td>'+ result[key].origination + '</td>\
                        <td>'+ result[key].craftType + '</td>\
                        <td>'+ result[key].products + '</td>\
                        <td>'+ result[key].price + '</td>\
                      <td> <img src="file:///home/dell/web/t2-backend-api-anupant01/images/craft/' + result[key].craftimage +'"+alt="img" height="100px" width="100px">\
                    <td><button class="btn btn-primary" id="edit" uid='+ result[key].id + ' data-toggle="modal" data-target="#exampleModalLong">Edit</button></td>\
                    <td><button type="button" class="btn btn-danger" uid='+ result[key].id + ' id="delete">Delete</button></td>\
                    </tr>')
            }
        },
        error: function (jqXHR, status) {

        }

    })



    /*delete data */
    $('#craftList').on('click', '#delete', function () {
        // console.log($(this));
        console.log($(this)[0].attributes.uid.nodeValue);
        uid = $(this)[0].attributes.uid.nodeValue;

        $.ajax({
            url: "http://localhost:7000/v1/addcraft/" + uid,
            method: "DELETE",
            dataType: 'json',
            success: function (result, status) {
                window.location.href = "tables.html"
                console.log(result.message)
                $("#message").html(result.message);

            },
            error: function () {
            }


        })
    })


    /*edit ---*/
    $('#craftList').on('click', '#edit', function () {
        //this is the userid
        uid = $(this)[0].attributes.uid.nodeValue;
        console.log($(this)[0].attributes.uid.nodeValue);

        $.ajax({

            url: 'http://localhost:7000/v1.0/addcraft' + uid,
            method: 'GET',
            dataType: 'json',
            success: function (result) {
                console.log(result);
                $('#craftName').val(result.craftName)
                $('#craftDesc').val(result.description)
                $('#craftOrigin').val(result.origination)
                $('#craftType').val(result.craftType)
                $('#craftproduct').val(result.products)
                $('#craftprice').val(result.price)

            },
            error: function () {

            }
        })
    })


    /* update */
    var uid;
    $('#updateCraft').submit(function (e) {


        e.preventDefault();

        var editData = {
            craftName: $("#craftName").val(),
            description: $("#craftDesc").val(),
            origination: $("#craftOrigin").val(),
            craftType: $("#craftType").val(),
            products: $("#craftproduct").val(),
            price: $("#craftprice").val()
        }
        // console.log(editData);

        $.ajax({

            url: 'http://localhost:7000/v1.0/addcraft' + uid, // here uid has already been set to actual userid in previous funciton when edit is clicked, since uid is global
            method: "PUT",
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify(editData),
            success: function (result) {
                console.log(result)
                window.location.href = "tables.html"
                // your logic here , redirect to another page or show message etc
            },
            error: function () {

            }

        })

    })





})