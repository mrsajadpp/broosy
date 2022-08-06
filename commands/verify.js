module.exports.run = (client, message, args, ran, port) => {
  message.author.send(`<@${message.author.id}>, Are you a human?. verify using this link. Website: https://broosy.sajadpp.repl.co/${message.author.id}`).catch(console.error);
  ran(message);
}
