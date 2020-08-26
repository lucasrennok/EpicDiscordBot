const Discord = require("discord.js");
const fetch = require("node-fetch");

const urlEpicFreeGames = "https://store-site-backend-static.ak.epicgames.com/freeGamesPromotions";

module.exports.run = async (client, message, args) => {
    await message.channel.send("O que seria melhor que um jogo de graça não é mesmo?")
    
    let freeGames = [];
    await fetch(urlEpicFreeGames)
        .then(response => response.json())
        .then((data) => {
            freeGames = data.data.Catalog.searchStore.elements;
        });

    // let freeGamesNow = {}
    for(let game in freeGames){
        console.log(game);
        // freeGamesNow = {...freeGamesNow, "title": game.title, }
    }

    let date = new Date(freeGames[0].price.lineOffers[0].appliedRules[0].endDate)
    console.log(date);
};