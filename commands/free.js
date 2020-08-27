const Discord = require("discord.js");
const fetch = require("node-fetch");

const urlEpicFreeGames = "https://store-site-backend-static.ak.epicgames.com/freeGamesPromotions";

module.exports.run = async (client, message, args) => {
    await message.channel.send("What would be better than a free game?")
    
    let free_flag = 'all';
    if(args.length>1){
        await message.channel.send("> Error: Too many argments.");
        return;
    }else if(args.length===1){
        if(args[0]==='all' || args[0]==='now' || args[0]==='next'){
            free_flag = args[0];
        }else{
            await message.channel.send("> Error: Incorrect argument.");
            return;
        }
    }

    let someFreeGamesComing = [];
    await fetch(urlEpicFreeGames)
        .then(response => response.json())
        .then((data) => {
            someFreeGamesComing = data.data.Catalog.searchStore.elements;
        });

    let startDate = 'undefined'
    let endDate = 'undefined'
    for(let i=0; i<someFreeGamesComing.length; i++){
        if(someFreeGamesComing[i].promotions!==null){
            if(someFreeGamesComing[i].promotions.promotionalOffers.length!==0){
                startDate = new Date(someFreeGamesComing[i].promotions.promotionalOffers[0].promotionalOffers[0].startDate)
                endDate = new Date(someFreeGamesComing[i].promotions.promotionalOffers[0].promotionalOffers[0].endDate)
            }else if(someFreeGamesComing[i].promotions.upcomingPromotionalOffers.length!==0){
                startDate = new Date(someFreeGamesComing[i].promotions.upcomingPromotionalOffers[0].promotionalOffers[0].startDate)
                endDate = new Date(someFreeGamesComing[i].promotions.upcomingPromotionalOffers[0].promotionalOffers[0].endDate)
            }
        }else{
            startDate = new Date();
            endDate = new Date();
        }

        let willSend = true;
        let dateNow = new Date()
        if(dateNow<startDate && free_flag==='now'){
            willSend = false;
        }else if(dateNow>startDate && free_flag==='next'){
            willSend = false;
        }

        if(willSend){
            let originalPrice = someFreeGamesComing[i].price.totalPrice.fmtPrice.originalPrice
            let discountPrice = someFreeGamesComing[i].price.totalPrice.fmtPrice.discountPrice
            let gameArriveDate = new Date(someFreeGamesComing[i].effectiveDate)

            if(originalPrice==='0')
                originalPrice='FREE'
            if(discountPrice==='0')
                discountPrice='FREE'

            let formatStartDate = startDate.getDate()+'/'+(startDate.getMonth()+1)+'/'+startDate.getFullYear()
            let formatEndDate = endDate.getDate()+'/'+(endDate.getMonth()+1)+'/'+endDate.getFullYear()
            let formatGameArriveDate = gameArriveDate.getDate()+'/'+(gameArriveDate.getMonth()+1)+'/'+gameArriveDate.getFullYear()

            let thumbnailImage = '', gameImage = ''
            let urlImagesVector = someFreeGamesComing[i].keyImages
            for(let i=0; i<urlImagesVector.length; i++){
                if(urlImagesVector[i].type==='OfferImageTall')
                    gameImage=urlImagesVector[i].url;
                else if(urlImagesVector[i].type==='OfferImageWide')
                    thumbnailImage=urlImagesVector[i].url;
            }

            const embedFreeGame = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle(someFreeGamesComing[i].title)
                .setURL('https://www.epicgames.com/store/pt-BR/product/'+someFreeGamesComing[i].productSlug)
                .setAuthor('Epic Julius', 'https://cdn.pixabay.com/photo/2020/05/08/10/10/symbol-5145011_960_720.png')
                .setDescription(someFreeGamesComing[i].description)
                .setThumbnail(encodeURI(thumbnailImage))
                .addFields(
                    { name: 'Start Date', value: formatStartDate, inline: true },
                    { name: 'End Date', value: formatEndDate, inline: true },
                    { name: '\u200b', value: '\u200b', inline: true},
                    { name: 'Original Price:', value: originalPrice, inline: true },
                    { name: 'Discount Price:', value: discountPrice, inline: true },
                )
                .setImage(encodeURI(gameImage))
                .setTimestamp()
                .setFooter('Game Arrived/Arrive in Epic Games: '+ formatGameArriveDate);
            await message.channel.send(embedFreeGame);
        }
    }
};