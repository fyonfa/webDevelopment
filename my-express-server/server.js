//jshint esversion:6
//Express server
const express = require("express");

//app ussually always use
const app = express();

//method that allow us what should happen when a browser make a request to our server
//take the location, request to the "/" home route, and callback the other 2 functions, response
app.get("/", function (req, res) {
    //console.log to log the request
    //console.log(req);
    //
    //response to send a browser a response, we can send HTML

    res.send("<h1>hello world</h1>");
});

//we also can specify other routes, for a lot of different routes
app.get("/contact", function (req, res) {
    res.send("Contact me at fyonfa@gmail.com")
});

//about route
app.get("/about", function (req, res) {
    res.send("I am Fernando, a software engineer")
});


//hobby route
app.get("/hobbies", function (req, res) {
    res.send("I am Fernando, I love Taekwondo and coding")
});

//listen on a specific port for any HTTP request that gets sent to our server
//added also callback function to show in the terminal that message
//Ussually browser send a request to the server to get the data, and server will send a response (js, css, html...)
app.listen(3000, function () {
    console.log("Server started on port 3000")
});
