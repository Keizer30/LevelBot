
module.exports = {
    run: async (bot, message, args) => {
        


      const user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0])
      if (!user)
        return message.channel.send(
          `Tu n'as pas mentionné le membre.`
        );
      if (!args.slice(1).join(" "))
        return message.channel.send("Tu dois mettre un message après la mention.")
      user.user
        .send(args.slice(1).join(" "))
        .catch(() => message.channel.send("⚠️je n'ai pas réussie à lui envoyé un message privé. Veuillez reassayer !⚠️"))
        .then(() => message.channel.send(`J'ai envoyé un message privé à ${user.user.tag}`))
    },
  };

  module.exports.help = {
    name:"mp"
  }