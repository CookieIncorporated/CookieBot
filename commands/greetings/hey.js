const commando = require("discord.js-commando");

class heyCommand extends commando.Command {
    constructor (client) {
        super(client, {
            name: "hey",
            group: "greetings",
            memberName: "hey",
            description: "responds with hello"
        })
    }

    async run(message, args) {
        message.channel.send('Hello!')
    }
}

module.exports = heyCommand;
