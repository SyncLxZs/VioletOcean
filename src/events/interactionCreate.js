const Event = require('../../structures/Event');
const config = require('../../config.json');
const Embed = require('../../structures/Embed');

module.exports = class interactionCreate extends Event {
    constructor(client, options){
        super(client, {
            name: 'interactionCreate'
        })
    }

    run = async(interaction) => {
        if(interaction.isSelectMenu()) {
            const categorie = interaction.values[0];
            let commands = this.client.dataCommand.filter(f => f.class === categorie);
            let arr = [];
            const db = await this.client.db.guild.findOne({ _id: interaction.guild.id }) || new this.client.db.guild({ _id: interaction.guild.id});
            let lang = db.config.language || 'enus';
            let desc;
           
            commands.forEach(c => {
                if(lang === 'enus') {
                    desc = c.en;
                } else if(lang === 'ptbr') {
                    desc = c.br;
                } else if (lang === 'spanish') {
                    desc = c.spanish;
                }
                arr.push(`**${c.name}**\n\`${desc.description}\``)
            });
            
            const embed = new Embed({
                title: commands[0].label,
                description: arr.join('\n\n')
            });
            embed.setColor(config.color1);
            interaction.update({ embeds: [embed]});

            if(Date.now() - interaction.message.createdTimestamp > 120000) {
                    interaction.message.edit({embeds: [embed], components: []});
            }
        };

        if(interaction.isChatInputCommand()) {
            let cmd = this.client.commands.find(f => f.name === interaction.commandName);
            cmd.run(interaction);
        };

    };
}