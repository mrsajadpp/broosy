module.exports.run = (client, message, args, ran) => {
  ran(client, message);
  message.author.send(`<@${message.author.id}>, Are you a human?. verify using this link. Website: http://localhost:3003/${message.author.id}`);
}
