const Discord = require('discord.js')
require("dotenv").config()
const PREFIX = "+"



module.exports = async(client, message) => {

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    if (!message.content.startsWith(PREFIX)) return;

    const args = message.content.slice(PREFIX.length).trim().split(/ +/g);
    const commande = args.shift();
    const command = client.commands.get(commande);

    if (!command) return;

return command.run(client, message, args);
};