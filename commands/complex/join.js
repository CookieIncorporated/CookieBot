const commando = require("discord.js-commando");

class joinCommand extends commando.Command {
    constructor (client) {
        super(client, {
            name: "join",
            group: "greetings",
            memberName: "join",
            description: "Responds with hi"
        })
    }

    async run(message, args) {
        var m = message
        if (m.member.voiceChannel) {
            if (!m.guild.voiceConnection) {
                message.member.voiceChannel.join()
                .then(connection =>{
                    message.voiceChannel.send("Successfully Joined!")
                })
            }
        } else {
            message.reply("you must be in a voice channel to make me connect.")
        }
    }
}

module.exports = joinCommand;
