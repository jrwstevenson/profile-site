require('dotenv').config()
var express     = require("express"),
    app         = express(),
    mongoose    = require("mongoose"),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    expressSanitizer = require("express-sanitizer")

// Database 
var dburl = process.env.DBURL;
mongoose.connect(dburl);

    //APP CONFIG    

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(expressSanitizer());

//Mongoose CONFIG
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

//RESTful Routes

app.get("/", function(req, res){
    res.render("index");
});
// Index Route
app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log("error");
        } else {
            res.render("blogs", {blogs: blogs});
        }
    });
});
//New Route
app.get("/blogs/new", function(req, res) {
    res.render("new");
});
//Create Route
app.post("/blogs", function(req, res){
    //create blog
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.create(req.body.blog, function(err, newBlog){
        if(err){
            res.render("new");
        } else {
             //redirect
            res.redirect("/blogs");
        }
    });
  
});

// SHOW ROUTE
app.get("/blogs/:id", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        } else {
            res.render("show", {blog: foundBlog});
        }
    });
});

//Edit Route
app.get("/blogs/:id/edit", function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog){
        if (err){
            res.redirect("/blogs");
        } else {
            res.render("edit", {blog: foundBlog});
        }
    });
});

//Update Route
app.put("/blogs/:id", function(req, res){
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
        if(err){
            console.log(err);
        } else {
            res.redirect("/blogs/" + req.params.id);
        }
    });
});

//DELETE route
app.delete("/blogs/:id", function(req, res){
    //Delete
    Blog.findByIdAndRemove(req.params.id, function(err){
        //redirect
        if(err) {
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs");
        }
    });
    
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Profile Server Started");
});


 
