const Discord = require('discord.js');
const ms = require("ms")


module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**Vous n'avez pas la permission.**")
    if (!args[0]) return message.channel.send("**Veuillez spécifier le temps du giveaway.**");
    if (!args[0].endsWith("j") && args[0].endsWith("h") && args[0].endsWith("m")) return message.channel.send("**Veuillez indiquer un format de temps valide.**");
    if (isNaN(args[0][0])) return message.channel.send("**Le temps indiqué n'est pas un nombre !**");
    let channel = message.mentions.channels.first();
    if (!channel) return message.channel.send("**Le channel indiqué n'a pas été trouvé**");
    let titre = args.slice(2).join(" ");
    if (!titre) return message.channel.send("**veullez indiquez le titre de l'event**");
    message.channel.send(`**L'event a bien été crée dans le salon ${channel}**`);
    let e = new Discord.MessageEmbed()
    .setTitle(`${titre}`)
    .setDescription(`${message.author} participant... soon`)
    .setTimestamp(Date.now()+ms(args[0]))
    .setColor("BLUE")
    let m = await channel.send(e)
    m.react("✅")

}

module.exports.help = {
    name: "event"
}


