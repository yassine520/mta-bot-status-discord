const Discord = require("discord.js"); // by : Yassine
const Gamedig = require("gamedig"); // by : Yassine

module.exports = {
  name: "status", // by : Yassine
  run(client, message, args) {
    Gamedig.query({
	type: "mtasa", // by : Yassine
      host: "193.23.126.233", // عنوان الخادم حطه هنا
      port: "30615", // بورت الخادم حطه هنا
    })
      .then((state) => {
        if (state["raw"]["numplayers"] === 0) {
          let embed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle(state["name"])
            .addField("Status:", "Online", true)
            .addField(
              "Players:",
              state["raw"]["numplayers"] + "/" + state["maxplayers"],
              true
            )
          message.channel.send({ embed });
        } else {
          let embed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle(state["name"])
            .addField("Status", "Online", true)
            .addField(
              "Players",
              state["raw"]["numplayers"] + "/" + state["maxplayers"],
              true
            )
          message.channel.send({ embed });
        }
      })
      .catch((error) => {
        let embed = new Discord.MessageEmbed()
          .setColor("RED")
          .setTitle(state["name"])
          .addField("Status:", "Offline")
		  .addField(
              "Players",
              state["raw"]["numplayers"] + "/" + state["maxplayers"],
              true
            )
        message.channel.send({ embed });
      });
  },
};
