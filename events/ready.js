module.exports = async(client, data) => {
    console.log("bot lancé")
    client.user.setActivity("in dev...")
    client.channels.cache.get(process.env.STATUS_CHANNEL_ID).send("🟢 bot en ligne avec succès")
}
