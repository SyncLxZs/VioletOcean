const Event = require('../../structures/Event');

module.exports = class guildCreate extends Event {
    constructor(client, options) {
        super(client, {
            name: 'guildCreate'
        })
    }
    run = async(guild) => {
        
    }
}