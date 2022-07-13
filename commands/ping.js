module.exports.run = (client, message, args) => {
    const debut = Date.now();
    message.channel.send('Calcul du ping...')

    .then((m) => m.edit(`le ping est de **${Date.now() - debut}** ms`));
}

module.exports.help = {
    name: "ping"
}