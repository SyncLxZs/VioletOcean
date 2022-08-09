const Command = require('../../../structures/Command');
module.exports = class ping extends Command {
    constructor(client, options) {
        super(client, {
            name: 'ping',
            description: '[🪵 Utils] visualize o ping do bot',
        })
    }
    run = (interaction) => {
        interaction.reply({ content: `${interaction.user.toString()}\n🏓 | ${this.client.ws.ping}\n📡 | ${interaction.createdTimestamp - Date.now()}`, ephemeral: true})
    }
}