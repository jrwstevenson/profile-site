var express = require("express"),
    router = express.Router(),
    Project = require("../models/projects");

// Index Route

router.get("/", function(req, res) {
    Project.find({}, function(err, projects){
        if(err){
            console.log(err);
        } else {
            res.render("projects/index", {projects: projects});
        }
    });
});

// New Route
router.get("/new", function(req, res){
    res.render("projects/new")
});

// Create Route
router.post("/", function(req, res){
    Project.create(req.body.project, function(err, newBlog){
        if(err){
            res.render("/new");
        } else {
            res.redirect("/projects")
        }
    })
})

// Show Route
router.get("/:id", function(req, res){
    Project.findById(req.params.id, function(err, foundProject){
        if(err){
            res.redirect("/projects");
            
            // console.log(err);
        } else {
            res.render("projects/show", {project: foundProject});
            console.log(foundProject);
        }
    });
});

//Edit Route
router.get("/:id/edit", function(req, res){
    Project.findById(req.params.id, function(err, foundProject){
        if(err){
            res.redirect("/projects");
        } else {
            res.render("projects/edit", {project:foundProject});
        }
    });
});

// Update Route
router.put("/:id", function(req, res){
    Project.findByIdAndUpdate(req.params.id, req.body.project, function(err, updateProject){
        if(err) {
            console.log(err);
        } else {
            res.redirect("/projects/" + req.params.id);
        }
    });
});

// Delete Route
router.delete("/:id", function(req, res) {
    Project.findByIdAndRemove(req.params.id, function(err){
        if(err) {
            console.log(err);
            res.redirect("/projects/" + reg.params.id);
        } else {
            res.redirect("/projects");
        }
    });
});

module.exports = router;