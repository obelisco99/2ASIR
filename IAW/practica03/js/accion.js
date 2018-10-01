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
            var texto = "";
            for(var persona of datos["results"]){
                $("body").append(
                    "<div class='fila'>";
                        "<figure>";
                            "<img src='" +persona["picture"]["large"]+"'>";
                        "</figure>";
                    "</div>";
                    "<div class='texto'>"
                        "<p>"+persona["name"]["first"]+"</p>";
                        "<p>"+persona["name"]["last"]+"</p>";
                        "<p>"+persona["email"]+"</p>";
                        "<p>"+persona["location"]["street"]+persona["location"]["postcode"]+persona["location"]["city"]+persona["location"]["state"]+"</p>";

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


