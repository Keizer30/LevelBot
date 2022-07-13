const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const embed = new Discord.MessageEmbed() 
  .setTitle(`${message.guild.name}`)
  .setColor('GREEN')
  .addField(`Nombre de membres sur le serveur:`, `${guild.m}`, true)
  .addField(`ID du serveur:`, `${message.guild.id}`, true)
  .addField(`Quantité de Boost sur le serveur:`, `${message.guild.premiumTier}/14`, true)
  .addField(`Création du Discord:`, `${message.channel.guild.createdAt}`, true)
  .addField(`les créateurs du serveurs: Nigapi <:King:996752254453415946>/LevelBoost/LevelDown`)
message.channel.send(embed);

}

module.exports.help = {
  name:"serverinfo"
}