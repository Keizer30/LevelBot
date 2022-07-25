const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    const e = new Discord.MessageEmbed()
    .setDescription(`
    **Commandes Membres:**
    -**8ball**, demande lui des choses :eyes:
    -**blague**, une blague aléatoire, blague qui sont sur le site https://www.blagues-api.fr/
    -**uptime**, regarde le temps que le Bot et connecté
    -**ping**, voir la latence du bot
    -**userinfo**, voir les informations d'un membre
    -**serverinfo**, voir les informations du serveurs
    -**uptime**, voir combien de temps le bot est résté connecté

    **Commande Modérateurs:**

    -**say**(mods), parler pour le bot
    -**mp**(mods),envoyé un message privé à la personne mentionné avec le bot
    -**lock**(mods), permet de fermé un salon
    -**unlock**(mods), permet de réouvrir un salon
    -**clear(mods)**, supprime un nombre de message entre 1 et 100
    -**ban(mods)**, bannir des membres
    -**giveaway(mods)**, créé un giveaway avec récompense personallisé 
    -**kick(mods)**, kick des membres
    -**mute(mids)**, le membre ne pourra plus parler sur le serveur
    -**nick(mods)**, renomé un membre comme tu le souhaite 
    -**unmute(mods)**, le membre pourra de nouveau parler
    `)
    .setTitle("Help - Commandes")
    .setTimestamp()
    .setColor("BLUE")
    
    message.channel.send(e)
    }
    




module.exports.help = {
    name: "help"
}