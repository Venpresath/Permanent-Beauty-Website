var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require('path');



mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/PBW");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

//server functions
app.get("/", function(req,res){
    res.render("index");
});

app.get("/gallery", function(req,res){
    res.render("gallery");
});

app.get("/mailpage", function(req,res){
    res.render("mailpage");
});

app.get("/QA", function(req,res){
    res.render("QA");
});

app.get("/about", function(req,res){
    res.render("about");
});

app.get("/services", function(req,res){
    res.render("services");
});

app.get("/contact", function(req,res){
    res.render("contact");
});

//console confirmation
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Damn Shit Works");
});


//email client

//Tamy's email: tamy.vogtb@gmail.com