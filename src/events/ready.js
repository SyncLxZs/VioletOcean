const Event = require('../../structures/Event');

module.exports = class ready extends Event {
    constructor(client, options) {
        super(client, {
            name: 'ready'
        })
    }

    run = () => {
        console.log('💜 Violet Ocean Online')
        this.client.guilds.cache.get('1005982700315869236').commands.set(this.client.commands);
    }
}

