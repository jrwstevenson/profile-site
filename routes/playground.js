var express = require("express");
var router  = express.Router();

router.get("/", function(req, res){
    var projects = [
        {
            name: "Real time Clock",
            description: "this is the clock description",
            slug: "clock",
            image: "jsclock.jpg"
        },
        {
            name: "Drum Kit",
            description: "this is the clock description",
            slug: "drums",
            image: "drums.jpg"
        },
        {
            name: "Flex Panel Gallery",
            description: "this is the clock description",
            slug: "flexpanelgallery",
            image: "flexpanelgallery.jpg"
        },
        {
            name: "Type Ahead Search",
            description: "this is the clock description",
            slug: "typeaheadsearch",
            image: "typeaheadsearch.jpg"
        },
        {
            name: "Canvas Draw",
            description: "this is the clock description",
            slug: "canvas",
            image: "canvas.jpg"
        },
        {
            name: "Custom Video Player",
            description: "this is the clock description",
            slug: "videoplayer",
            image: "videoplayer.jpg"
        },
        {
            name: "Slide on Scroll",
            description: "this is the clock description",
            slug: "slideonscroll",
            image: "slideonscroll.jpg"
        },
        {
            name: "Simple To-Do",
            description: "this is the clock description",
            slug: "simpletodo",
            image: "simpletodo.jpg"
        }
    ];

    res.render("playground/playground", {projects: projects});
});

router.get("/clock", function(req, res){
    res.render("playground/clock");
});

router.get("/drums", function(req, res){
    res.render("playground/drums");
});

router.get("/flexpanelgallery", function(req, res){
    res.render("playground/flexpanelgallery");
});

router.get("/typeaheadsearch", function(req, res){
    res.render("playground/typeaheadsearch");
});

router.get("/canvas", function(req, res){
    res.render("playground/canvas");
});

router.get("/videoplayer", function(req, res){
    res.render("playground/videoplayer");
});

router.get("/slideonscroll", function(req, res){
    res.render("playground/slideonscroll");
});

router.get("/simpletodo", function(req, res){
    res.render("playground/simpletodo");
});


module.exports = router;