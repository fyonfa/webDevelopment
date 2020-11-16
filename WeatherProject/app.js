const express = require("express");
//to allow use to catch the text from the post catched
const bodyParser = require("body-parser");
const request = require("request");
const myKey = require("./config");

//built native, no need to install it
const https = require("https");
const { send } = require("process");


const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    //going to sen the index.html
    res.sendFile(__dirname + "/index.html")

});

app.post("/", function (req, res) {

    const query = req.body.cityName;
    //const apikey = config.MY_KEY;
    const apikey = myKey;

    const unit = "metric";
    //it needs to have the https:// format
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apikey + "&units=" + unit;

    //response to do not repear res
    //method to get to the API of open weather
    https.get(url, function (response) {
        //we can be more specific and console.log(response.statusCode) get the status;
        //console.log(response);
        console.log("Response Code: " + response.statusCode);

        //we call it when we get some data, and callback function to log the data
        //we get it in hexadecimal code, but we can convert the data into a JSON
        //there are other methods also to reverse it
        response.on("data", function (data) {
            //console.log(data);
            const weatherData = JSON.parse(data);
            //now we can break the code in parts to get the specific data:
            //console.log(weatherData);
            //we can do it wuick with JSON proviewer
            const temp = weatherData.main.temp;
            //console.log(temp);
            const weatherDescription = weatherData.weather[0].description;
            const weatherIcon = weatherData.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";
            //console.log(weatherDescription);
            //res, refering to ythe one above
            //we can have only one res.send, but multiple res.write
            res.write("<p>The weather is currently " + weatherDescription + "</p>");
            res.write("<h1>The temperture in " + req.body.cityName + " is " + temp + " degree Celcius</h1> ");
            res.write("<img src=" + imageURL + ">");
            res.send();

        });


    });

    //instead of this message I want to show the data from openWeather
    //we can unse the native http node.js module but there are other ways to do it, check this
    //https://www.twilio.com/blog/2017/08/http-requests-in-node-js.html 
    /**** we should have only one send, if not we will get an error*/
    //res.send("Server is running");



})
















app.listen(3000, function () {
    console.log("Server is running on port 3000");
})