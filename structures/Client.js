const { Client } = require('discord.js');
const fs = require('fs');
const client = class extends Client {
    constructor(options){
        super(options);
        this.commands = [];
        this.loadCommands();
        this.loadEvents();
    }

    loadCommands(path = './src/commands') {
        const folders = fs.readdirSync(path);

        for(const category of folders) {
            const commands = fs.readdirSync(`${path}/${category}`);
            for (let cmd of commands) {
                const commandClass = require(`../src/commands/${category}/${cmd}`);
                const command = new (commandClass)(this);
                this.commands.push(command);
            }
        }
    }

    loadEvents(path = './src/events') {
        const folder = fs.readdirSync(path);

        for(const events of folder) {
            let event = require(`../src/events/${events}`);
            const evt = new (event)(this);
            this.on(evt.name, evt.run);
        }
    }

}

module.exports = client;