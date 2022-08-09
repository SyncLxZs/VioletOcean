const { Schema, model } = require('mongoose');

const memberRPG = new Schema({
    _id: String,
        member: {
            wallet: Number
        }
})

module.exports = model('memberRPG', memberRPG);