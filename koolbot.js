const commando = require("discord.js-commando");
const Discord = require("discord.js");
const bot = new commando.Client();
const xp = require('./xp.json')
const fs = require('fs');
const TOKEN = process.env.token

const Token = "NTQ5NDE1NzEyNzY3MDgyNTA3.D1Tjmw.TDCW4hrKHZ5k45lHnqCkv4EpbC4";

var XPmin = 3;
var XPmax = 7; 
var XPneeded = 300; //Change is level.js

bot.registry.registerGroup('simple')
bot.registry.registerGroup('random');
bot.registry.registerGroup('greetings');
bot.registry.registerGroup('imagecommands');
bot.registry.registerCommandsIn(__dirname + "/commands")

bot.on('ready', () => {
    bot.user.setActivity("Club Penguin");
    bot.user.setStatus("dnd")
  });

bot.on ('message', (message) => {
  if (message.author.bot) return;
  args = message.content.split(/ +/)
  var m = message;

  const server = bot.guilds.get('547618457617956938');

  //Greetings(Updated[0.5])
    UserGreetings = ['hello', 'Hello', 'HELLO', '!hello','!Hello','!HELLO','hi','Hi','HI','!hi','!Hi','!HI',
    'hey','Hey','HEY','!hey','!Hey','!HEY','im back','Im back',"I'm back",'hello!','Hello!','HELLO!','Hey!',
    'hey!','HEY!','hi!','Hi!','HI!']
    User_Leaving_Messages = ['bye','Bye','BYE','!bye','!Bye','!BYE','See ya','see ya','see ya!','See ya!',
    'See you','see you','see you!','See you!','gtg','Gtg','GTG','bye!','Bye!','BYE!','gtg!','Gtg!','GTG!']

    for (var i = 0; i < UserGreetings.length; i++) {
      if (m.content.startsWith(UserGreetings[i])) {
        message.channel.send("Hello, " + message.author + "!")
      }
    }  

    for (var i = 0; i < User_Leaving_Messages.length; i++) {
      if (m.content.startsWith(User_Leaving_Messages[i])) {
        message.channel.send("Goodbye, " + message.author + "!")
      }
    }
  //Greetings(Updated[0.5])-END
  //misc
    //mute gang ---()
    mGANG = ['mute gang','Mute gang','Mute Gang','MUTE GANG','!mute gang',
    'mute gang!','Mute gang!','MUTE GANG!']
    for (var i = 0; i < mGANG.length; i++){
      if (m.content == mGANG[i]) {
        message.channel.send("mute gang"); //constant
      }
    }
    //mute gang-END
    //misc-1--0.5
    if(message.content.startsWith('Bad bot') || message.content.startsWith('bad bot')) {
      message.channel.send('Bad human.')
    }
    fortniteNames = ['fortnite','Fortnite','FORTNITE']
    for (var i = 0; i < fortniteNames.length; i++){
      if (m.content == fortniteNames[i]) {
        message.channel.send("Fortnite is bad."); //constant
      }
    }
    
    //misc-1--0.5-END
    //Annoying Koolbot
    var KBM = {
      rage: 0,
      NONKB: 0
    };
    koolbotNames = ['kool bot','koolbot','Kool bot',
    'Koolbot','KOOL BOT','KOOLBOT','KOOLBOT!','KOOL BOT!',
    'kool bot!','koolbot!','Kool Bot!','KoolBot!']
    koolbotRage = ['yes?','Look, I am kind of busy right now.','YES!?!?',"You're getting annoying.",'STOP!','STTTTOOOOOOPPPPPPPPP!!!!!!', 'just shut your mouth.', 'ERROR: NOBODY SHOULD SEE THIS CONTACT THE BOT OWNER.'];
   /* for (var i = 0; i < koolbotNames.length; i++){
      if (m.content == koolbotNames[i]) {
        if (KBM.rage <= koolbotRage.length) {
          KBM.rage = KBM.rage + 1; //Adds a rage point
        }
        KBM.NONKB = 0; //RESETS
        message.channel.send(koolbotRage[(KBM.rage)]);
      }
    }
    for (var i = 0; i < koolbotNames.length; i++){
      if (!(m.content == koolbotNames[i])) {
        KBM.NONKB = KBM.NONKB + 1;
        if (KBM.NONKB >= 10) {
          KBM.rage = 0;
        }
      }
    }*/
    var KBMresponseChoice = Math.floor(Math.random * 2);
    for (var i = 0; i < koolbotNames.length; i++){
      if (m.content == koolbotNames[i]) {
        message.channel.send(koolbotRage[1]) //This way is temp.
      }
    }  

    fs.writeFile('./JSONS/koolbot_rage.json', JSON.stringify(KBM), (err) => {
      if (err) console.log(err);
    })
    //Annoying Koolbot-END
    //Moto Moto
    motomotoNames = ['moto moto','Moto Moto','MOTO MOTO','motomoto','MotoMoto','MOTOMOTO','MoTo MoTo']
    for (var i = 0; i < motomotoNames.length; i++){
      if (m.content == motomotoNames[i]) {
        let bicon = bot.user.displayAvatarURL;
        let motoEmbed = new Discord.RichEmbed()
        .setDescription("Kool Bot's Singing")
        .setColor('#15f153')
        .setThumbnail(bicon)
        .addField("Big and Chunky - Moto Moto", "I like them big, I like them chunky \n (chunky) \n I like them big, I like them plumpy \n (Plumpy) \n I like them round, with something, something \n (Something) \n They like my sound, they think I'm funky \n (Funky)")

        message.channel.send(motoEmbed)
      }
    }  
    //Moto Moto-END
  //misc-END
  //0.4 Event commands
    if (message.content.startsWith ('kfc')) {
      message.channel.send('You better order some popcorn chicken!', {files: ["./images/commandimages/KFC_0.png"]});
    }
    if (message.content.startsWith ('astroneer')) {
      message.channel.send('This a just a beautiful game', {files: ["./images/commandimages/astro.png"]});
    }
    if (message.content.startsWith ('lemon')) {
      message.channel.send('Lemonade?...Anyone?', {files: ["./images/commandimages/lemon.png"]});
    }
    if (message.content.startsWith ('mcdonalds')) {
      message.channel.send('Healthiest place to eat. Ever.', {files: ["./images/commandimages/mcdonalds.png"]});
    }
    if (message.content.startsWith ('minecraft')) {
      message.channel.send('Hope you do not get blocked from this server...', {files: ["./images/commandimages/Minecraft-Wallpaper-minecraft-37763094-2560-1600.png"]});
    }
    if (message.content.startsWith ('pizza')) {
      message.channel.send('There is no comment. This is just good.', {files: ["./images/commandimages/pizza.png"]});
    }
    if (message.content.startsWith ('rss')) {
      message.channel.send('No comment.', {files: ["./images/commandimages/rainbow-six-siege-4k-artwork-dz.png"]});
    }
    if (message.content.startsWith ('roblox')) {
      message.channel.send({files: ["./images/commandimages/roblox.png"]});
    }
    if (message.content.startsWith ('eggs')) {
      message.channel.send('Anyone order eggs?', {files: ["./images/commandimages/sunny-side-up-eggs-hero.png"]});
    }
  //0.4 Event commands - END
  //Level System
  let xpAdd = Math.floor(Math.random() * XPmin) + XPmax;
  

  if (!xp[message.author.id]) {
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }
  
  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtlvl = xp[message.author.id].level * XPneeded;
  let difference = nxtlvl - curxp;

  let xpEmbed = new Discord.RichEmbed()
  .setDescription("What is " + message.author.username + "'s XP?")
  .setColor("#edde17")
  .setThumbnail(message.author.displayAvatarURL)
  .addField("XP", curxp)
  .addField("Level", curlvl)
  .setFooter(difference + " XP until Level up!")  
  
  xp[message.author.id].xp = curxp + xpAdd;
  if (nxtlvl <= xp[message.author.id].xp) {
    xp[message.author.id].level = curlvl + 1;
  }

  

  if (message.content == 'lvl' || message.content == "xp") {
    message.channel.send(xpEmbed)
    fs.writeFile('./xp.json', JSON.stringify(xp), (err) => {
      if (err) console.log(err);
    })
  }

  //Level System - END
  //Picture
  memberArray = []
  server.members.forEach(member => memberArray.push(member));
  //console.log(memberArray[0].user.username) /////////Locates the set user.
  for (var i = 0; i < memberArray.length; i++){
    if (message.content.startsWith("picture")) {
      if (args[1] == memberArray[i].user.username) {
        var pictureTarget = memberArray[i].user;
        message.channel.send(pictureTarget.displayAvatarURL)
      }
    }
  }
  //Picture-END
});

bot.login(Token); //Change DELETE Token and use TOKEN
