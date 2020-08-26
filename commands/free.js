const Discord = require("discord.js");
const fetch = require("node-fetch");

const urlEpicFreeGames = "https://store-site-backend-static.ak.epicgames.com/freeGamesPromotions";

module.exports.run = async (client, message, args) => {
    await message.channel.send("O que seria melhor que um jogo de graça não é mesmo?")
    
    await fetch(urlEpicFreeGames)
        .then(response => response.json())
        .then((data) => {
            console.log('JSON: ', data);
        });

    console.log("test");
};