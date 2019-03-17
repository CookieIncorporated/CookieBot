const commando = require("discord.js-commando");

class coinCommand extends commando.Command {
    constructor (client) {
        super(client, {
            name: "flipacoin",
            group: "random",
            memberName: "flipacoin",
            description: "flips a coin"
        })
    }

    async run(message, args) {
        var side = Math.floor(Math.random() * 2) + 1;
        args = message.content.split(/ +/)
      // if (args[1] = "-i") {
          //  if (side == 1) {
             //   message.reply({files: ["./images/commandimages/coinHEADS"]})
          //  } else {
          //      message.reply({files: ["./images/commandimages/coinTAILS"]})        
         //   }
       // } else {
            if (side == 1) {
                message.reply(" has flipped a heads!")
            } else {
                message.reply('has flipped a tails!')        
            }  
      //  }
        console.log(side);
    }
}

module.exports = coinCommand;