/*$(document).ready(function () {
    $("h1").css("color", "red");

}) //if we have the jquery at the end of the html body, it is not ncesary this...*/
//$("h1").css("color", "red"); this is not recommendable
//better like this
$("h1").addClass("big-title xxx xxx xxx"); //in can include more classes also
$("h1").removeClass("big-title");
$("h1").hasClass("margin-50");

$("h1").text("bye");
$("h1").html("<em>hey</em>")
//atributes
$("img").attr("src");
$("a").attr("href", "http://yahoo.com");

//listeners
$("button").click(function () {
    $("h1").css("color", "purple");

});

$("input").keydown(function (event) {
    $("h1").text(event.key);

});

//also like this
$("h1").mouseover(function () {
    $("h1").css("color", "purple")
});
//after, init. prepenn to add html code