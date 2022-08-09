const Command = require('../../../structures/Command');
const Embed = require('../../../structures/Embed');
const config = require('../../../config');
const { EmbedBuilder } = require('discord.js')
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
        embed.setColor('#2f0b4a');
        interaction.reply({ embeds: [embed]})
    }
}