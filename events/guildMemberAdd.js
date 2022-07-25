const Discord = require("discord.js");
const client = new Discord.Client();





module.exports = (client, member) => {
    const embed = new Discord.MessageEmbed()
    .setTitle("Ho ! Un nouveau Membre!")
    .setColor("RANDOM")
    .setImage("https://cdn.discordapp.com/attachments/994004571913470043/1001159491733160046/welcome.png")
    .setDescription(`Bienvenue parmi nous <@${member.id}> !
N'hésite pas à aller faire un tour sur  et sur  pour nous rejoindre dans nos activités ! 😉`)
    .setFooter("")
    member.guild.channels.cache.get('996713851104018543').send(`<@${member.id}>`)
    member.guild.channels.cache.get('996713851104018543').send(embed)

    member.roles.add('996488058838986773')
}