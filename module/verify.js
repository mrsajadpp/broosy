function verify(client, message) {
  let msg = message;
  if (msg.guild.roles.cache.find(r => r.name === "familiar") && msg.guild.roles.cache.find(r => r.name === "stranger")) {
    if (msg.member.roles.cache.find(r => r.name === "familiar")) {
      msg.author.send('You already verified.').catch(console.error);
    } else {
     let role = msg.guild.roles.cache.find(r => r.name === "familiar");
     let rm = msg.guild.roles.cache.find(r => r.name === "stranger");
      msg.member.roles.add(role).catch(console.error);
      msg.member.roles.remove(rm).catch(console.error);
      msg.author.send('<@'+msg.author.id+'>, Succesfully verified.').catch(console.error);
    }
  } else {
    msg.channel.send("Oops!. can't find familiar and stranger roles.").catch(console.error);
  }
}
module.exports = verify;
