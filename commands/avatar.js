const Discord = require("discord.js")

module.exports = {

    run: async(client, message, args) => {
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(' ') || x.user.username === args[0]) || message.member;

        if (!member.user.avatarURL) return message.channel.send(`Ce membre n'a pas d'avatar`);

        const avatar = new Discord.MessageEmbed()
			.setTitle(`voici l'avatar de ${member.user.username}`)
            .setColor("RANDOM")
            .setImage(member.user.avatarURL())
            .setColor(member.displayHexColor)
            .setImage(member.user.displayAvatarURL({ dynamic: true, size: 2048 }))
            .setURL(member.user.avatarURL())
        message.channel.send(avatar)
            .catch(() => message.channel.send('**je n\'est pas les permission nécéssaire pour envoyé des Images !`'));

    }

};

module.exports.help = {
  name: "avatar"
}