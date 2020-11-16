//jshint esversion: 6
//require express for the server
/*******************Declaration*************************/
const express = require("express");
//we specify what we want to use
const app = express();

//require body parser to get the posts.
//Express works with bodyparser, and it has different modes: text, json, urlencoded(this one we use
//when we try to parse dat comming from a HTML form)
//and enabling it to true, allow us to psost nested objects, body parse requires it
const bodyParser = require("body-parser");

/***************************Main program**************************/
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (req, res) {
    //we are going to seng the full HMTML document
    //with server we have to specify a path, a constant __dirname, this will give me
    //the filepath of the current file no matter where is hosted
    res.sendFile(__dirname + "/index.html");
    //console.log(__dirname)
});

//if we are getting a 404 is because our servers doesnt have a way to process post requests
//basically, not accepting anyone to post in our home route
//in order to get the data posted we have to install other package body-parser
//this will allow us to parse the informatison that we get sent from the post request, and we
//can access to this 
app.post("/", function (req, res) {

    //parse version of the http request
    //console.log(req.bodynum1); if we want to log only the first number 
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;
    res.send("The result of the calculation is " + result);


});

//3000 is used when developing locally
app.listen(3000, function () {
    console.log("running on port 3000.");
});

