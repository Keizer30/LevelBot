require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
const chalk = require("chalk")
const fs = require("fs");



console.log(Date.now())

client.commands = new Discord.Collection();


fs.readdir("./commands/", (err, f) => {
    if (err) console.log(err);

    const commands = f.filter(f => f.split(".").pop() === "js")
    if (commands.length <= 0) return console.log(chalk.blueBright("Aucune commande trouvée."));

    commands.forEach((f) => {
        const command = require(`./commands/${f}`);
        console.log(chalk.red(`${f}, commande chargée !`));

        client.commands.set(command.help.name, command);
    });
});

fs.readdir("./events/", (error, f) => {
  if(error) console.log(error);
  console.log(chalk.cyan(`${f.length} events en chargement`));

  f.forEach((f) => {
      const events = require(`./events/${f}`);
      const event = f.split(".")[0];

    client.on(event, events.bind(null, client));
  });

});

//logs

client.on("channelDeele", function(channel) {
  const embed = new Discord.MessageEmbed()
    .setAuthor(
     "Logs - Salon supprimé",
      channel.guild.iconURL()
    )
    .setDescription(
      `le channel **#${channel.name}** vient d'être supprimé et c'etais un salon de type **${channel.type}**.`
    )
    .setColor("RED");
  return client.channels.cache.get(process.env.LOGS_CHANNEL).send(embed);
});


client.on("channelCreate", function(channel) {
  const embed = new Discord.MessageEmbed()
    .setAuthor(
     "logs - Salon créé",
      channel.guild.iconURL()
    )
    .setDescription(
      `un salon vient d'être créé "**#${channel.name}**" est c'et un salon de type **${channel.type}**`
    )
    .setColor("GREEN");
  return client.channels.cache.get(process.env.LOGS_CHANNEL).send(embed);
});

client.on("guildBanRemove", function(guild, user) {
  const embed = new Discord.MessageEmbed()
    .setAuthor("Logs - Unban", guild.iconURL())
    .setDescription(
      `**${user.username}**(\`${user.id}\`) est désormais **Unban** du serveur.`
    )
    .setColor("YELLOW");
  return client.channels.cache.get(process.env.LOGS_CHANNEL).send(embed);
});

client.on("guildBanAdd", function(guild, user) {
  const embed = new Discord.MessageEmbed()
    .setAuthor("Logs - Ban", guild.iconURL())
    .setDescription(
      `**${user.username}**(\`${user.id}\`) est désormais **Ban** du serveur`
    )
    .setColor("GREEN");
  return client.channels.cache.get(process.env.LOGS_CHANNEL).send(embed);
});

client.on("guildMemberAdd", function(member) {
  const embed = new Discord.MessageEmbed()
    .setAuthor(`${member.guild.name} vien de rejoindre`, member.guild.iconURL())
    .setColor("GREEN")
    .setDescription(
      `**${member.user.tag}**(\`${member.id}\`) vien de rejoindre le serveur, son compte a été créé le **${member.user.createdAt}**`
    );
  return client.channels.cache.get(process.env.LOGS_CHANNEL).send(embed);
});

client.on("guildMemberRemove", function(member) {
  const embed = new Discord.MessageEmbed()
    .setAuthor(`${member.guild.name} vient de quitter`, member.guild.iconURL())
    .setColor("RED")
    .setDescription(
      `**${member.user.tag}**(\`${member.id}\`) vient de quitter le serveur.`
    );
  return client.channels.cache.get(process.env.LOGS_CHANNEL).send(embed);
});

client.on("messageDelete", async function(message) {
  const embed = new Discord.MessageEmbed()

  if (message.partial) {
   
    embed
      .setAuthor(
        `Logs - Message Suprimé`,
        message.guild.iconURL()
      )
      .setColor("RED")
      .setDescription(`un message vient d'être supprimé dans **#${message.channel.name}**`)


    return client.channels.cache.get(process.env.LOGS_CHANNEL).send(embed);
  }

  embed
    .setAuthor(
      `Logs - message supprimé`,
      message.guild.iconURL()
    )
    .setColor("RED")
    .setDescription(
      `${message.author.username}(\`${message.author.id}\`) message supprimé dans **#${message.channel.name}**.`
    )
    .addField("Message supprimé:", message.content || "Unknown Message")
    .setThumbnail(message.author.displayAvatarURL({ format: "jpg" }));

  return client.channels.cache.get(process.env.LOGS_CHANNEL).send(embed);
});

client.on("roleCreate", function(role) {
  const embed = new Discord.MessageEmbed()
    .setAuthor("Rôle Créé", role.guild.iconURL())
    .setDescription(
      `Le rôle **${role.name} vient d'être créé.**`
    )
    .setColor("GREEN");
  return client.channels.cache.get(process.env.LOGS_CHANNEL).send(embed);
});

client.on("roleDelete", function(role) {
  const embed = new Discord.MessageEmbed()
    .setAuthor(role.guild.name + ": Rôle Suprimé", role.guild.iconURL())
    .setDescription(`Le rôle **${role.name}** vient d'être supprimé.`)
    .setColor("RED");
  return client.channels.cache.get(process.env.LOGS_CHANNEL).send(embed);
});

client.on("roleUpdate", function(oldRole, newRole) {
  let description;

  if (oldRole.name === newRole.name) {
    description = `Le rôle **${oldRole.name}** vient d’être mis à jour, cela peut inclure une autorisation ou une couleur.`;
  } else {
    description = `Le rôle **${oldRole.name}** vient d’être mis à jour et son nouveau nom est **${newRole.name}**.`;
  }

  const embed = new Discord.MessageEmbed()
    .setAuthor(oldRole.guild.name + ": Rôle mis a jour", oldRole.guild.iconURL())
    .setDescription(description)
    .setColor("BLUE");
  return client.channels.cache.get(process.env.LOGS_CHANNEL).send(embed);
});



client.login(process.env.TOKEN)