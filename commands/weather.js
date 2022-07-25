const Discord = require("discord.js");
const weather = require("weather-js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  run: async (client, message, args) => {

    if (!args[0]) return message.channel.send("Donner le nom d'une ville!");

    weather.find({ search: args.join(" ") }, function(error, result) {
      if (error) return message.channel.send(`Une erreur est survenue, merci de reassayer`)

      if (result === undefined || result.length === 0)
        return message.channel.send(
          `Ville inconnu, reassayer une autres ville`
        );

      var current = result[0].current;
      var location = result[0].location;

      const Weather = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle(`${location.name} Weather!`)
        .setDescription(`${current.skytext}`)
        .setThumbnail(current.imageUrl)
        .addField("Degree Type", location.degreetype, true)
        .addField("Temperature", `${current.temperature}°`, true)
        .addField("Humidity", `${current.humidity}%`, true)
        .addField("Wind", current.winddisplay, true)
        .addField("Feels Like", `${current.feelslike}°`, true)
        .addField("Timezone", `UTC${location.timezone}`, true)
        .setTimestamp();

      message.channel.send(Weather);
    });

    //End
  }
};

module.exports.help = {
  name:"weather"
}