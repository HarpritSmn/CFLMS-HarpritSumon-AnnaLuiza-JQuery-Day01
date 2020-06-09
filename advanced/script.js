$(document).ready(function(){
    // it will activate when the DOM has been fully loaded  
    // so please write within this function your queries

$("a").prop("href", "http://www.codefactory.wien");
$("code").css("color", "red");
$("ol > li").css("background-color", "#2a7b90");
$('textarea').val('Express your opinion...');
$('img').prop("src",  "https://codefactory.wien/wp-content/themes/hestia/cf-images/big-jpg/1-frontend.jpg");
$('blockquote').css( {
       "background-color" : "orange",
       "font-style":  "italic"
   }
);
$('#logo').css("color", "black");
$('.gray').css("color", "white");
$('.date').remove();

var newItem = $('<li><a>New Template</a></li>'); // definition of the new element
            $('.sidemenu').append(newItem); // insert the new element before the <li> tag
     var newItem2 = $('<li><a>Order Templates</a></li>'); // definition of the new element
            $('.sidemenu').append(newItem2);  
            var newItem3 = $('<li><a>Contact Us</a></li>'); // definition of the new element
            $('.sidemenu').append(newItem3);

//"When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop."

//$("p:contains('Be not afraid of life. Believe that life is worth living, and your belief will help create the fact.')").text("When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop.");
var txt2 ='Be not afraid of life. Believe that life is worth living, and your belief will help create the fact.' 

$("p:contains('"+txt2+"')").text("When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop.");
});

