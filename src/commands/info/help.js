const Command = require('../../../structures/Command');
const Embed = require('../../../structures/Embed');
const config = require('../../../config.json');

module.exports = class help extends Command {
    constructor(client, options) {
        super(client, {
            name: 'help',
            description: '[🪵 Utils] Need help? run!',
            permissions: ['EMBED_LINKS'],
            options: [
                {
                    name: 'name',
                    description: 'See informations about one command',
                    required: false, 
                    type: 3
                }
            ]
        })
    }
    run = async (interaction) => {
        const db = await this.client.db.guild.findOne({ _id: interaction.guild.id }) || new this.client.db.guild({ _id: interaction.guild.id});
        const language = require(`../../../langs/${db.config.language? db.config.language : 'enus'}`);
        
        if(this.client.dataCommand.find(c => c.name.toLowerCase() === interaction.options.getString('name')?.toLowerCase())) {
            let commandData = this.client.dataCommand.find(c => c.name.toLowerCase() === interaction.options.getString('name'));
            let lang = db.config.language || 'enus';
            let desc;
            if(lang === 'enus') {
                desc = commandData.en;
            } else if(lang === 'ptbr') {
                desc = commandData.br;
            } else if (lang === 'spanish') {
                desc = commandData.spanish;
            }
            
            const embed = new Embed({
                title: `📒 ${commandData.name}`,
                description: `🔗** Class:**\n\`${commandData.label}\``,
                fields: [
                    {
                        name: `📥 Use:`,
                        value: `${desc.use}`
                    },
                    {
                        name: `🏷️ Desc:`,
                        value: `${desc.description}`
                    }
                ]
            });
            embed.setColor(config.color1);
            interaction.reply({ content: interaction.user.toString(), embeds: [embed]});
            return;
        }


        const embed = new Embed({
            title: `${language['help-title']}`,
            description: `${language['help-description']}`
        });
        embed.setColor(config.color1);
        interaction.reply({ content: interaction.user.toString(), embeds: [embed]})
    }
}

module.exports.data = {
    label: '[🪵 Utils]',
    class: 'utils',
    name: 'Help',
    en: {
        description: 'Open my help menu',
        use: '/Help | /Help <command name>'
    },
    pt: {
        description: 'Abra meu menu de ajuda',
        use: '/Help | /Help <nome do comand>'
    },
    spanish: {
        use: '/Help | /Help <nombre de comando>',
        description: 'Abrir mi menú de ayuda'
    }
}