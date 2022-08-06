const discord = require('discord.js');
const fs = require('fs');
const path = require('path');
let client = new discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
let port = 3000;
let prefix = ':';
let { listen, ran } = require('./server.js');
client.on('ready', () => {
  client.user.setActivity("captcha", {
        type: "WATCHING"
  });
  console.log(client.user.username+' ready!');
});
client.commands = new discord.Collection();
var commands = fs.readdirSync("./commands").filter(file => file.endsWith('.js'));
for(file of commands){
  const commandName = file.split(".")[0];
  const command = require(`./commands/${commandName}`);
  client.commands.set(commandName, command);
}
client.on('messageCreate', message => {
  client.user.setActivity("captcha", {
        type: "WATCHING"
  });
  if (message.content.startsWith(prefix)) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const commandName = args.shift();
    const command = client.commands.get(commandName);
    if(!command) return message.reply({ content: "Check your spelling before sending."});
    command.run(client, message, args, ran, port);
  }
});
listen(port,client);
client.login('OTk2NjUxNDkzMDY1MjMyNDA1.GaaDoy.-W8TwU3Yv9CBxc28ly4gIcMv77zTrlJVKQqMoI');
