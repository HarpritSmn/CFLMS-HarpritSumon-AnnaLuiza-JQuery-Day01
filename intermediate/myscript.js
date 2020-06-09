$(document).ready(function() {
        for (i = 0; i < 5; i++) {
            var newItem = $('<div>New Div</div>'); // definition of the new element
            $('article').prepend(newItem); // insert the new element before the <li> tag

            $('article div').addClass('box');

            $('input').val('Search for..');

            //$("a[href$='.com]");
            $("a").prop("href", "http://www.codefactory.wien");
            $("#myform").remove();
        }});


$("form").submit(function(e) {

    e.preventDefault();

});

