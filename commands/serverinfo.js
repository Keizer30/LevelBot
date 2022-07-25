const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  
  let servericon = message.guild.iconURL({ format: 'png', dynamic: true, size: 1024 });
  let serverembed = new Discord.MessageEmbed()
    .setColor("RED")
    .setThumbnail(servericon)
    .setTitle("__**Informations du serveur**__")
    .addField("Nom", message.guild.name, true)
    .addField("ID", message.guild.id, true)
    .addField("Owner :crown:", "NIgapi#3891/LevelUp")
    .addField("Nombre de membres",  `${message.guild.memberCount}`, true)
    .addField("Serveur crée le :", message.member.joinedAt)
    .setTimestamp()
    .setFooter(`Informations à propos de ${message.guild.name}`);
  
  
  message.channel.send(serverembed);

}

module.exports.help = {
  name:"serverinfo"
}