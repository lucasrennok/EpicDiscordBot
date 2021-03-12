const express = require('express');
const app = express();

let freeEpicGamesSaved = 'Without games saved'

// To look if the bot is up and to send free games automatically
app.get("/", async (request, response) => {

  //Ping at the console when receive a GET method
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping received at ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);

  const seeker = require('./commands/free.js');
  const findNewGames = await seeker.getGamesStringify();
  
  console.log("NEW GAMES? ", freeEpicGamesSaved!=findNewGames)
  if(freeEpicGamesSaved!=findNewGames){
    freeEpicGamesSaved = findNewGames;

    //Send free games automatically at 'julius' chat
    const guildList = client.guilds.cache;
    for(let i of guildList){
      const channel = i[1].channels.cache.find(channel => channel.name === 'julius')
      if(channel!==undefined){
        const commandFile = require('./commands/free.js')
        message = {channel: channel}
        commandFile.run(client, message, []);
      }
    }
  }

  response.sendStatus(200);
});
app.listen(process.env.PORT);

const Discord = require("discord.js");
const config = require("./config.json"); // bot prefix
const client = new Discord.Client(); 
require('dotenv').config(); //To use .env file

//When the bot starts
client.on("ready", () => {
  console.log('Bot successfully started'); 
});

//When the server got a new member
client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
  if (!channel) return;
  channel.send("Welcome, "+member,". It will cost you a dollar.");
});

//When someone send a message
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
    await message.channel.send("> Type $help to get the available commands.");
  }
});

//Login with bot token, This is a secret token
client.login(process.env.TOKEN);