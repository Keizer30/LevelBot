module.exports.run = async (client, message) => {
    message.delete();
    if (message.author.id === `754033387072782396`) {
        await message.channel.send("<:attend:996847227140067409> Le bot redemarre !");
        process.exit();
    } else {
        message.channel.send(`Cette commande est exclusivement reserver au createur du bot Keizer#4351`)
    }
};

module.exports.help = {
    name: "reload",
  };