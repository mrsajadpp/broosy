function verify(msg) {
  let message = msg;
  if (message.guild.roles.cache.find(r => r.name === "familiar") && message.guild.roles.cache.find(r => r.name === "stranger")) {
    if (message.member.roles.cache.find(r => r.name === "familiar")) {
      message.author.send('<@'+message.author.id+'>, You already verified.').catch(console.error);
    } else {
     let role = message.guild.roles.cache.find(r => r.name === "familiar");
     let rm = message.guild.roles.cache.find(r => r.name === "stranger");
      message.member.roles.add(role).catch(console.error);
      message.member.roles.remove(rm).catch(console.error);
      message.author.send('<@'+message.author.id+'>, Succesfully verified.').catch(console.error);
      message.channel.send('<@'+message.author.id+'>, ✅ Succesfully verified.').catch(console.error);
    }
  } else {
    message.channel.send("Oops!. can't find familiar and stranger roles.").catch(console.error);
  }
}
module.exports = verify;
