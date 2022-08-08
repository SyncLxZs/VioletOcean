const Event = require('../../structures/Event');

module.exports = class ready extends Event {
    constructor(client, options) {
        super(client, {
            name: 'ready'
        })
    }

    run = () => {
        console.log('💜 Violet Ocean Online')
    }
}

