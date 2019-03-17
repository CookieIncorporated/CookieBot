const commando = require("discord.js-commando");

class leaveCommand extends commando.Command {
    constructor (client) {
        super(client, {
            name: "leave",
            group: "greetings",
            memberName: "leave",
            description: "Responds with hi"
        })
    }

    async run(message, args) {
        var m = message
        if (m.guild.voiceConnection) {
            m.guild.voiceConnection.disconnect();
        } else {
            message.reply("you must be in a voice channel to make me disconnect.");
        }
    }
}

module.exports = leaveCommand;
