var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

//schema setup
var imageSchema = new mongoose.Schema({
    image: String,
    description: String
});

module.exports = mongoose.model("Image", imageSchema);