const { EmbedBuilder } = require("discord.js");

const embed = class embed extends EmbedBuilder{
    constructor(embed) {
        super({
            title: embed.title,
            description: embed.description,
            color: embed.color,
            fields: embed.fields,
            footer: embed.footer,
            timestamp: embed.timestamp
        })
        
    }
}

module.exports = embed;