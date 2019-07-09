$(document).ready(function () {

    $.ajax({

        url:'http://localhost:7000/v1/craftView',
        method:'GET',
        contentType:'application/json',
        dataType:'json',

        success: function(result,status) {

            for (key in result){

                $('#craftDetails').append(
                    '<div class="cont1">'+
                    '<div class"view1">' +
                    ' <img src="http://localhost:7000/images/craft/'+result[key].craftimage+'"+ alt="img" height="200px" width="200px" style="margin:3%">\n' +
                    '\n' +
                    '<div>\n' +
                    '<h4 style="margin:3%"> Name: '+ result[key].craftName +'</h4>\n' +
                    '<h4 style="margin:3%"> Description: '+ result[key].description +'</h4>\n\n' +
                    '<h4 style="margin:3%"> Price: '+ result[key].price +'</span>\n' +
                   '<h4 style="margin:3%">Product: '+ result[key].products +'</h4>\n\n' +
                   '<h4 style="margin:3%">Location: '+ result[key].origination +'</h4>\n\n' +
                    '</div>' 
    
    )
                
            }
        },

        error:function(jqXHR,status) {
            console.log(jqXHR)
        }
    })


})