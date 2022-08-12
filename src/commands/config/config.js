const Command = require('../../../structures/Command');
const Embed = require('../../../structures/Embed');

module.exports = class config extends Command {
    constructor(client, options) {
        super(client, {
            name: 'config',
            description: '[⚒️ Config] Configure meu sistemas neste servidor',
            options: [
                {
                    type: 1,
                    name: 'language',
                    description: '[⚒️ Config] Escolha a língua que eu irei falar'
                }
            ]
        })
    }
    run = async(interaction) => {
        let db = await this.client.db.guild.findOne({ _id: interaction.guild.id });
        let messages = require(`../../../langs/${db.config.language ? db.config.language : 'enus'}`);
        if(interaction.member.permissions.has('MANAGE_GUILD')) return interaction.reply({ content: `${interaction.user.toString()} | ${messages.MissingPermissions} MANAGE_GUILD`, ephemeral: true});
        const command = interaction.options.getSubcommand();
        if(command === 'language') {
            require('../../subcommands/language')(this.client, interaction);
        }
    }
}