const Discord = require("discord.js");
const client = new Discord.Client();
module.exports.run = async (client, message, args) => {


    if (!args[0]) return message.channel.send("**Veuillez préciser votre bug.**");
    message.delete()
    message.channel.send("Votre bug a bien été transmis a l'équipe ! Merci !")
    console.log("message envoyé")
    const embed = new Discord.MessageEmbed()
    .setTitle("BUG REPORT")
    .setColor("RED")    
    .setDescription(`report par **${message.author.username}**

    le bug est: **${(args[0])}**`)

    const BugReporthannel = (message.guild.channels.cache.find(channel => channel.name === "bug-report"))
    BugReporthannel.send(embed)

}




module.exports.help = {
name: "bugreport"
}
