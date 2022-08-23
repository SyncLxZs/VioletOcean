const Command = require('../../../structures/Command');
const Embed = require('../../../structures/Embed');
const config = require('../../../config.json');

module.exports = class register extends Command {
    constructor(client, options) {
        super(client, {
            name: 'register',
            description: 'Register your member in my RPG command',
            options: [
                {
                    name: 'name',
                    description: 'your custom name in RPG',
                    type: 3, 
                    required: true
                }
            ]
        })
    }
    run= async(interaction) => {
        const customName = interaction.options.getString('name');
        const dbLang = await this.client.db.guild.findOne({ _id: interaction.guild.id }) || new this.client.db.guild({ _id: interaction.guild.id});
        const clang = dbLang.config.language || 'enus';
        const lang = require(`../../../langs/${clang}`);

        if(await this.client.db.member?.findOne({ _id: interaction.member.id})) return interaction.reply({ content: lang.registerError, ephemeral: true});
        let db = new this.client.db.member({ _id: interaction.member.id });
        console.log(db)
        db.member.wallet = 1000;
        db.member.bank = 5000;
        db.save();
        
        const embed = new Embed({
            title: `${lang.registerSucess}`,
            description: `**🗳️ ${lang.name}:** \`${customName}\`\n**⭐ ${lang.star}:** \`1000\`\n**🏦 ${lang.bank}:** \`5000\``
        });
        embed.setColor(config.color1);

        interaction.reply({ embeds: [embed], ephemeral: true});
    }
}