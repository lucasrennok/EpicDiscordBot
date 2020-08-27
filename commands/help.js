const Discord = require("discord.js");

const allCommands = [
    "help",
    "speak",
    "ping",
    "free"
]

module.exports.run = async (client, message, args) => {
    await message.channel.send("> **Commands:** " + allCommands)
};