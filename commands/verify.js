module.exports.run = (client, message, args, ran, port) => {
  message.author.send(`<@${message.author.id}>, Are you a human?. verify using this link. Website: https://broosy.sajadpp.repl.co/${message.author.id}`).catch(console.error);
  message.channel.send('<@'+message.author.id+'>, 📩 Checkout your dm.').catch(console.error);
  ran(message);
}
