$(function () {
    $("button").on("click", function () {
        $(this).css({
            "display": "none"
        });
        var jqxhr=$.ajax({
            url: 'https://randomuser.me/api/',
            dataType: 'json',
            data: {
                results:50
            },
            method: 'GET'
        });
        jqxhr.done(function(datos){
            for(var persona of datos["results"]){
                $("body").append(
                    "<p>"+persona["name"]["first"]+"</p>"
                )
            }

        })
    })
});
    /*$("button").on("click",getUsers);
    function getUsers() {
        $.ajax({
            url: 'https://randomuser.me/api/',
            dataType: 'json',
            data: {
                result:50
            },
            type: 'GET'
        })
    }})*/


