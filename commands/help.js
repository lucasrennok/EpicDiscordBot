const Discord = require("discord.js");

// Commands available
const allCommands = [
    " help",
    " speak",
    " ping",
    " free -> all now next"
]

// Send all commands
module.exports.run = async (client, message, args) => {
    await message.channel.send("> **Commands:** " + allCommands + '\n> \n > **Create a chat called \'julius\' to receive notifications automatically.**')
};