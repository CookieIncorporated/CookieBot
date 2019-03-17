const commando = require("discord.js-commando");

class helpCommand extends commando.Command {
    constructor (client) {
        super(client, {
            name: "help",
            group: "simple",
            memberName: "help",
            description: "Gives the player guidance."
        })
    }

    async run(message, args) {
        message.reply("Just help yourself.");
    }
}

module.exports = helpCommand;
