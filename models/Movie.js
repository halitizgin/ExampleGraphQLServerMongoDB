const mongoose = require('mongoose');
const ObjectId = mongoose.ObjectId;
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    directorId: {
        type: ObjectId,
        required: true
    },
    imdb: {
        type: Number,
        required: true
    },
    subject: {
        type: String,
        default: ""
    }
});

module.exports = mongoose.model("movie", movieSchema);