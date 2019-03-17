const commando = require("discord.js-commando");

class scrambleCommand extends commando.Command {
    constructor (client) {
        super(client, {
            name: "scramble",
            group: "simple",
            memberName: "scramble",
            description: "Scrambles a word given by a user."
        })
    }



    async run(message, args) { //Example: !scramble popcorn
        args = message.content.split(/ +/);

        String.prototype.shuffle = function () {
            var a = this.split(""),
                n = a.length;
        
            for(var i = n - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var tmp = a[i];
                a[i] = a[j];
                a[j] = tmp;
            }
            return a.join("");
        }
        message.channel.send(args[1].shuffle())
    }
}

module.exports = scrambleCommand;