const Command = require('../../../structures/Command');
const Embed = require('../../../structures/Embed');
const config = require('../../../config.json');

module.exports = class help extends Command {
    constructor(client, options) {
        super(client, {
            name: 'help',
            description: '[🪵 Utils] Precisa de ajuda? execute!',
            permissions: ['EMBED_LINKS']
        })
    }
    run = (interaction) => {
        const embed = new Embed({
            title: 'Help Command',
        })
        embed.setColor(config.color1);
        interaction.reply({ embeds: [embed]})
    }
}