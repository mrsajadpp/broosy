module.exports.run = (client, message, args, ran, port) => {
  message.author.send(`<@${message.author.id}>, Are you a human?. verify using this link. Website: http://localhost:${port}/${message.author.id}`).catch(console.error);
  ran(message);
}
