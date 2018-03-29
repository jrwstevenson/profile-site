require("dotenv").config();
var express = require("express"),
	app = express(),
	dotenv = require("dotenv").config(),
	mongoose = require("mongoose"),
	bodyParser = require("body-parser"),
	methodOverride = require("method-override"),
	expressSanitizer = require("express-sanitizer");

// Database
var dburl = process.env.DBURL;
mongoose.connect(dburl);

//APP CONFIG

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(expressSanitizer());

// Require Models
var Blog = require("./models/blogs");
var Project = require("./models/projects");

// Require Routes
var blogRoutes = require("./routes/blogs");
var projectRoutes = require("./routes/projects");
var playgroundRoutes = require("./routes/playground");

// Use Routes Prefix
app.use("/blogs", blogRoutes);
app.use("/projects", projectRoutes);
app.use("/playground", playgroundRoutes);

//Index Route for Landing Page
app.get("/", function(req, res) {
	res.render("index");
});

app.listen(process.env.PORT, process.env.IP, function() {
	console.log("Profile Server Started on port " + process.env.PORT);
});
