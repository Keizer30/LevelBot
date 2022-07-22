const Discord = require("discord.js");


module.exports.run = (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**Vous n'avez pas la permission !**");
amount = args[0]

if (!amount || isNaN(amount) || amount < 1 || amount >100) {
    return message.reply("Spécifier un nombre entre 1 et 100")
};
;

message.channel.messages.fetch({limit: amount}).then(messages =>{
    message.channel.bulkDelete(messages);
    message.reply("Les mesages ont bien été supprimé")
})

}
module.exports.help = {
    name: "clear"
}
