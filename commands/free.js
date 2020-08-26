const Discord = require("discord.js");
const fetch = require("node-fetch");

const urlEpicFreeGames = "https://store-site-backend-static.ak.epicgames.com/freeGamesPromotions";

module.exports.run = async (client, message, args) => {
    await message.channel.send("O que seria melhor que um jogo de graça não é mesmo?")
    
    let someFreeGamesComing = [];
    await fetch(urlEpicFreeGames)
        .then(response => response.json())
        .then((data) => {
            someFreeGamesComing = data.data.Catalog.searchStore.elements;
        });

    let freeGames = "> **Free Games:**\n";
    for(let i=0; i<someFreeGamesComing.length; i++){
        freeGames += "> "+someFreeGamesComing[i].title+"\n";
    }

    if(freeGames==="> **Free Games:**\n"){
        freeGames+="> There aren't free games now.\n";
    }
    await message.channel.send(freeGames);
    
    // let date = new Date(someFreeGamesComing[0].price.lineOffers[0].appliedRules[0].endDate)
    // console.log(date);
};