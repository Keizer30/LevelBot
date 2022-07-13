const BlaguesAPI = require('blagues-api');
const Discord = require("discord.js");

const blagues = new BlaguesAPI('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNzU0MDMzMzg3MDcyNzgyMzk2IiwibGltaXQiOjEwMCwia2V5IjoiRXFtd0g0aVphWHdra0lUZVFTNEZhM0hDQmpNNXk3eEMxNHVKQjBvYTRLeGpYV0FHMGgiLCJjcmVhdGVkX2F0IjoiMjAyMi0wNy0xMlQyMTowMDozMSswMDowMCIsImlhdCI6MTY1NzY1OTYzMX0.X5ikLjp3ui6Bv-S2sbQMTZPCwAXe_WgPC3gM8z3Lp2M');

module.exports.run = async(client, message, args) => {

  const blague = await blagues.random();
    
  
  const e = new Discord.MessageEmbed()
  .setTitle(`${blague.joke}`)
  .setDescription(`${blague.answer}`)
  .setFooter(`${blague.type}`)
  .setTimestamp()
  
  message.channel.send(e)


};

module.exports.help = {
  name: "blague"
}