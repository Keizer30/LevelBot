module.exports.run = async (bot, message, args) => {

    const sayMessage = args.join(" ");
    if (!args[0]) return message.channel.send("**Message vide ou invalide.**");
    message.delete().catch(O_o =>{});
    message.channel.send(sayMessage);

}

module.exports.help = {
    name: "say"
}