const { Schema, model } = require('mongoose');

const guild = new Schema({
    _id: String,
        config: {
            language: String
        }
})

module.exports = model('guild', guild);