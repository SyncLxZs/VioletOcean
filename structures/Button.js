const { ButtonBuilder } = require('discord.js');

class Button extends ButtonBuilder {
    constructor(button) {
        super({
            style: button.style,
            label: button.label,
            emoji: button.emoji,
            custom_id: button.customId
        })
        
    }
}

module.exports = Button;