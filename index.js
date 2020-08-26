const Discord = require("discord.js");
const config = require("./config.json"); 
require('dotenv').config();

const client = new Discord.Client(); 

client.on("ready", () => {
  console.log('Bot successfully started'); 
});

client.on("message", async message => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  if(!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  try{
    const commandFile = require('./commands/'+command+'.js')
    commandFile.run(client, message, args);
  }catch(er){
    await message.channel.send("> Type $$help to get the available commands.");
  }

});

client.login(process.env.TOKEN);