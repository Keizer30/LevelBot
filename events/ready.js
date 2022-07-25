module.exports = async(client, data) => {
    console.log("bot lancé")
    client.user.setActivity("Nigapi le gentil")
    client.channels.cache.get("899242192827203586").send("🟢 bot en ligne avec succès")
}
