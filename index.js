const Client = require('./structures/Client');
require('dotenv').config();
const { GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds
    ]
});

client.login(process.env.BOT_TOKEN)

