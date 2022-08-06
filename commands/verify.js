module.exports.run = (client, message, args, ran) => {
  ran(client, message);
  message.author.send(`<@${message.author.id}>, Are you a human?. verify using this link. Website: https://broosy.sajadpp.repl.co/${message.author.id}`);
}
