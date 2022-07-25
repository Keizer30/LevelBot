const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    if (!message.guild.member(message.author).hasPermission('KICK_MEMBERS')) { return message.channel.send('Vous n\'avez pas la permission !'); }
    if (!message.guild.member(client.user).hasPermission('KICK_MEMBERS')) { return message.channel.send('Le bot n\'a pas la permission !'); }
    if (message.mentions.users.size === 0) { return message.channel.send('**Vous devez mentionner un utilisateur !**'); }

        const kickMember = message.guild.member(message.mentions.users.first());
        if (!kickMember) { return message.channel.send('**Je n\'ai pas trouvé l\'utilisateur !**'); }
        const reason = args.slice(1).join(" ");
        if (!reason) return message.channel.send("Veuillez indiquer une raison à votre kick.");
    
        message.mentions.users.first().send(`Tu as été kick du serveur **${message.guild.name}** par **${message.author.username}** pour la raison suivante : **${reason}**`)
            .then(() => {
                kickMember.kick()
                    .then((member) => {
                        message.channel.send(`**${member.user.username}** est **kick** par **${message.author.username}** pour la raison : **${reason}**`);
                    })
                        .catch((err) => {
                            if (err) { return console.error(err); }
                        });
            })
                .catch((error) => {
                    if (error)
                        kickMember.kick()
                            .then((member) => {
                                message.channel.send(`**${member.user.username}** est **kick** par **${message.author.username}** pour la raison : **${reason}**`);
                            })
                                .catch((err) => {
                                    if (err) { return console.error(err); }
                                });
                });
};

module.exports.help = {
    name: 'kick'
};