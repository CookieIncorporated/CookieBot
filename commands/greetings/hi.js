const commando = require("discord.js-commando");

class hiCommand extends commando.Command {
    constructor (client) {
        super(client, {
            name: "hi",
            group: "greetings",
            memberName: "hi",
            description: "Responds with hi"
        })
    }

    async run(message, args) {
        message.channel.send("Hello!")
    }
}

module.exports = hiCommand;
