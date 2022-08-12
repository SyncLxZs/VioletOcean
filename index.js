const Client = require('./structures/Client');
require('dotenv').config();
const { GatewayIntentBits, Partials, intets} = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent
    ],

});

['./systems/antCrash'].forEach(a => {
    require(`${a}`)(client) 

});

client.login(process.env.BOT_TOKEN);

