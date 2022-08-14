const { Client } = require('discord.js');
const fs = require('fs');
const Models = require('../database/Models');
const { connect } = require('mongoose');

const client = class extends Client {
    constructor(options){
        super(options);
        this.commands = [];
        this.dataCommand = [];
        this.loadCommands();
        this.loadEvents();
        this.DatabaseConnect();
       
    }
    
    loadCommands(path = './src/commands') {
        const folders = fs.readdirSync(path);

        for(const category of folders) {
            const commands = fs.readdirSync(`${path}/${category}`);
            for (let cmd of commands) {
                const commandClass = require(`../src/commands/${category}/${cmd}`);
                const command = new (commandClass)(this);
                this.commands.push(command);
                this.dataCommand.push(commandClass.data);
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

    async DatabaseConnect() {
        const connection = await connect(process.env.MONGOOSE, {
            useNewUrlParser: true,
        });
        console.log('✔️  Database Conectada');
        this.db = { connection, ...Models };
    }

}
module.exports = client;