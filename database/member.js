const { Schema, model } = require('mongoose');

const memberRPG = new Schema({
    _id: String,
        list: {
            
        },

        member: {
            wallet: Number,
            bank: Number,
            name: String, 
            gender: Number,

        }
})

module.exports = model('memberRPG', memberRPG);