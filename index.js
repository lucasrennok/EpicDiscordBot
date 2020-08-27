const express = require('express');
const app = express();

app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);

  const guildList = client.guilds.cache;
  for(let i of guildList){
    const channel = i[1].channels.cache.find(channel => channel.name === 'julius')
    if(channel!==undefined)
      channel.send('test')
  }

  response.sendStatus(200);
});
app.listen(3333);

const Discord = require("discord.js");
const config = require("./config.json"); 
const client = new Discord.Client(); 
require('dotenv').config();

client.on("ready", () => {
  console.log('Bot successfully started'); 
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
  if (!channel) return;
  channel.send("Bem vindo, "+member,". Entrar no servidor vai lhe custar 1 dólar.");
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
    await message.channel.send("> Type $help to get the available commands.");
  }
});

client.login(process.env.TOKEN);