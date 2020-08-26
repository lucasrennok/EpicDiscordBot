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
    let startDate = 'undefined'
    for(let i=0; i<someFreeGamesComing.length; i++){
        if(someFreeGamesComing[i].promotions.promotionalOffers.length!==0){
            startDate = new Date(someFreeGamesComing[i].promotions.promotionalOffers[0].promotionalOffers[0].startDate)
        }else if(someFreeGamesComing[i].promotions.upcomingPromotionalOffers.length!==0){
            startDate = new Date(someFreeGamesComing[i].promotions.upcomingPromotionalOffers[0].promotionalOffers[0].startDate)
        }
        freeGames += "> **"+someFreeGamesComing[i].title+"** - Date: "+startDate+"\n";
    }
    //TODO: show game thumb images / format date / set emojis to free games and non free games yet

    if(freeGames==="> **Free Games:**\n"){
        freeGames+="> There aren't free games now.\n";
    }
    await message.channel.send(freeGames);
};