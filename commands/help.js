const Discord = require("discord.js");

const allCommands = [
    "help",
    "say",
    "ping"
]

module.exports.run = async (client, message, args) => {
    await message.channel.send("> **Commands:** " + allCommands)
};