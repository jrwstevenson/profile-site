var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
  var projects = [
    {
      name: "Real time Clock",
      description: "A clockface with live and accurate time.",
      slug: "clock",
      image: "jsclock.jpg"
    },
    {
      name: "Drum Kit",
      description: "Use the keys shown on screen to mash out a great beat!",
      slug: "drums",
      image: "drums.jpg"
    },
    {
      name: "Flex Panel Gallery",
      description: "Click one of the pictures to release the power of flexbox.",
      slug: "flexpanelgallery",
      image: "flexpanelgallery.jpg"
    },
    {
      name: "Type Ahead Search",
      description:
        "Find the population of major US Cities and States using this JSON filter ",
      slug: "typeaheadsearch",
      image: "typeaheadsearch.jpg"
    },
    {
      name: "Canvas Draw",
      description: "Get creative and start drawing",
      slug: "canvas",
      image: "canvas.jpg"
    },
    {
      name: "Custom Video Player",
      description:
        "Some video players just dont vive you all the features you want, so build your own!",
      slug: "videoplayer",
      image: "videoplayer.jpg"
    },
    {
      name: "Slide on Scroll",
      description:
        "See the images get triggered but position pono the page for some nice animation.",
      slug: "slideonscroll",
      image: "slideonscroll.jpg"
    },
    {
      name: "Simple To-Do",
      description: "My first to do list! Simple yet effective.",
      slug: "simpletodo",
      image: "simpletodo.jpg"
    },
    {
      name: "Color Game",
      description: "OMG, I can waste so much time playing this game!",
      slug: "colorgame",
      image: "colorgame.jpg"
    },
    {
      name: "Local Storage",
      description:
        "Use the application memory in your browser to remember for next time.",
      slug: "localstorage",
      image: "localstorage.jpg"
    },
    {
      name: "Mouse Move Shadow",
      description: "Whaooo... psychedelic man!",
      slug: "mousemoveshadow",
      image: "mousemoveshadow.jpg"
    },
    {
      name: "Speech Synthesis",
      description: "Somtimes talking it too much effort",
      slug: "speechsynthesis",
      image: "speechsynthesis.jpg"
    },
    {
      name: "Countdown Timer",
      description: "this is the clock description",
      slug: "countdown",
      image: "countdown.jpg"
    },
    {
      name: "Whack A Mole",
      description: "this is the clock description",
      slug: "whackamole",
      image: "whackamole.jpg"
    }
  ];

  res.render("playground/playground", {
    projects: projects
  });
});

router.get("/clock", function(req, res) {
  res.render("playground/clock");
});

router.get("/drums", function(req, res) {
  res.render("playground/drums");
});

router.get("/flexpanelgallery", function(req, res) {
  res.render("playground/flexpanelgallery");
});

router.get("/typeaheadsearch", function(req, res) {
  res.render("playground/typeaheadsearch");
});

router.get("/canvas", function(req, res) {
  res.render("playground/canvas");
});

router.get("/videoplayer", function(req, res) {
  res.render("playground/videoplayer");
});

router.get("/slideonscroll", function(req, res) {
  res.render("playground/slideonscroll");
});

router.get("/simpletodo", function(req, res) {
  res.render("playground/simpletodo");
});

router.get("/colorgame", function(req, res) {
  res.render("playground/colorgame");
});

router.get("/localstorage", function(req, res) {
  res.render("playground/localstorage");
});

router.get("/mousemoveshadow", function(req, res) {
  res.render("playground/mousemoveshadow");
});

router.get("/speechsynthesis", function(req, res) {
  res.render("playground/speechsynthesis");
});

router.get("/countdown", function(req, res) {
  res.render("playground/countdown");
});

router.get("/whackamole", function(req, res) {
  res.render("playground/whackamole");
});

module.exports = router;
