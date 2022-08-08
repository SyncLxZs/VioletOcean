const Command = require('../../../structures/Command');
module.exports = class ping extends Command {
    constructor(client, options) {
        super(client, {
            name: 'ping',
            description: 'visualize o ping do bot',
        })
    }
}