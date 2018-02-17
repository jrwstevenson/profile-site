var express = require("express");
var router  = express.Router();
var Blog = require("../models/blogs");


// Index Route
router.get("/", function(req, res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log("error");
        } else {
            res.render("blogs/index", {blogs: blogs});
        }
    });
});

//New Route
router.get("/new", function(req, res) {
    res.render("blogs/new");
});

//Create Route
router.post("/", function(req, res){
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
router.get("/:id", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        } else {
            res.render("blogs/show", {blog: foundBlog});
        }
    });
});

//Edit Route
router.get("/:id/edit", function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog){
        if (err){
            res.redirect("/blogs");
        } else {
            res.render("blogs/edit", {blog: foundBlog});
        }
    });
});

//Update Route
router.put("/:id", function(req, res){
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
router.delete("/:id", function(req, res){
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

module.exports = router;