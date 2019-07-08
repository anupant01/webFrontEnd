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
                window.location.href= "tables.html"
                console.log(result);
                console.log(status);
                $("#message_craft").html(result.message);
                


            },
            error: function (jqXHR) {
                console.log(jqXHR);
                $("#message_craft").html(jqXHR.responseText);

            }
        })
    })
})
