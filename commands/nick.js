const { MessageEmbed } = require('discord.js');


module.exports = {
    run: async (bot, message, args) => {
        if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("**tu n'as pas les permissions pour faire cela**");
      
        if (!args[0]) return message.channel.send("**Mentionner un membre du serveur pour que je puisse changer son pseudo  !**")
      
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase()) || message.member;
        if (!member) return message.channel.send("**Please Enter A Username!**");

        if (member.roles.highest.comparePositionTo(message.guild.me.roles.highest) >= 0) return message.channel.send('**Cannot Set or Change Nickname Of This User!**')

        if (!args[1]) return message.channel.send("**Please Enter A Nickname**");

        let nick = args.slice(1).join(' ');

        try {
        member.setNickname(nick)
        const embed = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(`**J'ai changé le pseudo de ${member.displayName} en ${nick}**`)
        message.channel.send(embed)
        }
}

module.exports.help = {
    name: "nick"
}
