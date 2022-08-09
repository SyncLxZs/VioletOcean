const Event = require('../../structures/Event');
const { interactionType } = require('discord.js')
module.exports = class interactionCreate extends Event {
    constructor(client, options){
        super(client, {
            name: 'interactionCreate'
        })
    }

    run = (interaction) => {

        if(interaction.isChatInputCommand()) {
            let cmd = this.client.commands.find(f => f.name === interaction.commandName);
            cmd.run(interaction);
        };

    };
}