const Discord = require("discord.js");
const config = require("./config.json"); 
require('dotenv').config();

const client = new Discord.Client(); 
const falas = [
  "Se eu não comprar nada, o desconto é maior.",
  "E quanto isso vai me custar??",
  "Quer saber o que é mágica? Eu tenho dois empregos, trabalho sete dias por semana e todo dia meu dinheiro desaparece.",
  "Aceita vale-refeição?",
  "Desliga esse relógio da tomada, garoto, você não vê as horas enquanto dorme. São 2 centavos por hora!",
  "Porque eu deveria comprar algo? É Dia das Mães, e não das Esposas!",
  "Sabe quantas vezes eu estava certo e tive que pedir perdão? 4.351 vezes!",
  "Por que eu vou sair pra relaxar se eu posso relaxar em casa que é grátis?",
]
const allCommands = [
  "help",
  "say",
  "ping"
]

client.on("ready", () => {
  console.log(`Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`); 
});

client.on("message", async message => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  if(!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // commands here
  if(command === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! A Latência é ${m.createdTimestamp - message.createdTimestamp}ms.`);
  }
  else if(command === "help"){
    await message.channel.send("> **Commands:** " + allCommands)
  }
  else if(command === "say") {
    const somethingToSay = falas[Math.floor(Math.random() * falas.length)];
    await message.channel.send("> "+somethingToSay);
  }else{
    await message.channel.send("> Type $$help to get the available commands.")
  }

});

client.login(process.env.TOKEN);