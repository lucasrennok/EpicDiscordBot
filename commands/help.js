const Discord = require("discord.js");

const allCommands = [
    "help",
    "speak",
    "ping",
    "free -> all now next"
]

module.exports.run = async (client, message, args) => {
    await message.channel.send("> **Commands:** " + allCommands)
};