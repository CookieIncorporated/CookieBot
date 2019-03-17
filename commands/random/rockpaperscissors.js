const commando = require("discord.js-commando");

class rpsCommand extends commando.Command {
    constructor (client) {
        super(client, {
            name: "rps",
            group: "greetings",
            memberName: "rps",
            description: "Plays RPS with Bot"
        })
    }

    async run(message, args) {
        var BotChoice = Math.floor(Math.random() * 3) + 1; //1 = Rock //2 = Paper //3 = Scissors
        args = message.content.split(/ +/);
        if (args[1] == "rock") {
           if (args[2] == "-i") {
                if (BotChoice == 1) {
                    message.channel.send("You and I tied with Rock. I want a rematch!", {files: ["./images/rematch.png"]});
                } else if (BotChoice == 2) {
                    message.channel.send("You lost against me. I beat you with Paper when you chose Rock.", {files: ["./images/loser.png"]}) 
                } else if (BotChoice == 3) {
                    message.channel.send("You crushed my scissors! I cannot believe you defeated me with a rock!", {files: ["./images/Winner_Banner.png"]})
                }
            } else {
                if (BotChoice == 1) {
                    message.channel.send("You and I tied with Rock. I want a rematch!");
                } else if (BotChoice == 2) {
                message.channel.send("You lost against me. I beat you with Paper when you chose Rock.") 
                } else if (BotChoice == 3) {
                    message.channel.send("You crushed my scissors! I cannot believe you defeated me with a rock!")
                } 
            }
        }
        if (args[1] == "paper") {
            if (args[2] == "-i") {
                if (BotChoice == 1) {
                    message.channel.send("You have beat me with paper. All I had was a rock.", {files: ["./images/Winner_Banner.png"]});
                } else if (BotChoice == 2) {
                message.channel.send("It is a tie with paper. Want to have a paper airplane battle since we both a paper?", {files: ["./images/rematch.png"]}) 
                } else if (BotChoice == 3) {
                    message.channel.send("HA! You lost! You suck! I had scissors.", {files: ["./images/loser.png"]})
                }
            } else {
                if (BotChoice == 1) {
                    message.channel.send("You have beat me with paper. All I had was a rock.");
                } else if (BotChoice == 2) {
                message.channel.send("It is a tie with paper. Want to have a paper airplane battle since we both a paper?") 
                } else if (BotChoice == 3) {
                    message.channel.send("HA! You lost! You suck! I had scissors.")
                }  
            }
        }
        if (args[1] == "scissors") {
            if (args[2] == "-i") {
                if (BotChoice == 1) {
                    message.channel.send("You LOST! I am better than you. Always choose scissors then I will be you with a rock.", {files: ["./images/loser.png"]});
                } else if (BotChoice == 2) {
                message.channel.send("Please do not cut me up, I already lost. It's me, paper.", {files: ["./images/Winner_Banner.png"]}) 
                } else if (BotChoice == 3) {
                    message.channel.send("A tie with scissors!", {files: ["./images/rematch.png"]})
                }
            } else {
                if (BotChoice == 1) {
                    message.channel.send("You LOST! I am better than you. Always choose scissors then I will be you with a rock.");
                } else if (BotChoice == 2) {
                message.channel.send("Please do not cut me up, I already lost. It's me, paper.") 
                } else if (BotChoice == 3) {
                    message.channel.send("A tie with scissors!")
                } 
            }    
        }
    }
}

module.exports = rpsCommand;