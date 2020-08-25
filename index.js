const Discord = require("discord.js");
const config = require("./config.json"); 
require('dotenv').config();

const client = new Discord.Client(); 

client.on("ready", () => {
  console.log(`Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`); 
});

client.on("message", async message => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  if(!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
  
  // ping
  if(comando === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! A Latência é ${m.createdTimestamp - message.createdTimestamp}ms.`);
  }
  else if(comando === "help"){
    await message.channel.send("> **Comandos:** grana | empresta | valor | custo | perdao | relaxar | diadasmaes")
  }
  else if(comando === "grana") {
    await message.channel.send("> E quanto isso vai me custar??");
  }
  else if(comando === "empresta") {
    await message.channel.send("> Quer saber o que é mágica? Eu tenho dois empregos, trabalho sete dias por semana e todo dia meu dinheiro desaparece.");
  }
  else if(comando === "valor"){
    await message.channel.send("> Aceita vale-refeição?")
  }
  else if(comando === "custo"){
    await message.channel.send("> Desliga esse relógio da tomada, garoto, você não vê as horas enquanto dorme. São 2 centavos por hora!")
  }
  else if(comando === "diadasmaes"){
    await message.channel.send("> Porque eu deveria comprar algo? É Dia das Mães, e não das Esposas!")
  }
  else if(comando === "perdao"){
    await message.channel.send("> Sabe quantas vezes eu estava certo e tive que pedir perdão? 4.351 vezes!")
  }
  else if(comando === "relaxar"){
    await message.channel.send("> Por que eu vou sair pra relaxar se eu posso relaxar em casa que é grátis?")
  }
});

client.login(process.env.TOKEN);