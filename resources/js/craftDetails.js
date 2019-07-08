$(document).ready(function () {

    $.ajax({

        url:'http://localhost:7000/v1/craftView',
        method:'GET',
        contentType:'application/json',
        dataType:'json',

        success: function(result,status) {

            for (key in result){

                $('#craftDetails').append('    <li>\n' +
                    '<figure style="border: 1px solid black">\n' +
                    ' <img src="http://localhost:7000/images/craft/'+result[key].craftimage+'"+ alt="img" height="100px" width="100px">\n' +
                    '\n' +
                    '<figcaption>\n' +
                    '<h4>'+ result[key].craftName +'</h4>\n' +
                    '<input type="text" hidden  value="'+ window.localStorage.getItem('username') +'" name="username" id="username">\n' +
                    '<input type="text" hidden value="'+ window.localStorage.getItem('id') +'" name="id" id="id">\n' +
                    '<input type="text" hidden value="'+ result[key].id + '" id="craftid" name="craftid">\n' +
                    '<input type="text" hidden value="'+ result[key].craftName + '" id="craftName" name="craftName">\n' +
                    '<input type="text" hidden value="'+ result[key].description + '" id="craftName" name="craftName">\n' +
                    '<input type="text" hidden value="'+ result[key].origination + '" id="item_category" name="item_category">\n' +
                    '<input type="text" hidden value="'+result[key].craftType + '" id="item_description" name="item_description">\n' +
                    '<span >'+ result[key].price +'</span>\n' +
                    '<h4>'+ result[key].description +'</h4>\n\n' +
                   '<h4>'+ result[key].products +'</h4>\n\n' +

                    '</figcaption>\n' +    
                    '</figure>\n' +

                    '</li>')

            }
        },

        error:function(jqXHR,status) {
            console.log(jqXHR)
        }
    })


})