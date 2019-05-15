const Discord = require("discord.js");
const commando = require('discord.js-commando')
const bot =  new Discord.Client();
const TOKEN = process.env.token

bot.registry.registerGroup('simple')
bot.registry.registerGroup('random');
bot.registry.registerGroup('greetings');
bot.registry.registerGroup('imagecommands');
bot.registry.registerCommandsIn(__dirname + "/commands")

bot.on('ready', () => {
    bot.user.setActivity('Cookie Clicker')
    bot.user.setStatus('idle')
});

bot.on('message', (message) => {
  if (message.author.bot) return;
    
  var m = message;
    
  UserGreetings = ['hello', 'Hello', 'HELLO', '!hello','!Hello','!HELLO','hi','Hi','HI','!hi','!Hi','!HI',
    'hey','Hey','HEY','!hey','!Hey','!HEY','im back','Im back',"I'm back",'hello!','Hello!','HELLO!','Hey!',
    'hey!','HEY!','hi!','Hi!','HI!']
    User_Leaving_Messages = ['bye','Bye','BYE','!bye','!Bye','!BYE','See ya','see ya','see ya!','See ya!',
    'See you','see you','see you!','See you!','gtg','Gtg','GTG','bye!','Bye!','BYE!','gtg!','Gtg!','GTG!']

    for (var i = 0; i < UserGreetings.length; i++) {
      if (m.content.startsWith(UserGreetings[i])) {
        message.channel.send("Hello, " + message.member.displayName + "!")
      }
    }  

    for (var i = 0; i < User_Leaving_Messages.length; i++) {
      if (m.content.startsWith(User_Leaving_Messages[i])) {
        message.channel.send("Goodbye, " + message.member.displayName + "!")
      }
    }
    
    
});

bot.login(TOKEN);
