const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  
       if(message.guild === null)return;

  

  const tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("**Veuillez mentionner un utilisateur valide pour Mute.**");
  if(tomute.hasPermission("KICK_MEMBERS")) return message.reply("Vous n\'avez pas la permission !**");
  const muterole = message.guild.roles.find(`name`, "Muted");
  
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  
  const mutetime = args[1];
  if(!mutetime) return message.reply("**Veuillez spécifiez le temps que le membres doit être mute.");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> a été mute pendant ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> la fin du mute est écoulé, il peux à nouveau parler`);
  }, ms(mutetime));
  
}

module.exports.help = {
    name:"tempmute"
  }