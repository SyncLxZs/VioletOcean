const { Client } = require('discord.js');

const client = class extends Client {
    constructor(options){
        super(options)
    }
}

module.exports = client;