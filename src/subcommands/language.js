const Embed = require('../../structures/Embed');
const config = require('../../config.json');
const Button = require('../../structures/Button');
const { ActionRowBuilder } = require('discord.js');

module.exports = async(client, interaction) => {
    const db = await client.db.guild.findOne({ _id: interaction.guild.id}) || new client.db.guild({ _id: interaction.guild.id});
    const nowLang = db.config.language || 'enus';
    const embed = new Embed({
        title: `Language - ${interaction.guild.name}`,
        description: `📑 Select below own language you want to me speak on this server\n
        ${nowLang.replace('enus', '🇺🇸 EN-US').replace('ptbr', '🇧🇷 PT-BR').replace('spanish', '🇪🇸 es-ES')}
        `
    })
    embed.setColor(config.color1);

    const buttons =  new ActionRowBuilder()
        .addComponents([
            new Button({
                label: 'EN-US',
                customId: 'enus',
                style: 4,
                emoji: '🇺🇸'
            }),
            new Button({
                label: 'PT-BR',
                customId: 'ptbr',
                style:  3,
                emoji: '🇧🇷'
            }),
            new Button({
                label: 'es-ES',
                customId: 'spanish',
                style: 2,
                emoji: '🇪🇸'
            })
        ])
    interaction.reply({ embeds: [embed], components: [buttons], ephemeral: true});

    const filter = m => m.member.id === interaction.member.id;
    const collector = interaction.channel.createMessageComponentCollector({filter, max: 1, time: 120000});
        collector.on('collect', b => {
           if(b.customId === 'ptbr') {
                b.reply({ content: `Linguagem alterada para 🇧🇷 PT-BR`});
                db.config.language = 'ptbr';
                db.save();
                interaction.editReply({embeds: [embed], ephemeral: true, components: []});
           } else if(b.customId === 'spanish') {
                b.reply({ content: `Idioma cambiado a 🇪🇸 en-ES`});
                db.config.language = 'spanish';
                db.save();
                interaction.editReply({embeds: [embed], ephemeral: true, components: []});
           } else if(b.customId === 'enus') {
                b.reply({ content: 'Language changed to 🇺🇸 EN-US'});
                db.config.language = 'enus';
                db.save();
                interaction.editReply({embeds: [embed], ephemeral: true, components: []});
           }
        });
};