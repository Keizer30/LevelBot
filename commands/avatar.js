const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (client, message, args) => {
  message.delete();
  let user = message.mentions.users.first() || message.author;
  let avatarembed = new Discord.MessageEmbed() 
  .setTitle(`Avatar de ${user.username}!`)
  .setImage(user.displayAvatarURL)
  .setColor("BLUE")
  .setFooter(`At: ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now())}`);
  
  message.channel.send(avatarembed)
}

module.exports.help = {
  name: "avatar"
}