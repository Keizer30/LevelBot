const Discord = require('discord.js');
exports.run = (client, message, args) => {
	const member = message.mentions.users.first();
	var user;
	if (!member && !args[0]) {
		user = message.author;
	} else if (args[0] && !member) {
		if (isNaN(args[0])) return message.reply('Ce n\est pas une ID de membre');
		user = client.users.get(args[0]);
		if (!user) return message.reply('Je n\'est pas trouvé le mmembre');
	} else {
		user = member;
	}



    const embed = new Discord.MessageEmbed() 
		.setColor('RED')
		.setAuthor(user.tag, user.displayAvatarURL)
		.setTitle('Information sur le membre')
		.setThumbnail(user.displayAvatarURL)
		.addField(`Membre`, `${user.tag}`, true)
		.addField(`ID`, `${user.id}`, true)
		.addField(`Créé le`, `${user.createdAt.toDateString()}`, true)
	if (message.channel.type !== 'dm') return;
	message.channel.send(embed);
};

module.exports.help = {
    name:"userinfo"
  }