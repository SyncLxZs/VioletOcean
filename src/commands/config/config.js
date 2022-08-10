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
        const command = interaction.options.getSubcommand();
        if(command === 'language') {
            require('../../subcommands/language')(this.client, interaction);
        }
    }
}