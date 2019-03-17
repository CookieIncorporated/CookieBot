const commando = require("discord.js-commando");

class mirrorCommand extends commando.Command {
    constructor (client) {
        super(client, {
            name: "mirror",
            group: "greetings",
            memberName: "mirror",
            description: "Responds with hi"
        })
    }

    async run(message, args) {
        message.channel.send(message.author.avatarURL)
        message.channel.send("Look at " + message.author + ".")
    }
}

module.exports = mirrorCommand;
