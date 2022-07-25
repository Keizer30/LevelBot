const Discord = require('discord.js');

module.exports = {
    run: async (bot, message, args) => {
        
        if(!message.channel.permissionsFor(message.member).has("ADMINISTRATOR") ) return message.channel.send("**Tu n'as pas la permission de faire cela !**");

        const channel = message.channel;

        try {
            message.guild.roles.cache.forEach(role => {
                channel.createOverwrite(role, {
                    SEND_MESSAGES: true,
                    ADD_REACTIONS: true
                });
            });
        } catch (e) {
            console.log(e);
        }

        message.channel.send(`**Le channel a bien été ouvert !**`);
    }
}

module.exports.help = {
    name:"unlock"
  }