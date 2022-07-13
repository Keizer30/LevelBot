const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const embed = new Discord.MessageEmbed()
  .setDescription("voici zouzir: et gg pour l'easter egg")
.setImage("https://th.bing.com/th/id/OIP.RGvbOLeN8QP51IZd2pUrfwHaFS?w=222&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7")
message.channel.send(embed);

}

module.exports.help = {
  name:"zouzir"
}