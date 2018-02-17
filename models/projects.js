var mongoose = require("mongoose");

var projectSchema = new mongoose.Schema({
    name: {
        type: String, 
        unique: true,
        required: true
    },
    image: String,
    description: String, 
    link: String,
    course: {
        name: String,
        link: String,
    },
    featured: Boolean,

});

module.exports = mongoose.model("Project", projectSchema)