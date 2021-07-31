const Discord = require("discord.js");

module.exports = {
  name: "bot",
  async run(client, message, args) {
    let embed = new Discord.MessageEmbed()

      .setColor("RED")
	  .addField("Bot name :", `${client.user.tag}`,true)
	  .addField("developed by :", "<@852742793100787743>",true)
	  .addField("Server :", "https://discord.gg/bwr",true)
    message.channel.send(embed);
  },
};
