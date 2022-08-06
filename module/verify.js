function verify(client, message, author) {
  var msg = message;
  var auth = author;
  var role;
  var rm;
  if (msg.guild.roles.cache.find(r => r.name === "familiar") && msg.guild.roles.cache.find(r => r.name === "stranger")) {
    if (msg.member.roles.cache.find(r => r.name === "familiar")) {
      msg.author.send('You already verified.');
    } else {
      role = msg.guild.roles.cache.find(r => r.name === "familiar");
      rm = msg.guild.roles.cache.find(r => r.name === "stranger");
      msg.member.roles.add(role).catch(console.error);
      msg.member.roles.remove(rm).catch(console.error);
      msg.author.send('<@'+msg.author.id+'>, Succesfully verified.');
    }
  } else {
    msg.channel.send("Oops!. can't find familiar and stranger roles.");
  }
}
module.exports = verify;
