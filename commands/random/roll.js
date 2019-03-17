const commando = require("discord.js-commando");
var highestValue = 1000000; //Anything higher will not be allowed.
var highestLoop = 10;

class DiceCommand extends commando.Command {
    constructor (client) {
        super(client, {
            name: "roll",
            group: "random",
            memberName: "roll",
            description: "Rolls a die"
        })
    }

    async run(message, args) {
        args = message.content.split(/ +/);
        if (args[1] < (highestValue + 1)) {
            if (args[2] == undefined) {
                var total = args[1]; //Standard die.
                var number = Math.floor(Math.random() * total) + 1
                message.channel.send("A " + number + " got rolled!");
            } else if (args[2] < (highestLoop + 1)) {
                for (var i = 0; i < args[2]; i++) {
                    var total = args[1]; //Standard die.
                    var number = Math.floor(Math.random() * total) + 1
                    message.channel.send("A " + number + " got rolled!");
                } 
            } else {
                message.channel.send("Something went wrong...make sure to keep arguments within range.")
            }
        } else if (args[1] > highestValue) {
            message.channel.send("Something went wrong...make sure to keep arguments within range.")
        }
        if(args[1] == undefined) {
            var total = 6; //Standard die.
            var number = Math.floor(Math.random() * total) + 1
            message.channel.send("A " + number + " got rolled!");
        }
    }
}

module.exports = DiceCommand;
