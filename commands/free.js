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

    let startDate = 'undefined'
    let endDate = 'undefined'
    for(let i=0; i<someFreeGamesComing.length; i++){
        if(someFreeGamesComing[i].promotions.promotionalOffers.length!==0){
            startDate = new Date(someFreeGamesComing[i].promotions.promotionalOffers[0].promotionalOffers[0].startDate)
            endDate = new Date(someFreeGamesComing[i].promotions.promotionalOffers[0].promotionalOffers[0].endDate)
        }else if(someFreeGamesComing[i].promotions.upcomingPromotionalOffers.length!==0){
            startDate = new Date(someFreeGamesComing[i].promotions.upcomingPromotionalOffers[0].promotionalOffers[0].startDate)
            endDate = new Date(someFreeGamesComing[i].promotions.upcomingPromotionalOffers[0].promotionalOffers[0].startDate)
        }

        const embedFreeGame = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(someFreeGamesComing[i].title)
            .setURL('https://www.epicgames.com/store/pt-BR/product/'+someFreeGamesComing[i].productSlug)
            .setAuthor('Epic Julius', 'https://cdn.pixabay.com/photo/2020/05/08/10/10/symbol-5145011_960_720.png')
            .setDescription(someFreeGamesComing[i].description)
            .setThumbnail(encodeURI(someFreeGamesComing[i].keyImages[0].url))
            .addFields(
                { name: 'Start Date', value: startDate, inline: true },
                { name: 'End Date', value: endDate, inline: true },
            )
            .setImage(encodeURI(someFreeGamesComing[i].keyImages[1].url))
            .setTimestamp()
            .setFooter('Game Arrived/Arrive in Epic Games: '+ someFreeGamesComing[i].effectiveDate);
        await message.channel.send(embedFreeGame);
    }
};